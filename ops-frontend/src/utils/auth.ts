// src/utils/auth.ts

export const getToken = () => localStorage.getItem("token");

export const saveToken = (token: string) => localStorage.setItem("token", token);

export const clearToken = () => localStorage.removeItem("token");

export const isAuthenticated = () => !!localStorage.getItem("token");
//"hello"   !("hello")-> false,     !!("hello")->true
//"my token"   !("my token")-> false,     !!("my token")->true
