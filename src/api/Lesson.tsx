import { Course } from "./Course";
import { Teacher } from "./Teacher";

export class Lesson{

	private userId: Teacher;
	private courseId: Course;
    private lessonId: number;
    private lessonName: string;
    private lessonDescription: string;
    private lessonType: string;
    private lessonDuration: number;


	public getUserId(): string {
		return this.userId;
	}

	public setUserId(value: string) {
		this.userId = value;
	}


	public getLessonId(): number {
		return this.lessonId;
	}


	public setLessonId(value: number) {
		this.lessonId = value;
	}

	public getLessonName(): string {
		return this.lessonName;
	}


	public setLessonName(value: string) {
		this.lessonName = value;
	}

	public getLessonDescription(): string {
		return this.lessonDescription;
	}

	public setLessonDescription(value: string) {
		this.lessonDescription = value;
	}


	public getLessonType(): string {
		return this.lessonType;
	}


	public setLessonType(value: string) {
		this.lessonType = value;
	}


	public getLessonDuration(): number {
		return this.lessonDuration;
	}

	public setLessonDuration(value: number) {
		this.lessonDuration = value;
	}
    

}