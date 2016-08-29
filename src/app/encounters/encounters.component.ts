import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Encounter } from '../shared/models';
import { SortByDate } from '../shared/pipe/date-pipe';

import { EncounterService } from '../shared/services/encounter-services';

@Component({
  moduleId: module.id,
  selector: 'app-encounters',
  templateUrl: 'encounters.component.html',
  styleUrls: ['encounters.component.css'],
  pipes: [ SortByDate ]
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
