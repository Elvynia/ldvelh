import {Event} from "./event";
import {Choices} from "./choices";

export class Page {
  id : number;
  text : string;
  //event : Event;
  choices : Array<Choices>;
  //choices : Array<number>;
}
