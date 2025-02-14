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

const unblockBlockUser = catchAsync(async(req, res) => {
    const {userId} = req.params;
    const query = req.query;
    await UserService.blockUnblockUser(userId, query);
    // console.log(query)
  
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `User ${query?.isBlock === 'true' ? 'blocked' : 'unblocked'} successfully`,
        data: {
           
        }
    })
})
const getAllCustomers = catchAsync(async(req, res) => {
    const query = req.query;
    
    const result = await UserService.getAllUsersFromDB(query);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User retrives successfully',
        data: result
    })
})



export const UserController = {
    createUser,
    unblockBlockUser,
    getAllCustomers
    
}