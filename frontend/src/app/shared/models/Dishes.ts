export class Dishes{
  id!:string;
  name!:string;
  cuisine!:string;
  type!:string;
  category!:string;
  ingredients?:string[];
  quantity!:number;
  maxQuantity!:number;
  price!:number;
  description?:string;
  imageUrl?:string;

  ratings!: number;
}
