import { Course } from "./Course";


export class Category{

    private categoryName: string;
    private courseListOfCategory = new Array<Course>();


	public getCategoryName(): string {
		return this.categoryName;
	}

	public setCategoryName(value: string) {
		this.categoryName = value;
    }
    
    public addCourse():void{

    }

    public getCourses():Array<Course>{
        return this.courseListOfCategory;
    }


}