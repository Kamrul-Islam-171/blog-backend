import mongoose from 'mongoose';
import { TUser } from './user.interface';
import { User } from './user.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
const createUserIngoDB = async (payload: TUser) => {
  const res = await User.create(payload);
  return res;
};
const getAllUsersFromDB = async (query: Record<string, unknown>) => {
  const customerQuery = new QueryBuilder(User.find(), query).filter().paginate().fieldsLimiting();
  const result = await customerQuery.modelQuery;
  const meta = await customerQuery.countTotal();
  return {
    meta,
    result,
  };
};

const blockUnblockUser = async (id: string, query: Record<string, unknown>) => {
  const user = await User.findOne(new mongoose.Types.ObjectId(id));
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User is not found !!');
  }
  // if (user?.isBlocked) {
  //   throw new AppError(httpStatus.OK, 'User is already blocked !!');
  // }

  const res = await User.findByIdAndUpdate(id, {
    $set: {
      isBlocked: query?.isBlock,
    },
  });
  return res;
};
export const UserService = {
  createUserIngoDB,
  blockUnblockUser,
  getAllUsersFromDB,
};
