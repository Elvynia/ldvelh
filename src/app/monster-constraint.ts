import { Constraint } from './constraint';
import { Monster } from './monster';

export abstract class MonsterConstraint implements Constraint {
	data: number;
	abstract execute(data: {
		monsters: Array<Monster>,
		monster: Monster
	}): void;

	constructor(id: number) {
		this.data = id;
	}
}
