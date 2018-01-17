import { Component, OnInit, Input } from '@angular/core';

import { Choices } from "../choices";

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
   @Input() choices : Choices;

  constructor() { }

  ngOnInit() {
  }

}
