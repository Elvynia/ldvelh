import { Component, OnInit } from '@angular/core';

import { DiceService } from '../dice.service';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  constructor(private diceService : DiceService) { }

  ngOnInit() {
  }

  throw() {
    this.diceService.throw(2);
  };


}
