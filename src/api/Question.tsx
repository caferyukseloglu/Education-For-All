import { Answer } from "./Answer";

export class Question{

    private questionId: number;
    private questionTitle: string;
    private questionDescription: string;
    private questionAnswers: Array<Answer>;
    private questionRightAnswer: Answer;


	public getQuestionId(): number {
		return this.questionId;
	}

 
	public setQuestionId(value: number) {
		this.questionId = value;
	}


	public getQuestionTitle(): string {
		return this.questionTitle;
	}


	public setQuestionTitle(value: string) {
		this.questionTitle = value;
	}

  
	public getQuestionDescription(): string {
		return this.questionDescription;
	}

	public setQuestionDescription(value: string) {
		this.questionDescription = value;
	}


	public getQuestionAnswers(): Array<Answer> {
		return this.questionAnswers;
	}


	public setQuestionAnswers(value: Array<Answer>) {
		this.questionAnswers = value;
	}

 
	public getQuestionRightAnswer(): Answer {
		return this.questionRightAnswer;
	}

	public setQuestionRightAnswer(value: Answer) {
		this.questionRightAnswer = value;
	}


}