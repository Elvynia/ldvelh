import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MonsterService } from '../monster.service';
import { Monster } from '../monster';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {
  monster : Monster;

  constructor(
                private route: ActivatedRoute,
                private router: Router,
                private monsterService : MonsterService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.getMonster(+paramMap.get('id'));
    });
  }

  getMonster(id: number) : void {
    this.monsterService.getMonster(id)
      .subscribe((monster) => this.monster = monster);
  }

}
