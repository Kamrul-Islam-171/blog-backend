import { model, Schema } from 'mongoose';
import { Product } from './product.interface';

const productSchem = new Schema<Product>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'Electric'],
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  { timestamps: true },
);

productSchem.post('save', function (doc, next) {
  next();
});

export const ProductModel = model<Product>('ProductModel', productSchem);
