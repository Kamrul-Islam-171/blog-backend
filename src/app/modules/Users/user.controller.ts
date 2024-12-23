import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { UserService } from "./user.service";

const createUser = catchAsync(async(req, res) => {

    const result = await UserService.createUserIngoDB(req.body)
    const {_id, email, name} = result;
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'User registered successfully',
        data: {
            _id,
            name,
            email
        }
    })
})

export const UserController = {
    createUser
}