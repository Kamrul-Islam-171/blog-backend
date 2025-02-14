import { TRole } from "./user.interface";


export const Role: TRole[] = ['admin', 'customer'];

export const USER_ROLE = {

    user : 'customer',
    admin: 'admin'
} as const;

