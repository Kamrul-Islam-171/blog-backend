
import { Types } from "mongoose";
import { User } from "../Users/user.model";
import { TBlog } from "./blogs.interface"
import { Blog } from "./blogs.model"
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const createBlogIntoDB = async(payload: TBlog) => {

    const id: Types.ObjectId = new Types.ObjectId(payload.author)
    const user = await User.isUserExists(id.toString());

    if(!user) {
        throw new AppError(httpStatus.NOT_FOUND, "User is not found")
    }
    const res = await Blog.create(payload);
    return res;
}

export const blogService = {
    createBlogIntoDB
}

