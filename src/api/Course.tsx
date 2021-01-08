import { Lesson } from "./Lesson";
import { Subject } from "./Subject";
import {Exam} from "./Exam";
import { Teacher } from "./Teacher";

export class Course{

    private courseName: string;
    private courseDescription: string;
    private courseLessons: Array<Lesson> = new Array<Lesson>();
    private numberOfLessons: number;
	private courseExams: Array<Exam>= new Array<Lesson>();
	private courseCategory: string;
	private teacher: string;

	public getCourseName(): string {
		return this.courseName;
	}


	public setCourseName(value: string) {
		this.courseName = value;
	}


	public getCourseDescription(): string {
		return this.courseDescription;
	}


	public setCourseDescription(value: string) {
		this.courseDescription = value;
	}


	public getCourseLessons(): Array<Lesson> {
		return this.courseLessons;
	}


	public setCourseLessons(value: Lesson) {
		this.courseLessons.push(value);
	}

	public resetCourseLessons():void{
		this.courseLessons=[]
	}
    

	public getNumberOfLessons(): number {
		return this.numberOfLessons;
	}

	public setNumberOfLessons(value: number) {
		this.numberOfLessons = value;
	}


	public getCourseExams(): Array<Exam> {
		return this.courseExams;
	}

	public setAddCourseExams(value: Exam) {
		this.courseExams.push(value);
	}

	public getCourseCategory(): string {
		return this.courseCategory;
	}

	public setCourseCategory(value: string) {
		this.courseCategory = value;
	}


	public getTeacher(): string {
		return this.teacher;
	}

	public setTeacher(value: string) {
		this.teacher = value;
	}


    
    
}