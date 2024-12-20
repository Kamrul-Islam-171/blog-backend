import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { blogService } from "./blogs.service";


const createBlog = catchAsync(async(req, res) => {

    const result = await blogService.createBlogIntoDB(req.body)

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Blog created successfully',
        data: result
    })
})

const updateBlog = catchAsync(async(req, res) => {

    const {id} = req.params;
    
    const result = await blogService.updateBlogIntoDB(id as string,req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blog updated successfully',
        data: result
    })
})

const deleteBlog = catchAsync(async(req, res) => {

    const {id} = req.params;
    
    await blogService.deleteBlogFromDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blog deleted successfully',
        data: null
    })
})

export const BlogController = {
    createBlog,
    updateBlog,
    deleteBlog
}