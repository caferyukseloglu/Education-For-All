
import { Course } from "./Course";
import {User} from "./User";

export class Student extends User{

    private coursesTaken = new Array<Course>();

    public getCoursesTaken(): Array<Course>{
        return this.coursesTaken;
    }

    public addCoursesTaken(course:Course):void{
        this.coursesTaken.push(course);
    } 

    public resetCoursesTaken():void{
        this.coursesTaken=[];
    }

}