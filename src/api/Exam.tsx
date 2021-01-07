import { Question } from "./Question";

export class Exam{
    
    private examName: string;
    private examDescription: string;
    private examDuration: number;
    private examQuestions: Array<Question>;


	public getExamName(): string {
		return this.examName;
	}


	public setExamName(value: string) {
		this.examName = value;
	}


	public getExamDescription(): string {
		return this.examDescription;
	}


	public setExamDescription(value: string) {
		this.examDescription = value;
	}


	public getExamDuration(): number {
		return this.examDuration;
	}


	public setExamDuration(value: number) {
		this.examDuration = value;
	}


	public getExamQuestions(): Array<Question> {
		return this.examQuestions;
	}


	public setExamQuestions(value: Question) {
		this.examQuestions.push(value);
    }
    


}