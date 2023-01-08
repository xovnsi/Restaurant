import {sample_users} from "../data";
import jwt from "jsonwebtoken";
import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
    const {username, password} = req.body;
    const user = sample_users.find(user => user.username === username && user.password === password)

    if(user){
        res.send(generateTokenResponse(user));
    }else{
        res.status(400).send("User name or password is not valid")
    }
})

const generateTokenResponse = (user: any) =>{
    const token = jwt.sign({
        username: user.username, isAdmin: user.isAdmin
    }, "key", {
        expiresIn: "30d"
    })

    user.token = token;
    return user;
}

export default router;