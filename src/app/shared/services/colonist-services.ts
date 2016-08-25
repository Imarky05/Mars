import { Injectable } from '@angular/core';
import { IColonist } from '../models';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
// code above is always needed, except for the colonist

@Injectable()
export class ColonistService {
	colonistUrl = 'https://red-wdp-api.hrekuapp.com/api/mars/colonist';

	constructor(private http: Http){}

	getColonist(): Promise<IColonist[]>{
		return this.http.get(this.colonistUrl)
						.toPromise()
						.then(response => response.json().colonist)
						.catch(this.handleError);
	}

	private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}

