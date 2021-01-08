import { Course } from "./Course";
import { Teacher } from "./Teacher";

export class Lesson{

	private course: string;
    private lessonId: number;
    private lessonName: string;
    private lessonDescription: string;


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
	

	public getCourse(): Course {
		return this.course;
	}

	public setCourse(value: Course) {
		this.course = value;
	}
	

}