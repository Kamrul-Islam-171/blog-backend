import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { blogService } from "./blogs.service";


const createBlog = catchAsync(async(req, res) => {

    const result = await blogService.createBlogIntoDB(req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blog Is created successfully',
        data: result
    })
})

export const BlogController = {
    createBlog
}