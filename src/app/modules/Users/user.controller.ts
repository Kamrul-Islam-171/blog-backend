import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { UserService } from "./user.service";

const createUser = catchAsync(async(req, res) => {

    const result = await UserService.createUserIngoDB(req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User Is created successfully',
        data: result
    })
})

export const UserController = {
    createUser
}