import axios from "axios";
import { getLocalStorage } from "src/utils";
import { ACCESS_TOKEN } from "src/constants";

const BASE_URL = "https://shop.cyberlearn.vn/api";

export const axiosWithoutAuth = axios.create({
  baseURL: BASE_URL,
  timeout: 180_000, // ms -> 3 phut, sau 3phut thi ngat ket noi
});

// interceptor: đính kèm 1 vài thông tin trước khi gửi đi

axiosWithoutAuth.interceptors.request.use(
  
  // dành cho call api thành công
  (config)=>{
    
    config.headers["Authorization"] = `Bearer ${getLocalStorage(ACCESS_TOKEN)}`;
    config.headers["TOKEN_CYBER_SOFT"] =  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MDA4IiwiSGV0SGFuU3RyaW5nIjoiMjgvMDEvMjAyNCIsIkhldEhhblRpbWUiOiIxNzA2NDAwMDAwMDAwIiwibmJmIjoxNjc3NDMwODAwLCJleHAiOjE3MDY1NDc2MDB9.eo3y0MmcjE8Jl4fRzUJLBoZzylEeFDcUTfWXvtb1hdc`;
    return config;
  },
  // dành cho call api thất bại

(e)=>{
  return Promise.reject(e);
})