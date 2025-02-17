import express from 'express';

import { orderController } from './payment.controller';

const router = express.Router();

router.post(
  '/create-payment',
//   ValidateRequest(orderValidation.orderValidationSchema),
  orderController.createOrder,
);
router.post(
  '/success-payment',
  orderController.successPayment,
);
router.post(
  '/failed',
  orderController.failedPayment,
);
router.post(
  '/canceled',
  orderController.canceledPayment,
);

export const OrderRoutes = router;
