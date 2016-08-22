interface IAlien {
	type: string;
	description: string;
	submitted_by: string;
}

interface IColonist {
	name: string;
	job: IJob;
	age: number;
}

interface IEncounter {
	date: number;
	atype: string;
	action: string;
	colonist_id: number;
}

interface IJob {
	name: string;
	description: string;
}