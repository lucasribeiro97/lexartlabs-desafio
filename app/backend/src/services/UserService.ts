import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
// import { IUserResponse } from '../Interfaces/users/IUser';
import { IUser } from '../interfaces/users/IUser';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import UserModel from '../models/UserModel';
import { IUserModel } from '../interfaces/users/IUserModel';

export interface LoginResponseData {
  token: string;
}

type LoginResponse = ServiceResponse<LoginResponseData>;

type Role = { role: string };

export default class UserService {
  constructor(
    private userModel: IUserModel<IUser> = new UserModel(),
  ) { }

  public async createUser(user: IUser) {
    const userExists = await this.userModel.findByEmail(user.email);
    if (userExists) return {
      status: 'CONFLICT',
      data: { message: 'User already exists' },
    };
    
    const { password } = user;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = { ...user, password: hashedPassword };
    const createdUser = await this.userModel.createUser(newUser);
    return createdUser;
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
