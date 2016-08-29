import { Injectable } from '@angular/core';
import { IOccupation } from '../models';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
// code above is always needed, except for the Occupation

@Injectable()
export class OccupationService {
	OccupationUrl = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';

	constructor(private http: Http){}

	getOccupation(): Promise<IOccupation[]>{
		return this.http.get(this.OccupationUrl)
						.toPromise()
						.then(response => response.json().jobs)
						.catch(this.handleError);
	}

	private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}

