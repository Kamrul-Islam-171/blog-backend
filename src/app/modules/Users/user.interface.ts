import { Model } from "mongoose";

export type TRole  = 'admin' | 'user';

export interface TUser {
    name: string;
    email:string;
    password:string;
    role: "admin" | "user";
    isBlocked: boolean;
}

export interface UserStaticModel extends Model<TUser> {
    isUserExists(id:string): Promise<TUser>;  
}
  
