import express from 'express';
import { productControler } from './product.controller';
import ValidateRequest from '../../middlewares/validateRequests';
import { productValidation } from './product.validation';
import Auth from '../../middlewares/auth';

const router = express.Router();

//route calls the controller function
router.post(
  '/add-new',
  Auth('admin'),
  ValidateRequest(productValidation.productValidationSchema),
  productControler.createProduct,
);
router.get('/get-all-products', productControler.getAllBikes);
router.patch('/:productId', productControler.updateProduct);
// router.put('/:productId', productControler.updateProduct);
router.delete('/:productId', productControler.deleteProduct);

export const ProductRoutes = router;
