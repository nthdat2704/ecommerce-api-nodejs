import { JwtPayload } from 'jsonwebtoken';

export interface IAuthRequestPayload extends Request {
  refreshToken: string;
}
export interface IDecodedAccessToken extends JwtPayload {
  userName: string;
}
export type TAccessToken = IDecodedAccessToken | undefined;
