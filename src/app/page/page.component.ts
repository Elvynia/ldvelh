import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  constructor(private pageService: PageService,private route: ActivatedRoute,
  private router: Router) {}

  ngOnInit() {
    this.getPage(1);
    /*let id = this.route.snapshot.paramMap.get('id');
    let idint = parseInt(id);
    this.pageService.getPage(idint)
      .subscribe((page) => this.page = page);
      console.log(id);*/
  }

  getPage(id: number) : void {
    this.pageService.getPage(id)
      .subscribe((page) => this.page = page);
  }

}
