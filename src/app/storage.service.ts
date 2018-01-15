import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {Storage} from "./storage";

@Injectable()
export class StorageService {
  key = 'id';

  storage : BehaviorSubject<Storage>;

  constructor() {
    this.storage = new BehaviorSubject<Storage>(null);
  }

  initialize () : void {
  }

  save (chapter : string) {
    localStorage.setItem(this.key,chapter);
  }

  load () : void {

    let storage = new Storage();
    storage.id = +localStorage.getItem('id');
    this.storage.next(storage);
  }
}
