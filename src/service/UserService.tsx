import axios from "axios";
import { CommonResponse } from "../types/CommonResponse";

export const loginService = async (username: string, password: string) => {
  const data = {
    username: username,
    password: password,
  };
  try {
    const response = await axios.post<CommonResponse>("http://192.168.1.5:8080/user/login", data);
    return response.data.responseData.success;
  } catch (e) {
    console.error(e);
  }
  return false;
};
