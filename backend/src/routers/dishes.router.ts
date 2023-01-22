import {sample_foods, sample_tags} from "../data";
import {raw, Router} from "express";
import asyncHandler from "express-async-handler";
import {DishesModel} from "../models/dishes.model";
import {UserModel} from "../models/users.model";

const router = Router();
router.get("/seed", asyncHandler(async (req, res) => {
    const dishesCount = await DishesModel.countDocuments();
    if(dishesCount > 0){
        res.send("Seed is already done!");
        return;
    }
    await DishesModel.create(sample_foods);
    res.send("seed is done");
}))

router.get("/", asyncHandler( async (req, res) => {
    const dishes = await DishesModel.find();
    res.send(dishes);
}));

router.get("/search/:searchTerm", asyncHandler( async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i'); // case insensitive
    const dishes = await DishesModel.find({name: {$regex: searchRegex}});
    res.send(dishes);
}))

router.get("/tags", asyncHandler (async (req, res) =>{
    const tags = await DishesModel.aggregate([
        {
            $unwind: '$tags' // convert tag array to corresponding elements
        },
        {
            $group: {
                _id: '$tags',
                count: {$sum: 1}
            }
        },
        {
            $project:{
                _id: 0,
                name:'$_id',
                count: '$count'
            }
        }
    ]).sort({count: -1}); //descending

    const all = {
        name: "All",
        count: await DishesModel.countDocuments()
    }
    tags.unshift(all); // add to the beginning of tags
    res.send(tags);
}))

router.get("/tag/:tagName", asyncHandler (async (req, res) => {
    const dishes = await DishesModel.find({tags: req.params.tagName})
    res.send(dishes);
}));

router.get("/:dishId", asyncHandler( async (req, res) => {
    const dish = await DishesModel.findById(req.params.dishId)
    res.send(dish);
}));

router.post("/addDish",  asyncHandler(async (req, res) => {
    console.log(req.body)
    const {id} = req.body;
    console.log("oist")
    const dish = await DishesModel.findOne({id});
    if(dish){
        console.log(dish.quantity + " piews ")
        dish.quantity -= 1;
        console.log(dish.quantity + " drugws ")

        await DishesModel.updateOne( { "id" : {id} },
            { $set: { "quantity": dish.quantity } });
        const dish2 = await DishesModel.findOne({id});
        // @ts-ignore
        console.log(dish2.quantity + " upd ")
        // return {"message": "test"}
    }
    res.send(dish);

    }));

export default router;