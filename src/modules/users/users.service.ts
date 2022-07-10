import { HttpService } from '@nestjs/axios'
import { User } from "./users.controller";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const httpService = new HttpService()
const url = process.env.USERS_URL || 'http://localhost:3004/v1/users'


export async function findById(id: string): Promise<User> {
    const { data } = await httpService.axiosRef.get(`${url}/${id}`);

    return data
}

export async function login(userData): Promise<string> {
    try {
        const { data } = await httpService.axiosRef.post(`${url}/login`, userData);

        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export async function register(user: string): Promise<User> {
    try {
        const { data } = await httpService.axiosRef.post(`${url}/register`, user);

        return data
    } catch (e) {
        throw new Error(e.message)
    }
}