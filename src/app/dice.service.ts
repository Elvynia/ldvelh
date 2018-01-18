import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Dice } from './dice';

@Injectable()
export class DiceService {
  result : Subject<number>;
  dice : Dice;

  constructor() {
    this.result = new Subject<number>();
    this.dice = new Dice();
  }

  throw (nbDice : number) : void {
    let result = 0;
    for (let i=0;i<nbDice;i++) {
      result = result+this.dice.throw();
    }
    this.result.next(result);
  }

}
