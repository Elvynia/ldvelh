import { Page } from './page';
import { CHOICES } from './mock-choices'

export const PAGES: Page[] = [
  { id: 1,
    text : "Votre marche jusqu'à la maison de Yaztromo vous prend un peu plus d'une demi-journée et, lorsque vous arrivez à la tour de pierre où il a élu domicile, vous êtes couvert de poussière et vous avez grand-faim. La tour du mage est difficile à trouver car elle est bâtie en retrait, à une cinquantaine de mètres du chemin, en lisière de la Forêt. Lorsque enfin vous la découvrez, vous vous dirigez vers son immense porte de chêne avec un sentiment de soulagement en constatant qu'elle existe bel et bien, et qu'elle n'est pas le fruit du délire de Gromollet. Une grosse cloche de cuivre et un heurtoir sont accrochés sur le côté d'une arche de pierre qui marque l'entrée. Vous frappez alors la cloche et un frisson aussitôt vous parcourt l'échiné, car le « bong » sonore que vous venez de produire résonne dans un silence profond dont vous n'aviez pas pris conscience jusqu'à cet instant. \
          On n'entend en effet ni chants d'oiseaux ni cris d'animaux. Vous attendez à la porte avec une certaine inquiétude, et vous entendez bientôt des bruits de pas qui descendent lentement un escalier, à l'intérieur de la tour. Un petit panneau glisse alors dans le bois de la porte, révélant une étroite ouverture en forme de fente, à travers laquelle une paire d'yeux soudainement apparus vous examine attentivement. « Eh bien, qui êtes-vous ? » demande une voix rogue.\
          Vous répondez que vous êtes un aventurier et que vous cherchez le grand mage Yaztromo pour lui acheter quelques objets magiques qui \
          pourraient vous aider à combattre les créatures de la Forêt des Ténèbres. « Ah, très bien ! si vous souhaitez m'acheter quelque chose, vous feriez mieux d'entrer. Je suis Yaztromo. » \
          Il vous ouvre alors la porte et vous invite à le suivre en montant les marches d'un escalier de pierre. Qu'allez-vous faire ?",
    choices : CHOICES[1]
  },{
    id : 2,
    text : "Pour vous, l'aventure se termine ici : votre chair fraîche et savoureuse offrira un festin de choix à la Goule victorieuse.",
    choices : CHOICES[2]
  },{
    id: 3,
    text : "Vous suivez cinq autres flèches qui vous mènent au tronc d'un vieil arbre mort, encore enraciné dans le sol. Vous remarquez alors que le tronc est creux, mais que ce creux se prolonge sous terre à une profondeur que vous ne pouvez évaluer en raison de l'obscurité. Possédez-vous un Anneau de Lumière?",
    choices : CHOICES[3]
  },{
    id: 4,
    text : "Vous perdez 4 points d'ENDURANCE. Si vous êtes toujours vivant, vous parvenez à arracher la flèche de votre épaule malgré la douleur insupportable que vous ressentez",
    choices : CHOICES[4]
  },{
    id: 54,
    text : "Lorsque vous tirez votre épée, Yaztromo se tourne vers vous sans manifester la moindre émotion et vous conseille de ne pas faire l'imbécile car ses pouvoirs magiques sont considérables.",
    choices : CHOICES[54]
  },  
  {
    id: 177,
    text : "Dehors, à la lumière du plein jour, vous remarquez à nouveau ce silence mortel. Un étroit sentier mène vers le nord, s'éloignant des hautes herbes qui entourent la maison de Yaztromo pour s'enfoncer dans la végétation touffue de la Forêt des Ténèbres. Vous avez à peine fait quelques pas que vous vous retrouvez cerné par l'obscurité de cette forêt inextricable ; des pierres et des racines noueuses semblent se cacher dans l'ombre, et vous pourriez presque croire qu'elles cherchent à vous faire trébucher. La lumière du soleil s'efface bientôt complètement et l'atmosphère devient humide et déplaisante. Vous avancez de plus en plus profondément dans les ténèbres et le chemin finit par se diviser en deux autres sentiers, de part et d'autre d'un grand et vieil arbre. Si ",
    choices : CHOICES[177]
  },  
  {
    id: 261,
    text : "Vous suivez le vieil homme vêtu d'une longue robe en haillons. Il souffle et halète en montant l'escalier en colimaçon qui mène à une grande pièce, au sommet de la tour. Des étagères, des armoires et des vitrines s'alignent le long des murs, toutes remplies de flacons, de bocaux, d'armes, de cuirasses et de toutes sortes d'objets à l'aspect étrange. Yaztromo traverse ce bric-à-brac en traînant les pieds et se laisse tomber sur une veille chaise en bois de chêne. Il glisse alors la main dans une poche, sur sa poitrine, et en sort une petite paire de lunettes cerclées d'or qu'il pose sur son nez. Puis il prend une ardoise et un morceau de craie sur une table et se met à écrire fébrilement. Il vous tend ensuite l'ardoise que vous lisez attentivement.",
    choices : CHOICES[261]
  },
  {
    id: 399,
    text : "Vous vous précipitez sur Yaztromo, mais vous avez à peine atteint la première marche que le sorcier lève son bras droit d'un geste nonchalant et marmonne quelques mots. Le temps paraît alors s'arrêter tandis que jaillissent tout autour de vous des éclairs aveuglants. Votre corps vous semble soudain un liquide bouillonnant et lorsque toute cette agitation s'apaise enfin, vous êtes conscient qu'il vient de se passer quelque chose de terrifiant. Vous sentez contre votre corps la pierre froide de l'escalier, et vous allez devoir à présent vous habituer à un nouveau genre de vie : le sorcier vous a en effet transformé en grenouille ! Se penchant vers vous, Yaztromo vous ramasse d'une main et vous déclare d'une voix de tonnerre : « Profite donc bien de ta nouvelle vie, piètre bretteur ! » Puis il éclate d'un rire tonitruant et vous laisse presque tomber sur le sol. Il retourne ensuite vers la porte de chêne d'un pas traînant, l'ouvre, et vous jette parmi les hautes herbes qui entourent sa demeure. Votre aventure se termine ici.",
    choices : CHOICES[399]
  }

  ];
