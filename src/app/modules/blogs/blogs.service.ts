
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

const updateBlogIntoDB = async(id: string, payload: Partial<TBlog>) => {
    // first check if this id is exist
    const isBlogExists = await Blog.findById(id);
    
    if(!isBlogExists) {
        throw new AppError(httpStatus.NOT_FOUND, "Blog is not found!");
    }
    const res = await Blog.findByIdAndUpdate(id, payload, {new: true}).populate('author');
    return res;
}

const deleteBlogFromDB = async(id: string) => {
    // first check if this id is exist
    const isBlogExists = await Blog.findById(id);
    
    if(!isBlogExists) {
        throw new AppError(httpStatus.NOT_FOUND, "Blog is not found!");
    }
    const res = await Blog.findByIdAndDelete(id);
    return res;
}

export const blogService = {
    createBlogIntoDB,
    updateBlogIntoDB,
    deleteBlogFromDB
}

