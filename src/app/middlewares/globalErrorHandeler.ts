/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { TerrorSourse } from "../interface/error";
import HandleZodError from "../errors/HandleZodError";
import config from "../config";


const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Something Went wrong";

    //default values
    let errorSources : TerrorSourse[] = [{
        path: '',
        message: 'Something went wrong'
    }]

    if(err?.name === 'ZodError') {
        const simplifiedError = HandleZodError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources;
    }

    return res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        stack: config.NODE_ENV === 'development' ? err.stack: null,
        err
    })
}

export default globalErrorHandler;



/*
error pattern

success
message
errorSources : [
   'path': '',
   'message' : ''
]
stack   


*/