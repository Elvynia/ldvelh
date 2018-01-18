import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../event';
import { Constraint } from '../constraint';
import { AfterConstraint } from '../after-constraint';
import { Monster } from '../monster';
import { MonsterConstraint } from '../monster-constraint';
import { MonsterService } from '../monster.service';
import { ChoiceConstraint } from '../choice-constraint';
import { Choices } from '../choices';
import { ChoiceService } from '../choice.service';


@Component({
	selector: 'app-event',
	templateUrl: './event.component.html',
	styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
	@Input() event : Event;
	monsters: Array<Monster>;

	constructor(private monsterService: MonsterService,
		private choiceService: ChoiceService) {
		this.monsters = new Array<Monster>();
	}

	ngOnInit() {
		if (this.event.constraints) {
			this.event.constraints.forEach((constraint: Constraint) => {
				if (constraint instanceof MonsterConstraint) {
					this.monsterService.getMonster(constraint.data)
					.subscribe((monster: Monster) => {
						constraint.execute({
							monsters: this.monsters,
							monster: monster
						});
					});
				} else if (constraint instanceof ChoiceConstraint) {
					this.choiceService.getChoice(constraint.data)
					.subscribe((choices: Choices) => {
						constraint.execute(choices.choice[0]);
					});
				}
			});
		}
	}

	finish() {
		if (this.event.constraints) {
			this.event.constraints.forEach((constraint: Constraint) => {
				if (constraint.isAfter()) {
					if (constraint instanceof ChoiceConstraint) {
						this.choiceService.getChoice(constraint.data)
						.subscribe((choices: Choices) => {
							constraint.executeAfter(choices.choice[0]);
						});
					}
				}
			});
		}
	}

}
