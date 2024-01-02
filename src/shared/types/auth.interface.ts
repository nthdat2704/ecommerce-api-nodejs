import { JwtPayload } from 'jsonwebtoken';

export interface IAuthRequestPayload extends Request {
  refreshToken: string;
}
export interface IDecodedAccessToken extends JwtPayload {
  userName: string;
  isAdmin: boolean;
}
export type TAccessToken = IDecodedAccessToken | undefined;
