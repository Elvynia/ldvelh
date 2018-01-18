import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../event';
import { Constraint } from '../constraint';
import { Monster } from '../monster';
import { MonsterConstraint } from '../monster-constraint';
import { MonsterService } from '../monster.service';


@Component({
	selector: 'app-event',
	templateUrl: './event.component.html',
	styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
	@Input() event : Event;
	monsters: Array<Monster>;

	constructor(private monsterService: MonsterService) {
		this.monsters = new Array<Monster>();
	}

	ngOnInit() {
		this.event.constraints.forEach((constraint: Constraint) => {
			if (constraint instanceof MonsterConstraint) {
				this.monsterService.getMonster(constraint.data).subscribe((monster: Monster) => {
					constraint.execute({
						monsters: this.monsters,
						monster: monster
					});
				});
			}
		});
	}

}
