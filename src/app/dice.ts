export class Dice {
  side : number;

  constructor() {
    this.side = 6;
  }

  throw () : number {
    let min = this.side/this.side;
    let max = this.side;
    let result = Math.floor(Math.random() * (max - min +1)) + min;
    return result;
  }
}
