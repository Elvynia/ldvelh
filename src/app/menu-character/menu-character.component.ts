import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-character',
  templateUrl: './menu-character.component.html',
  styleUrls: ['./menu-character.component.css']
})
export class MenuCharacterComponent implements OnInit {
  show = false;
  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log("Sauvegarde");
  }

  load() {
    console.log("Chargement");
  }

  sound() {
    console.log("Son On/Off");
  }

}
