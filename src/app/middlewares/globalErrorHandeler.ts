/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";


const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something Went wrong";


    return res.status(statusCode).json({
        success: false,
        message,
        err
    })
}

export default globalErrorHandler;

// const globalErrorHandler = (err, req, res, next) => {
//     const statusCode = err.statusCode || 500;
//     const message = err.message || "Something Went wrong";


//     return res.status(statusCode).json({
//         success: false,
//         message,
//         err
//     })
// }

// export default globalErrorHandler;