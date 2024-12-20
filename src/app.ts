// const express = require('express')
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import express from "express";
import cors from "cors";
import router from "./app/route";
import globalErrorHandler from "./app/middlewares/globalErrorHandeler";

const app = express()

app.use(express.json());
app.use(cors());

app.use("/api/v1", router)

app.get('/', (req: Request , res : Response ) => {
  res.send('Hello World!')
})

app.use(globalErrorHandler);

export default app;