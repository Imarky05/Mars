import { Injectable } from '@angular/core';
import { IAlien } from '../models';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
// code above is always needed, except for the aliens

@Injectable()
export class AlienService {
	aliensUrl = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';

	constructor(private http: Http){}

	getAlien(): Promise<IAlien[]>{
		return this.http.get(this.aliensUrl)
						.toPromise()
						.then(response => response.json().aliens)
						.catch(this.handleError);
	}

	private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}

