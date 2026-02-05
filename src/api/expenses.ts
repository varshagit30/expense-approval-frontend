import { api } from "./axios";

export interface Expense {
    id: number;
    title: string;
    description: string;
    currentStatus: string;
    createdBy: number;
}

export const getExpenses = async (): Promise<Expense[]> => {
    const res = await api.get<Expense[]>("/api/expenses");
    return res.data;
};

export interface CreateExpenseRequest {
    title: string;
    description: string;
    createdBy: number;
}

export const createExpense = async (payload: CreateExpenseRequest) => {
    const res = await api.post("/api/expenses", payload);
    return res.data;
};

