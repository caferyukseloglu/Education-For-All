import { Course } from "./Course";
import { Teacher } from "./Teacher";


export class Category{

    private categoryName: string;
    private courseListOfCategory = new Array<Course>();
    private categoryDescription: string;
    private categoryId: string;
    private teacherList = new Array<Teacher>();

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

    public addTeacher(teacher:Teacher):void{
        this.teacherList.push(teacher);
    }

    public getTeachers():Array<Teacher>{
        return this.teacherList;
    }

    public resetTeachers():void{
        this.teacherList=[];
    }

}