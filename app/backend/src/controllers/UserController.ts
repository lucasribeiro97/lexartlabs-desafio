import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP'
import UserService from '../services/UserService';

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) { }

  public async createUser(req: Request, res: Response) {
    const { email, password, username, role } = req.body;
  }

  public async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const { status, data } = await this.userService.login(email, password);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getRole(req: Request, res: Response) {
    const { email } = res.locals.auth;

    const { status, data } = await this.userService.getRole(email);

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
