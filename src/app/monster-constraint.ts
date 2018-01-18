import { Constraint } from './constraint';
import { Monster } from './monster';

export abstract class MonsterConstraint extends Constraint {
	data: number;
	abstract execute(data: {
		monsters: Array<Monster>,
		monster: Monster
	}): void;
}
