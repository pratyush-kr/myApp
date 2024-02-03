import axios from "axios";
import { CommonResponse } from "../types/CommonResponse";

export const loginService = async (username: string, password: string) => {
  const data = {
    username: username,
    password: password,
  };
  try {
    const response = await axios.post<CommonResponse>(`${process.env.EXPO_PUBLIC_API_URL}/user/login`, data);
    return response.data.responseData.success;
  } catch (err) {
    console.log(JSON.stringify(err));
  }
  return false;
};
