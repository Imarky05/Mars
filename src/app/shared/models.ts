export interface IAlien {
	type: string;
	description: string;
	submitted_by: string;
}

export class Colonist {
	constructor(
		public name: string,
		public age: string,
		public job_id: string
	){

	}
}

export class Encounter {
	constructor(
		public date: string,
		public atype: string,
		public action: string,
		public colonist_id: string
	){
		this.date = this.formattedDate;
	}
	get formattedDate(): string{
	    let date = new Date();
	    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
	}
}

export interface IOccupation {
	name: string;
	description: string;
}