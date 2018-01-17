import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Event} from "./event";
import { EVENTS } from './mock-events';

@Injectable()
export class EventService {

  constructor() { }

  getEvent(id:number) : Observable<Event> {
      let index = EVENTS.findIndex((eventBis: Event) => eventBis.id == id);
      return of (EVENTS[index]);
    }
}
