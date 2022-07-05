import { HttpService } from '@nestjs/axios'
import { usersUrl } from '../../main';
import { User } from "./users.controller";

const httpService = new HttpService()
const url = usersUrl || 'http://localhost:3004/v1/users'


export async function findById(id: string): Promise<User> {
    const { data } = await httpService.axiosRef.get(`${url}/${id}`);

    return data
}