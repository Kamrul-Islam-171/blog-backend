import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIngoDB = async(payload: TUser) => {
    const res = User.create(payload);
    return res;
}


export const UserService = {
    createUserIngoDB
}