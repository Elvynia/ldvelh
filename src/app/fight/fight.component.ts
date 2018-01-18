import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs'

import { MonsterService } from '../monster.service';
import { Monster } from '../monster';
import { DiceService } from '../dice.service';

@Component({
	selector: 'app-fight',
	templateUrl: './fight.component.html',
	styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {
	@Input() monsters : Array<Monster>;
	@Output() onFinish: EventEmitter<void>;
	monster: Monster;
	subscription : Subscription;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private monsterService : MonsterService,
		private diceService : DiceService) {
		this.onFinish = new EventEmitter();
	}

	ngOnInit() {
		// Charger le premier monstre.
		this.nextMonster();
		this.subscription = this.diceService.result.subscribe((result) => {
			// calcul de la différence skill entre le hero et le monstre
			console.log("Fight component : ",result);
			if (this.monster.stamina > 0) {
				if (result > this.monster.skill) {
					this.monster.stamina--;
				}
			} else {
				// Charger le monstre suivant ou afficher RIP.
				this.nextMonster();
			}
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	private nextMonster() {
		if (this.monsters && this.monsters.length > 0) {
			this.monster = this.monsters.shift();
		} else {
			// Fin du combat
			this.monster.url = '../../assets/rip.png';
			this.subscription.unsubscribe();
			this.onFinish.emit();
		}
	}

}
