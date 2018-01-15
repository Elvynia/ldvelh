import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Page} from "../page";
import { PAGES } from '../mock-pages';
import { PageService } from '../page.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  page : Page;

  constructor(private pageService: PageService, private storageService: StorageService,private route: ActivatedRoute,
  private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.getPage(+paramMap.get('id'));
    });

    this.storageService.storage.filter((save) => save!=null)
        .map((save) => save.id)
        .subscribe((pageId) => this.getPage(pageId));
  }

  getPage(id: number) : void {
    this.pageService.getPage(id)
      .subscribe((page) => this.page = page);
  }

}
