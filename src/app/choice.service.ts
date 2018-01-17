import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Choices} from "./choices";
import { CHOICES } from './mock-choices';

@Injectable()
export class ChoiceService {

  constructor() { }

  getChoice(id:number) : Observable<Choices> {
    let index = CHOICES.findIndex((choices: Choices) => choices.id == id);
    return of (CHOICES[index]);
  }
}
