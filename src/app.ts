// const express = require('express')

import { Request, Response } from "express";
import express from "express";
import cors from "cors";
import router from "./app/route";
import globalErrorHandler from "./app/middlewares/globalErrorHandeler";
import notFound from "./app/middlewares/notFound";

const app = express()

app.use(express.json());
app.use(cors());

// app.use("/api/v1", router)
app.use("/api", router)

app.get('/', (req: Request , res : Response ) => {
  res.send('Hello World!')
})

// const test = async(req: Request , res : Response ) => {
//   // Promise.reject();
 
// }

// app.get('/', test)

app.use(globalErrorHandler);
app.use(notFound);

export default app;