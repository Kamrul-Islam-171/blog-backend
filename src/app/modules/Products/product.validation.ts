import { z } from 'zod';

const productValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, { message: 'Name is required and cannot be empty.' }),
    image: z
      .string()
      .min(1, { message: 'Image is required and cannot be empty.' }),
    brand: z
      .string()
      .min(1, { message: 'Brand is required and cannot be empty.' }),
    price: z
      .number()
      .positive({ message: 'Price must be a positive number.' })
      .refine((value) => value > 0, {
        message: 'Price must be greater than zero.',
      }),
    category: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric'], {
      message: 'Category must be one of: Mountain, Road, Hybrid, Electric.',
    }),
    description: z
      .string()
      .min(1, { message: 'Description is required and cannot be empty.' }),
    quantity: z
      .number()
      .int({ message: 'Quantity must be an integer.' })
      .min(0, { message: 'Quantity must be at least 0.' }),
    inStock: z.boolean({
      required_error: 'In-stock status is required.',
      invalid_type_error: 'In-stock status must be a boolean.',
    }),
  }),
});

export const productValidation = {
  productValidationSchema,
};
