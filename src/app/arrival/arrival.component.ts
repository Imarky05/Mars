import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Colonist, IOccupation } from '../shared/models';

import { ColonistService } from '../shared/services/colonist-services';
import { OccupationService } from '../shared/services/occupation-services';

@Component({
  moduleId: module.id,
  selector: 'app-arrival',
  templateUrl: 'arrival.component.html',
  styleUrls: ['arrival.component.css']
})
export class ArrivalComponent {

	NO_OCCUPATION_SELECTED = '(none)';

	public occupations: IOccupation[];
	public colonist: Colonist;

  constructor(
  	private router: Router,
  	private colonistServices: ColonistService,
  	private occupationServices: OccupationService
  ){
  	this.colonist = new Colonist('', '', this.NO_OCCUPATION_SELECTED);
  	occupationServices.getOccupation().then( jobs => this.occupations = jobs )
  }

  get noOccupation() {
  	return this.colonist.job_id === this.NO_OCCUPATION_SELECTED;
  }

  onSubmit() {
  	this.colonistServices.newColonist(this.colonist).then(colonist => {
  		this.router.navigate(['/encounters']);
  	}).catch(error => {
  		alert('error');
  	});
  }

}
