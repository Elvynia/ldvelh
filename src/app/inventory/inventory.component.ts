import { Component } from '@angular/core';

import { Item } from '../item';
import { ITEMS } from '../mock-items';

import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  items = ITEMS;

  constructor() { }

}
