import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Encounter } from '../shared/models';

import { EncounterService } from '../shared/services/encounter-services';

@Component({
  moduleId: module.id,
  selector: 'app-encounters',
  templateUrl: 'encounters.component.html',
  styleUrls: ['encounters.component.css']
})
export class EncountersComponent {

	public encounters: Encounter[];
	
  constructor(
  	private router: Router,
  	private encounterServices: EncounterService
  	) {
  		encounterServices.getEncounter().then( encounters => this.encounters = encounters)
  	 }


}
