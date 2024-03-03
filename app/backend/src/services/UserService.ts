import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
// import { IUserResponse } from '../Interfaces/users/IUser';
import { IUser } from '../interfaces/users/IUser';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import UserModel from '../models/UserModel';
import { IUserModel } from '../interfaces/users/IUserModel';
import SequelizeUser from '../database/models/SequelizeUser';

export interface LoginResponseData {
  token: string;
}

type LoginResponse = ServiceResponse<LoginResponseData>;

type Role = { role: string };

export default class UserService {
  constructor(
    private userModel: IUserModel<IUser> = new UserModel(),
    private model = SequelizeUser,
  ) { }

  public async createUser(email: string, password: string, username: string): Promise<LoginResponse> {
    const userExists = await this.model.findOne({ where: { email } });
    if (userExists) {
      return { status: 'CONFLICT', data: { message: 'User already exists' } };
    }
  
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await this.userModel.createUser({ email, password: hashedPassword, username, role: 'user'});
  
    const payload = { id: newUser.id, email: newUser.email };
    const secret = 'jwt_secret';
    const token = jwt.sign(payload, secret, { expiresIn: '10d' });
  
    return { status: 'CREATED', data: { token } };
  }

  public async login(email: string, password: string): Promise<LoginResponse> {
    const user = await this.userModel.findByEmail(email);

    if (!user) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const payload = { id: user.id, email: user.email, role: user.role };
    const secret = 'jwt_secret';

    const token = jwt.sign(payload, secret, { expiresIn: '10d' });

    return { status: 'SUCCESSFUL', data: { token } };
  }

  public async getRole(email: string): Promise<ServiceResponse<Role>> {
    const user = await this.userModel.findByEmail(email);

    if (!user) {
      return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    }

    return { status: 'SUCCESSFUL', data: { role: user.role } };
  }
}
