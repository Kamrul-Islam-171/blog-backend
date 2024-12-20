import { Router } from "express";
import { UserRoutes } from "../modules/Users/user.route";

const router = Router();

const moduleroutes = [
    {
        path: '/users',
        route: UserRoutes
    }
]

moduleroutes.forEach((route) => router.use(route.path, route.route))

export default router;