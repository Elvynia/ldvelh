import { Choices } from './choices';

export const CHOICES: Array<Choices> = [{
   id:1,
   choice: [{ id: 1, text: "Le suivre en haut des marches ?", nextId: 261},{ id: 1, text : "Tirer votre épée et l'attaquer ?", nextId:54}]
},{
   id:9,
   choice: [{ id: 9, text : "!SUITE", nextId:176}],
},{
   id:15,
   choice: [{ id: 15, text : "!SUITE", nextId:217}],
},{
   id:261,
   choice: [{ id: 261, text : "Vous remerciez Yaztromo et vous quittez la pièce en redescendant l'escalier en colimaçon", nextId:177}],
}];
