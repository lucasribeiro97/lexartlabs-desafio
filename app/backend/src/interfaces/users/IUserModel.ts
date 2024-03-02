export interface IUserModel<IUser> {
  createUser(user: IUser): Promise<IUser>,
  findByEmail(email: string): Promise<IUser | null>,
}
