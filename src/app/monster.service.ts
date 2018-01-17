import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Monster } from './monster';
import { MONSTERS } from './mock-monsters';

@Injectable()
export class MonsterService {

  constructor() { }
    getMonster(id:number) : Observable<Monster> {
      let index = MONSTERS.findIndex((monster: Monster) => monster.id == id);
      return of (MONSTERS[index]);
    }
}
