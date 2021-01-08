
export class Answer{

	private answerDescription: string;
	private isTrue:boolean;

	public getAnswerDescription(): string {
		return this.answerDescription;
	}

	public setAnswerDescription(value: string) {
		this.answerDescription = value;
	}

 
	public getIsTrue(): boolean {
		return this.isTrue;
	}
	
	public setIsTrue(value: boolean) {
		this.isTrue = value;
	}



}