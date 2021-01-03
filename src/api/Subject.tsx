
export class Subject{
    private subjectId: number;
    private subjectName: string;
    private subjectDescription: string;

	public getSubjectId(): number {
		return this.subjectId;
	}


	public setSubjectId(value: number) {
		this.subjectId = value;
	}


	public getSubjectName(): string {
		return this.subjectName;
	}


	public setSubjectName(value: string) {
		this.subjectName = value;
	}

	public getSubjectDescription(): string {
		return this.subjectDescription;
	}

	public setSubjectDescription(value: string) {
		this.subjectDescription = value;
	}

}