import mongoose from 'mongoose';
import { Product } from './product.interface';
import { ProductModel } from './product.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { ProductSearchAbleFields } from './product.constant';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllBikesFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(ProductModel.find(), query)
    .search(ProductSearchAbleFields)
    .sort()
    .filter()
    .paginate()
    .fieldsLimiting();
  const result = await productQuery.modelQuery;
  const meta = await productQuery.countTotal();
  return {
    meta,
    result,
  };
};

const getSingleBikeFromDB = async (id: string) => {
  const result = await ProductModel.findById({
    _id: new mongoose.Types.ObjectId(id),
  });
  return result;
};

const updateProductIntoDB = async (id: string, product: Product) => {
  // const result = await ProductModel.updateOne({_id : new mongoose.Types.ObjectId(id)}, {...product});

  //update the data and give you the details of updated data
  const result = await ProductModel.findByIdAndUpdate(
    { _id: new mongoose.Types.ObjectId(id) },
    product,
    { new: true },
  );
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.deleteOne({
    _id: new mongoose.Types.ObjectId(id),
  });
  return result;
};

export const productService = {
  createProductIntoDB,
  getAllBikesFromDB,
  getSingleBikeFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
