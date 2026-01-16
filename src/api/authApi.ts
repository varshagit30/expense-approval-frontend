import { api } from "./axios.ts";

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string;
}

export const login = async (
    payload: LoginRequest
): Promise<LoginResponse> => {
    const res = await api.post<LoginResponse>("/auth/login", payload);
    return res.data;
};
