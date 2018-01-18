import { Event } from './event';
import { AddMonsterConstraint } from './add-monster-constraint';
import { Monster } from './monster';

export const EVENTS: Array<Event> = [
{
	id: 261,
	type :"shop"
}, {
	id: 1,
	type :"Le suivre en haut des marches ?"
}, { 
	id: 9,
	type :"fight",
	constraints: [
		new AddMonsterConstraint(9),
		new AddMonsterConstraint(15)
	]
}, {
	id: 15,
	type :"fight"
}, {
	id: 5,
	type :"A remplir"
}];
