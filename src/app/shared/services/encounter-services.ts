import { Injectable } from '@angular/core';
import { IEncounter } from '../models';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
// code above is always needed, except for the encounter

@Injectable()
export class EncounterService {
	encounterUrl = 'https://red-wdp-api.hrekuapp.com/api/mars/encounter';

	constructor(private http: Http){}

	getEncounter(): Promise<IEncounter[]>{
		return this.http.get(this.encounterUrl)
						.toPromise()
						.then(response => response.json().encounter)
						.catch(this.handleError);
	}

	private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}

