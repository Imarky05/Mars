import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Encounter, IAlien } from '../shared/models';

import { EncounterService } from '../shared/services/encounter-services';
import { AlienService } from '../shared/services/alien-services';

@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css']
})
export class ReportComponent {

	NO_ALIEN_SELECTED = '(none)';

	public aliens: IAlien[];
	public encounter: Encounter;

  constructor(
  	private router: Router,
  	private encounterServices: EncounterService,
  	private alienServices: AlienService
  	) { 
  	this.encounter = new Encounter('', this.NO_ALIEN_SELECTED, '', '5');
  	alienServices.getAlien().then( aliens => this.aliens = aliens )
 }

 get noAlien() {
  	return this.encounter.atype === this.NO_ALIEN_SELECTED;
  }

 onSubmit() {
  	this.encounterServices.newEncounter(this.encounter)
  	.then(encounter => {
  		this.router.navigate(['/encounters']);
  	})
  	.catch(error => {
  		alert('error');
  	});
 }


}
