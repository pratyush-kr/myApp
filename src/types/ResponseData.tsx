import Token from "./Token";
import user from "./User";

export default interface ResponseData {
  responseId: number;
  apiName: string;
  userId: number;
  success: boolean;
  users: user[];
  token: Token;
}
