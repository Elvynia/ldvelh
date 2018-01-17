import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Page } from "../page";
import { Event } from "../event";
import { Choices } from "../choices";
import { PageService } from '../page.service';
import { EventService } from '../event.service';
import { ChoiceService } from '../choice.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  page : Page;
  event : Event;
  choices : Choices;

  constructor(
                private pageService: PageService,
                private eventService: EventService,
                private choiceService: ChoiceService,
                private storageService: StorageService,
                private route: ActivatedRoute,
                private router: Router) {}

  ngOnInit() {

    // chaque fois que l'url change
    this.route.paramMap.subscribe((paramMap) => {
      this.getPage(+paramMap.get('id'));
      this.getEvent(+paramMap.get('id'));
      this.getChoice(+paramMap.get('id'));
    });

    this.storageService.storage.filter((save) => save!=null)
        .map((save) => save.id)
        .subscribe((pageId) => this.getPage(pageId));

  }

  getPage(id: number) : void {
    this.pageService.getPage(id)
      .subscribe((page) => this.page = page);
  }

  getEvent(id: number) : void {
    this.eventService.getEvent(id)
      .subscribe((event) => this.event = event);
  }

  getChoice(id: number) : void {
    this.choiceService.getChoice(id)
      .subscribe((choices) => this.choices = choices);
  }

}
