import { Lesson } from "./Lesson";
import { Subject } from "./Subject";
import {Exam} from "./Exam";

export class Course{

    private courseId: number;
    private courseName: string;
    private courseDescription: string;
    private courseLessons: Array<Lesson>;
    private numberOfLessons: number;
    private courseSubjects: Array<Subject>;
    private courseExams: Array<Exam>;
    

	public getCourseId(): number {
		return this.courseId;
	}

	public setCourseId(value: number) {
		this.courseId = value;


    }
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


	public setCourseLessons(value: Array<Lesson>) {
		this.courseLessons = value;
	}
    

	public getNumberOfLessons(): number {
		return this.numberOfLessons;
	}

	public setNumberOfLessons(value: number) {
		this.numberOfLessons = value;
	}


	public getCourseSubjects(): Array<Subject> {
		return this.courseSubjects;
	}


	public setCourseSubjects(value: Array<Subject>) {
		this.courseSubjects = value;
	}

	public getCourseExams(): Array<Exam> {
		return this.courseExams;
	}

	public setCourseExams(value: Array<Exam>) {
		this.courseExams = value;
	}

    
    
}