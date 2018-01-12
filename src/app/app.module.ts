import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuPopupComponent } from './menu-popup/menu-popup.component';
import { PageComponent } from './page/page.component';
import { MenuCharacterComponent } from './menu-character/menu-character.component';
import { AppRoutingModule } from './/app-routing.module';
import { PageService } from './page.service';
import { ChoicesService } from './choices.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuPopupComponent,
    PageComponent,
    MenuCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PageService, ChoicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
