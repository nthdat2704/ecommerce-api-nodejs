export interface ISuccessResponse<T> {
  message: string;
  statusCode: number;
  status: string;
  data: T;
}
