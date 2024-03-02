import { IUser } from '../interfaces/users/IUser';
import { IUserModel } from '../interfaces/users/IUserModel';
import SequelizeUser from '../database/models/SequelizeUser';

export default class UserModel implements IUserModel<IUser> {
  private model = SequelizeUser;

  async createUser(user: IUser): Promise<IUser> {
    const { email, password, username, role } = user;
    const newUser = await this.model.create({ email, password, username, role });
    return newUser;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });
    return user;
  }
}