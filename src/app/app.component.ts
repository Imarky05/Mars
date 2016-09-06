import { Component } from '@angular/core';
import { AlienService } from './shared/services/alien-services';
import { ColonistService } from './shared/services/colonist-services';
import { EncounterService } from './shared/services/encounter-services';
import { OccupationService } from './shared/services/occupation-services';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [AlienService, ColonistService, EncounterService, OccupationService],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
	title = 'Mars Colony';
  constructor(alienService: AlienService, 
			  	colonistService: ColonistService, 
			  	encounterService: EncounterService, 
			  	occupationService: OccupationService){
  }
}
