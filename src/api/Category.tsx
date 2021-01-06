import { Course } from "./Course";


export class Category{

    private categoryName: string;
    private courseListOfCategory = new Array<Course>();
    private categoryDescription: string;
    private categoryId: string;

	public getCategoryName(): string {
		return this.categoryName;
	}

	public setCategoryName(value: string) {
		this.categoryName = value;
    }
    
    public addCourse(course:Course):void{
        this.courseListOfCategory.push(course);
    }

    public getCourses():Array<Course>{
        return this.courseListOfCategory;
    }


	public getCategoryDescription(): string {
		return this.categoryDescription;
	}

	public setCategoryDescription(value: string) {
		this.categoryDescription = value;
    }
    
	public getCategoryId(): string {
		return this.categoryId;
	}

	public setCategoryId(value: string) {
		this.categoryId = value;
	}


}