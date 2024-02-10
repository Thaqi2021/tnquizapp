import { Quiz } from "./Quiz";

export class Question{ 
    quesId !:number;
    content !:String;
    image !:String;
    option1! :String;
    option2! :String;
    option3! :String;
    option4!:String;
    answer !:String;
    quiz! :Quiz;

    givenAnswer='';
}