import axios, { AxiosError } from "axios";
import ResponseData from "../types/ResponseData";

export const loginService = async (username: string, password: string) => {
  const data = {
    username: username,
    password: password,
  };
  try {
    const response = await axios.post<ResponseData>("http://192.168.1.5:8080/user/login", data);
    console.log(response.data);
    return response.data.success;
  } catch (e) {
    console.error(e);
  }
  return false;
};
