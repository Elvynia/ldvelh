import { Component, OnInit } from '@angular/core';
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
  monster : Monster;
  subscription : Subscription;

  constructor(
                private route: ActivatedRoute,
                private router: Router,
                private monsterService : MonsterService,
                private diceService : DiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.getMonster(+paramMap.get('id'));
    });

    this.subscription = this.diceService.result.subscribe((result) => {
      // calcul de la différence skill entre le hero et le monstre
      console.log("Fight component : ",result);
      if (this.monster.stamina > 0) {
        if (result > this.monster.skill) {
          this.monster.stamina--;
        }
       }
       else {
         this.monster.url = '../../assets/rip.png';
         this.subscription.unsubscribe();
       }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getMonster(id: number) : void {
    this.monsterService.getMonster(id)
      .subscribe((monster) => this.monster = monster);
  }

}
