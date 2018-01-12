import { Component, OnInit } from '@angular/core';

import {Page} from "../page";
import { PAGES } from '../mock-pages';
import { PageService } from '../page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  page : Page;

  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.getPage(0);
  }

  getPage(id: number) : void {
    this.pageService.getPage(id)
      .subscribe((page) => this.page = page);
  }

}
