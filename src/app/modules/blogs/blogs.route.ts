
import  express  from 'express';
import { BlogController } from './blogs.controller';
import ValidateRequest from '../../middlewares/validateRequests';
import { blogValidation } from './blogs.validation';

const router = express.Router();

router.post('/create-blog', ValidateRequest(blogValidation.createBlogValidation), BlogController.createBlog);

router.patch('/:id', ValidateRequest(blogValidation.updateBlogValidation), BlogController.updateBlog);

router.delete('/:id', BlogController.deleteBlog );
router.get('/', BlogController.getBlogs );

export const BlogsRoute = router;