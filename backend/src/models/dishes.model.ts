import {model, Schema} from "mongoose";

export interface Dishes{
    id:string;
    name:string;
    price:number;
    tags:string[];
    ingredients:string[];
    quantity:number;
    maxQuantity:number;
    description:string;
    imageUrl:string;
    ratings: number[];
}

export const DishesSchema = new Schema<Dishes>(
    {
        name: {type: String, required: true},
        price: {type: Number, required: true},
        tags: {type: [String], required: true},
        ingredients: {type: [String], required: true},
        quantity: {type: Number, required: true},
        maxQuantity: {type: Number, required: true},
        description: {type: String, required: false},
        imageUrl: {type: String, required: true},
        ratings: {type: [Number], default: [0]}
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps: true
    }
);

export const DishesModel = model<Dishes>('dishes', DishesSchema);
