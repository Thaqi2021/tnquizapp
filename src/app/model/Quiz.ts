import { Category } from "./Category";

export interface Quiz{
    qid:number;

    title:String;
    description:String;
    maxMark:number;
    noOfQuestion:number;
    isActive:boolean;
    category:Category
}