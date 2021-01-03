
export class Answer{

    private answerId: number;
    private answerDescription: string;

	public getAnswerId(): number {
		return this.answerId;
	}

	public setAnswerId(value: number) {
		this.answerId = value;
	}

	public getAnswerDescription(): string {
		return this.answerDescription;
	}

	public setAnswerDescription(value: string) {
		this.answerDescription = value;
	}


}