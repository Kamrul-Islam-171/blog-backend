import { Router } from "express";
import { UserRoutes } from "../modules/Users/user.route";
import { BlogsRoute } from "../modules/blogs/blogs.route";

const router = Router();

const moduleroutes = [
    {
        path: '/users',
        route: UserRoutes
    },
    {
        path: '/blogs',
        route: BlogsRoute
    }
]

moduleroutes.forEach((route) => router.use(route.path, route.route))

export default router;