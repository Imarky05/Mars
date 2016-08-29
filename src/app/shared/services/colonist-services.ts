import { Injectable } from '@angular/core';
import { Colonist } from '../models';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
// code above is always needed, except for the colonist

@Injectable()
export class ColonistService {
	colonistUrl = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';

	constructor(private http: Http){}

	getColonist(): Promise<Colonist>{
		return this.http.get(this.colonistUrl)
						.toPromise()
						.then(response => response.json().colonist)
						.catch(this.handleError);
	}

	private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    newColonist(colonist: Colonist): Promise<Colonist> {
	    let headers = new Headers({'Content-Type': 'application/json'});
	    let body = JSON.stringify({ colonist });
	    return this.http
	               .post(this.colonistUrl, body, { headers: headers })
	               .toPromise()
	               .then(response => response.json().colonist)
	               .catch(this.handleError);
	}

}

