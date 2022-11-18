import { findById, login, register } from "./users.service";

export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}
export const UsersQueries = {
    user: (empty: null, data) => findById(data.id),
    jwt: (empty: null, data) => login(data)
}

export const UsersMutations = {
    register: (empty: null, data) => register(data),
}