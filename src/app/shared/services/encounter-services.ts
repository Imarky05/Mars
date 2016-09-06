import { Injectable } from '@angular/core';
import { Encounter } from '../models';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
// code above is always needed, except for the encounter

@Injectable()
export class EncounterService {
	encounterUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

	constructor(private http: Http){}

	getEncounter(): Promise<Encounter[]>{
		return this.http.get(this.encounterUrl)
						.toPromise()
						.then(response => response.json().encounters.reverse())
						.catch(this.handleError);
	}

	private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    

    }

    newEncounter(encounter: Encounter): Promise<Encounter> {
	    let headers = new Headers({'Content-Type': 'application/json'});
	    let body = JSON.stringify({ encounter });
	    return this.http
	               .post(this.encounterUrl, body, { headers: headers })
	               .toPromise()
	               .then(response => response.json().encounter)
	               .catch(this.handleError);
	}
}