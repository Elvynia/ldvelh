import {Component} from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';

import {InventoryComponent} from '../inventory/inventory.component';
import {MapComponent} from '../map/map.component';


@Component({
  selector: 'app-menu-character',
  templateUrl: './menu-character.component.html',
  styleUrls: ['./menu-character.component.css']
})

export class MenuCharacterComponent {
  inventoryRef : MatDialogRef<InventoryComponent>;
  mapRef : MatDialogRef<MapComponent>;

  constructor(private dialog:MatDialog) { }

  openInventory () {
    this.inventoryRef = this.dialog.open(InventoryComponent, {
      hasBackdrop : true,
      height : '300px',
      width : '300px'
    });
  }

  openMap () {
    this.mapRef = this.dialog.open(MapComponent, {
      hasBackdrop : true,
      height : '400px',
      width : '400px'
    });
  }

}

