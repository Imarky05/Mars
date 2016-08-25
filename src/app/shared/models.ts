export interface IAlien {
	type: string;
	description: string;
	submitted_by: string;
}

export interface IColonist {
	name: string;
	job: IOccupation;
	age: number;
}

export interface IEncounter {
	date: number;
	atype: string;
	action: string;
	colonist_id: number;
}

export interface IOccupation {
	name: string;
	description: string;
}