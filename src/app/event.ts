import { Constraint } from './constraint';

export class Event {
  id: number;
  type: string;
  constraints?: Array<Constraint>;
}
