
import  express  from 'express';

import { UserController } from './user.controller';
import Auth from '../../middlewares/auth';
// import ValidateRequest from '../../middlewares/validateRequests';
// import { UserValidation } from './user.validation';
const router = express.Router();

// router.post('/create-user', ValidateRequest(UserValidation.createUserValidation), UserController.createUser);

router.get('/all-customers', UserController.getAllCustomers)
router.patch('/:userId', Auth('admin'), UserController.unblockBlockUser);


export const UserRoutes = router;