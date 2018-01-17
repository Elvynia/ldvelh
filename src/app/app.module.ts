import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { MenuPopupComponent } from './menu-popup/menu-popup.component';
import { PageComponent } from './page/page.component';
import { MenuCharacterComponent } from './menu-character/menu-character.component';
import { AppRoutingModule } from './/app-routing.module';
import { PageService } from './page.service';
import { StorageService } from './storage.service';
import { InventoryComponent } from './inventory/inventory.component';
import { EventComponent } from './event/event.component';
import { ShopComponent } from './shop/shop.component';
import { FightComponent } from './fight/fight.component';
import { EventService } from './event.service';
import { ChoiceService } from './choice.service';
import { ChoiceComponent } from './choice/choice.component';
import { MonsterService } from './monster.service';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuPopupComponent,
    PageComponent,
    MenuCharacterComponent,
    InventoryComponent,
    EventComponent,
    ShopComponent,
    FightComponent,
    ChoiceComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatGridListModule
  ],
  entryComponents: [InventoryComponent,MapComponent],
  providers: [PageService, StorageService, EventService, ChoiceService, MonsterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
