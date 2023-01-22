import {sample_foods, sample_users} from "../data";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Router } from "express";
import asyncHandler from "express-async-handler";
import {DishesModel} from "../models/dishes.model";
import {User, UserModel} from "../models/users.model";


const router = Router();
router.get("/seed", asyncHandler(async (req, res) => {
    const usersCount = await UserModel.countDocuments();
    if(usersCount > 0){
        res.send("Seed is already done!");
        return;
    }
    await UserModel.create(sample_users);
    res.send("Seed is done");
}))


router.post("/login", asyncHandler( async (req, res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});

    if(user && (await bcrypt.compare(password, user.password))){
        res.send({user: user, token: generateTokenResponse(user)});
    }else{
        res.status(400).send("Username or password is not valid")
    }
}));

router.post("/register", asyncHandler(async (req, res) => {
    const {name, username, password, address} = req.body;
    const user = await UserModel.findOne({username});
    if(user){
        res.status(400).send("User already exist")
        return;
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser: User = {
        id:'', // generated in database
        name,
        username: username.toLowerCase(),
        password: encryptedPassword,
        address,
        isAdmin: false
    };
    const dbUser = await UserModel.create(newUser);
    res.send(generateTokenResponse(dbUser)) // login after registration
}))

const generateTokenResponse = (user: any) =>{
    const token = jwt.sign({
        username: user.username, isAdmin: user.isAdmin
    }, "key", {
        expiresIn: "30d"
    })
    console.log("gen " + token);
    user.token = token;
    console.log(user)
    return token;
}

export default router;