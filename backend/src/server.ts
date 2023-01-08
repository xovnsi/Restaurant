import express from "express";
import cors from "cors";
import {sample_foods, sample_tags, sample_users} from "./data";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/dishes", (req, res) => {
    res.send(sample_foods);
})

app.get("/api/dishes/search/:searchTerm", (req, res) =>{
    const searchTerm = req.params.searchTerm;
    const dishes =  sample_foods.filter(dish => dish.name.toLowerCase().includes(searchTerm.toLowerCase())
        || dish.type.toLowerCase().includes(searchTerm.toLowerCase())
        || dish.category.toLowerCase().includes(searchTerm.toLowerCase())
        || dish.cuisine.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(dishes);
})

app.get("/api/dishes/tags", (req, res) =>{
    res.send(sample_tags);
});

app.get("/api/dishes/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const dishes = sample_foods.filter(dish =>
        dish.cuisine.toLowerCase().includes(tagName.toLowerCase())
        || dish.category.toLowerCase().includes(tagName.toLowerCase())
        || dish.type.toLowerCase().includes(tagName.toLowerCase()));
    res.send(dishes);
})

app.get("/api/dishes/:dishId", (req, res) => {
    const dishId = req.params.dishId;
    const dish = sample_foods.find(dish => dish.id == dishId);
    res.send(dish);
})

app.post("/api/users/login", (req, res) => {
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

const port = 5000;
app.listen(port, () =>{
    console.log("Website served on http://localhost:" + port);
})