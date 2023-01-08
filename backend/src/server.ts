import express from "express";
import cors from "cors";
import dishesRouter from './routers/dishes.router';
import userRouter from "./routers/user.router";
import dotenv from 'dotenv';
import { dbConnect } from "./configs/database.config";

dotenv.config();
dbConnect();

const app = express();
app.use(express.json());

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/dishes", dishesRouter);
app.use("/api/users", userRouter);

const port = 5000;
app.listen(port, () =>{
    console.log("Website served on http://localhost:" + port);
})