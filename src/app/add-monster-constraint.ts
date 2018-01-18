import { MonsterConstraint } from './monster-constraint';
import { Monster } from './monster';

export class AddMonsterConstraint extends MonsterConstraint {

	public execute(data: {
		monsters: Array<Monster>,
		monster: Monster
	}) {
		data.monsters.push(data.monster);
	}
}
