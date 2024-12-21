
import  express  from 'express';
import { BlogController } from './blogs.controller';
import ValidateRequest from '../../middlewares/validateRequests';
import { blogValidation } from './blogs.validation';

const router = express.Router();

router.post('/create-blog', ValidateRequest(blogValidation.createBlogValidation), BlogController.createBlog);


export const BlogsRoute = router;