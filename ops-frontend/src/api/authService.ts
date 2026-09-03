// src/api/authService.ts
import axiosClient from "./axiosClient";
import type { LoginRequest } from "../types/LoginRequest";

export const login = async (loginData: LoginRequest) => {
    return await axiosClient.post("/login", loginData);
};