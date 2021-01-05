import { Course } from "./Course";
import { DatabaseHandler } from "./DatabaseHandler";
import { User } from "./User";

export class Teacher extends User{

    public teachCourse(Database: DatabaseHandler,course:Course){
        Database.addTeacherToCourse(this,course);
    }

}