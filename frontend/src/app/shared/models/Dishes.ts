export class Dishes{
  id!:string;
  name!:string;
  tags?:string[];
  ingredients?:string[];
  quantity!:number;
  maxQuantity!:number;
  price!:number;
  description?:string;
  imageUrl?:string;
  imageList?:string[];

  ratings!: number[];
}
