import { 
	Component, 
	Input,
	trigger,
	state,
	style,
	transition,
	animate 
} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  animations: [
  	trigger('shrinktrigger', [
  		state('firstpos', style({transform: 'scale(1)'})),
  		state('secondpos', style({transform: 'scale(0)'})),
  		transition('firstpos => secondpos', [
  			animate('1s ease-in')
  		]),
  		transition('secondpos => firstpos', [
  			animate('1s ease-in')
  		])
  	])
  ]
})
export class HomeComponent {

  constructor() { }

  state: string = 'firstpos';

  togglestate() {
  	this.state = (this.state === 'firstpos' ? 'secondpos' : 'firstpos');
  }

}
