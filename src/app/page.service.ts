import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Page } from "./page";
import { PAGES } from './mock-pages';

@Injectable()
export class PageService {

  constructor() { }

  getPage(id:number) : Observable<Page> {
    let index = PAGES.findIndex((page: Page) => page.id == id);
    return of (PAGES[index]);
  }

}
