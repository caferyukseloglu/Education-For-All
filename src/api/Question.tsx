import { Answer } from "./Answer";

export class Question{

	private questionTitle: string;
	private questionNumber: number;
    private questionAnswers: Array<Answer>;


	public getQuestionTitle(): string {
		return this.questionTitle;
	}


	public setQuestionTitle(value: string) {
		this.questionTitle = value;
	}


	public getQuestionAnswers(): Array<Answer> {
		return this.questionAnswers;
	}


	public setQuestionAnswers(value: Array<Answer>) {
		this.questionAnswers = value;
	}


	public getQuestionNumber(): number {
		return this.questionNumber;
	}

	public setQuestionNumber(value: number) {
		this.questionNumber = value;
	}



}