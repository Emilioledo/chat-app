/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { setAppError } from "../utils/setAppError";

const baseURL = "http://localhost:3000/api/users";

interface UserData {
  username: string;
  password: string;
}

export const loginUser = async (userData: UserData) => {
  try {
    const body = {
      body: userData,
    };
    const result = await axios.post(`${baseURL}/login`, body);
    return result;
  } catch (error: any) {
    setAppError(error.code, error.message);
  }
};

export const createUser = async (userData: UserData) => {
  try {
    const body = {
      body: userData,
    };
    const result = await axios.post(`${baseURL}`, body);
    return result;
  } catch (error: any) {
    setAppError(error.code, error.message);
  }
};
