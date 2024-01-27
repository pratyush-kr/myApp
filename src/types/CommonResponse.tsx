import ResponseData from "./ResponseData";

export interface CommonResponse {
  commonResponseId: number;
  responseCode: number;
  responseData: ResponseData;
}
