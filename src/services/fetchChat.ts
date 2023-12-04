/* eslint-disable @typescript-eslint/no-explicit-any */
import io from "socket.io-client";
import { setAppError } from "../utils/setAppError";

const baseURL = "http://localhost:3001";

export const connectSocket = () => {
  try {
    const socketConnection = io(baseURL);
    return socketConnection;
  } catch (error: any) {
    setAppError(error?.title, error?.message);
  }
};
