import {sample_foods, sample_tags} from "../data";
import { Router } from "express";

const router = Router();
router.get("/", (req, res) => {
    res.send(sample_foods);
})

router.get("/search/:searchTerm", (req, res) =>{
    const searchTerm = req.params.searchTerm;
    const dishes =  sample_foods.filter(dish => dish.name.toLowerCase().includes(searchTerm.toLowerCase())
        || dish.type.toLowerCase().includes(searchTerm.toLowerCase())
        || dish.category.toLowerCase().includes(searchTerm.toLowerCase())
        || dish.cuisine.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(dishes);
})

router.get("/tags", (req, res) =>{
    res.send(sample_tags);
});

router.get("/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const dishes = sample_foods.filter(dish =>
        dish.cuisine.toLowerCase().includes(tagName.toLowerCase())
        || dish.category.toLowerCase().includes(tagName.toLowerCase())
        || dish.type.toLowerCase().includes(tagName.toLowerCase()));
    res.send(dishes);
})

router.get("/:dishId", (req, res) => {
    const dishId = req.params.dishId;
    const dish = sample_foods.find(dish => dish.id == dishId);
    res.send(dish);
})

export default router;