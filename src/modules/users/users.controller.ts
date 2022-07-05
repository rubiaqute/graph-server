import { findById } from "./users.service";

export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}
export const UsersQueries = {
    user: (empty: null, data) => findById(data.id),
}