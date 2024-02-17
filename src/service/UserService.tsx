import axios from "axios";
import { CommonResponse } from "../types/CommonResponse";
import useLoginStorage from "./UseLoginStorage";

export const loginService = async (username: string, password: string) => {
  const data = {
    username: username,
    password: password,
  };
  try {
    const response = await axios.post<CommonResponse>(`${process.env.EXPO_PUBLIC_API_URL}/user/login`, data);
    const { readValue, saveValue } = await useLoginStorage();
    saveValue(response.data.responseData.token.token);
    return response.data.responseData.success;
  } catch (err) {
    console.log(JSON.stringify(err));
  }
  return false;
};
