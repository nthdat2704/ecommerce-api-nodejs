import { JwtPayload } from 'jsonwebtoken';

export interface IUserDataPayload {
  userName: string;
  email: string;
  name?: string;
  userPassword: string;
}
export interface IDecodedRefreshToken extends JwtPayload {
  userName: string;
}
export type TRefreshToken = IDecodedRefreshToken | undefined;
