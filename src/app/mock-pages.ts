import { Page } from './page';
import { CHOICES } from './mock-choices'

export const PAGES: Page[] = [
  { id: 0,
    text : "GAME OVER",
    choices : CHOICES[1]
  },{ id: 1,
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
    id: 5,
    text : "Assis sur ce trône somptueux, vous vous sentez étrangement mal à Taise. Les deux Guerriers Clones sont prosternés devant vous dans une attitude de totale soumission. Vous considèrent-ils comme leur nouveau maître ? ",
    choices : CHOICES[5]
  },{
    id: 6,
    text : " Lorsque vous passez devant le Lutin, il se met à pousser des grognements comme jamais vous n'en avez entendus auparavant, des grognements tout à fait inhabituels chez un Lutin. Vous ressentez une certaine inquiétude.",
    choices : CHOICES[6]
  },{
    id: 7,
    text : "Vous tirez votre épée et vous vous apprêtez à en découdre avec ces agresseurs à rayures noires et jaunes. Ce sont des ABEILLES TUEUSES qui vous attaqueront en trois essaims séparés, chaque essaim devant être considéré comme un seul adversaire. !MONSTRE ",
    choices : CHOICES[7]
  },{
    id: 8,
    text : "Tandis que vous marchez le long du chemin, vous entendez des pas et les échos d'une dispute à quelque distance devant vous.",
    choices : CHOICES[8]
  },{
    id: 9,
    text : "Vous déverrouillez la porte de la cage et vous faites un pas en arrière, votre épée à la main, prêt à combattre si le Gobelin vous attaque. Ce dernier ramasse un tabouret de bois, le brandit au-dessus de sa tête et le jette contre la porte qui s'ouvre à la volée. Puis il se précipite sur vous en hurlant. Il faut vous battre. !MONSTRE GOBELIN HABILETÉ : 5 ENDURANCE : 4",
    choices : CHOICES[9]
  },{
    id: 10,
    text : "Vous ramassez à terre un roc de bonne taille que vous lancez de toutes vos forces en visant l'Ogre. Hélas ! à votre grand désarroi, le roc manque sa cible, passe à côté de la tête de votre adversaire et se fracasse contre la paroi de la caverne.",
    choices : CHOICES[10]
  },{
    id: 11,
    text : "Vous commencez à perdre l'équilibre sous l'effet d'un vertige qui s'empare de tout votre être. Vous fermez les yeux et vous vous prenez la tête dans les mains, mais rien n'y fait.",
    choices : CHOICES[11]
  },{
    id: 12,
    text : "Vous admettez que vous avez peut-être été un peu trop prompt à tirer votre épée, mais vous vous en justifiez en faisant valoir que dans la Forêt des Ténèbres, il faut se tenir prêt à tout. Le Gnome répond que ce n'est pas une excuse, et que l'on ne menace pas ainsi un vieil homme sans défense. Il ajoute que si vous voulez récupérer votre épée, il vous en coûtera 10 Pièces d'Or ou deux objets précieux à choisir dans votre sac à dos. Vous lui donnez ce qu'il demande (à votre choix, de l'or ou deux objets), !EVENT et, à votre grand soulagement, il vous rend votre chère épée.",
    choices : CHOICES[12]
  },{
    id: 13,
    text : "Les vibrations vous font l'effet d'ondes de choc qui semblent marteler votre corps tout entier. Vous avez l'impression que vos jambes sont de plomb et vous ne pouvez plus les remuer. Soudain, la masure s'affaisse puis s'écroule sur le sol. Le ciel s'obscurcit, et un vent se lève en mugissant autour de vous. Le vent souffle de plus en plus fort en une véritable tempête dont la puissance vous projette à terre. Vous vous cramponnez aux montants de la véranda en vous protégeant le visage des tourbillons de poussière et de débris emportés par le vent. Couvrant le bruit assourdissant de la tempête, un rire retentit alors, suivi d'exclamations de joie poussées par une voix grave : « Je suis libre ! Je suis libre ! » dit la voix. Vous venez de libérer une FORCE TELLURIQUE qui vous fait perdre 3 points de CHANCE. !EVENT Peu à peu, le vent cesse de hurler, il disparaît tout à fait et le ciel s'éclaire à nouveau.",
    choices : CHOICES[13]
  },{
    id: 14,
    text : "C'est une fosse circulaire, aux parois lisses et vous vous sentez trop faible pour essayer d'en sortir. Vous appelez à l'aide, mais personne ne se porte à votre secours. Il ne vous reste plus qu'à vous asseoir pour méditer sur votre sort. Une heure plus tard environ, vous entendez un bruit au-dessus de votre tête. Vous levez les yeux et vous apercevez le visage barbu d'un homme robuste, coiffé d'un bonnet de fourrure. Il semble fâché : c'est qu'il s'agit là du trappeur dont vous venez de détruire le piège en tombant dedans. L'homme vous apostrophe avec mauvaise humeur en vous avertissant qu'il vous en coûtera 3 pièces d'Or si vous voulez qu'il vous tire de là à l'aide d'une corde. A défaut d'or, vous pourrez le dédommager en lui donnant l'un quelconque des objets magiques que vous transportez dans votre sac à dos. Vous acceptez de payer le trappeur courroucé (en choisissant vous-même votre moyen de paiement), et il vous lance une corde qui vous permet de sortir de la fosse. Vous lui donnez son dû (n'oubliez pas de rayer de votre Liste d'Équipement l'objet ou les Pièces d'Or qui auront servi à vous acquitter), et vous lui adressez un regard furieux.",
    choices : CHOICES[14]
  },{
    id: 15,
    text : "La paroi est abrupte. Soudain, vous glissez sur une flaque gluante et vous tombez cul par dessus tête au fond du trou, dans une vaste caverne creusée dans les profondeurs de la terre. Vous vous remettez aussitôt debout, et vous voyez luire alors la pointe d'un dard venimeux, au bout de la queue d'un VER PIQUEUR qui vient droit sur vous. Le Ver Piqueur est long de cinq mètres environ, et son corps est constitué d'énormes anneaux jaunâtres ; mais ce qui vous préoccupe surtout, c'est son dard redoutable dont vous devez à tout prix vous protéger. Vous n'avez pas le temps d'essayer de sortir du trou et il vous faut tirer votre épée pour combattre. !MONSTRE",
    choices : CHOICES[15]
  },{
    id: 16,
    text : "Vous interpellez les trois humanoïdes qui s'occupent du carré planté de champignons à chapeaux rouges. Ils continuent cependant de vous ignorer, poursuivant leur tâche sans même vous voir. Vous arrachez alors un morceau du chapeau de l'un des champignons, et vous commencez à le manger. Le goût en est agréable, mais une douleur terrible vous tord soudain l'estomac. Ce champignon est vénéneux. !EVENT Possédez-vous une Potion Antipoison ? ",
    choices : CHOICES[16]
  },{
    id: 17,
    text : "Une échelle descend dans les profondeurs du puits jusqu'à la surface de l'eau. Juste au-dessus de l'eau, cependant, vous apercevez l'entrée d'un tunnel orienté vers le nord. Ce tunnel est une sorte de boyau circulaire d'un mètre de diamètre environ.",
    choices : CHOICES[17]
  },{
    id: 18,
    text : "Votre idée était bonne et la fièvre retombe. Par bonheur, le poil qui couvrait vos mains disparaît bientôt, et vous vous allongez à nouveau, épuisé, pour replonger dans le sommeil.",
    choices : CHOICES[18]
  },{
    id: 19,
    text : "Bien qu'affaibli par la fièvre, vous parvenez à vous asseoir et vous empoignez votre épée. Puis, en serrant les dents, vous coupez le morceau de chair que le Loup-Garou a mordu. Le sang jaillit à flots de la blessure, emportant le mal avec lui. Réduisez de 1 point votre total d ENDURANCE en raison du sang perdu. !EVENT",
    choices : CHOICES[19]
  },{
    id: 20,
    text : "Tandis que vous marchez vers l'est, vous passez devant un autre chemin orienté au sud, mais vous décidez de ne pas vous y aventurer.",
    choices : CHOICES[20]
  },{
    id: 21,
    text : "La douleur se fait de plus en plus vive et vous vous hâtez de dénicher dans votre sac à dos la petite bouteille de Potion Antipoison. Vous buvez avidement son contenu et votre corps alors se détend, tandis que disparaissent les effets du poison. Vous vous demandez ce qui vous attend encore dans cette Forêt.",
    choices : CHOICES[21]
  },{
    id: 22,
    text : "C'est un gaz toxique et vos yeux se mettent à pleurer. Vous toussez et vous retenez votre souffle en courant dans la caverne, pour tenter d'échapper au nuage de gaz qui vous enveloppe la tête. Vous avez l'impression que vos poumons vont exploser et vous ne pouvez plus vous empêcher de respirer. Otez 2 points à votre total d'HABiLETÊ, et ôtez à votre total d'ENDURANCE le nombre de points que vous indiquera le dé lancé à cet effet. Si vous êtes toujours vivant, vous voyez avec soulagement le nuage de gaz se dissiper et vous rangez la boîte en argent dans votre sac à dos. !EVENT",
    choices : CHOICES[22]
  },{
    id: 23,
    text : "Vous essuyez la sueur qui ruisselle sur votre front, en vous demandant ce que vous réserve encore cette contrée maléfique. Puis vous vous asseyez pour prendre quelque repos.",
    choices : CHOICES[23]
  },{
    id: 24,
    text : "Les muscles de votre cou se raidissent, et vous commencez à ressentir dans tout votre corps les effets du poison inoculé par les fléchettes. En toute hâte, vous attrapez dans votre sac à dos la bouteille de Potion Antipoison et vous en avalez le contenu. Votre corps alors se détend et les effets du poison disparaissent. Voyant cela, les Pygmées font volte-face et s'enfuient dans les hautes herbes. Qu'allez-vous faire à présent ?",
    choices : CHOICES[24]
  },{
    id: 25,
    text : "Le chemin vous amène bientôt au creux d une vallée. Il continue vers le nord, mais un autre chemin s'éloigne en direction de l'ouest.",
    choices : CHOICES[25]
  },{
    id: 26,
    text : "Vous commencez par vous intéresser aux livres rangés sur les étagères. Mais ils sont écrits en une langue inconnue et contiennent de mystérieux diagrammes. Quant aux cartes et aux rouleaux de parchemin, ils vous sont tout aussi incompréhensibles. Vous ouvrez placards et tiroirs mais vous ne trouvez rien d'autre que des livres, encore des livres aux reliures de cuir poussiéreuses. Vous êtes sur le point d'abandonner tout espoir de découvrir quelque chose lorsque vous apercevez un autre livre, mais sur le sol, cette fois : car il sert tout simplement à caler une table. Qu'allez-vous faire ?",
    choices : CHOICES[26]
  },{
    id: 27,
    text : "Vous essuyez de votre épée l'épaisse sève verdâtre qui coulait dans les veines de l'Homme-Arbre et vous reprenez votre chemin vers le nord.",
    choices : CHOICES[27]
  },{
    id: 28,  
    text : "Si vous possédez un Brassard de Force !EVENT",
    choices : CHOICES[28]
  },{
    id: 29,
    text : "Vous apercevez dans une petite clairière deux créatures courtes de taille, revêtues de cuirasse et la peau couverte de verrues. Les deux petits êtres semblent se disputer pour savoir qui doit surveiller la cuisson d'un lièvre embroché qui est en train de rôtir sur un feu de camp. En vous voyant, les deux créatures interrompent leur querelle et tirent leurs courtes épées. Il va vous falloir combattre ces ORQUES qui s'avancent sur vous.  !MONSTRE",
    choices : CHOICES[29]
  },{
    id: 30,
    text : "Vous perdez 2 points d'ENDURANCE en raison de votre profonde coupure au front. !EVENT",
    choices : CHOICES[30]
  },{
    id: 31,
    text : "Vous rampez hors du tunnel et vous reprenez pied sur l'échelle, le long de la paroi du puits.",
    choices : CHOICES[31]
  },{
    id: 32,
    text : "Vous fouillez dans votre sac à dos pour y dénicher 10 Pièces d'Or et deux objets que vous donnez au dénommé Arragon. Modifiez en conséquence votre Liste d'Equipement. Arragon vous ordonne alors de partir, et vous quittez la maisonnette pour rejoindre le croisement. Vous perdez 1 POINT de CHANCE !EVENT",
    choices : CHOICES[32]
  },{
    id: 33,
    text : "Le moine hoche la tête. « Il semble qu'il n'y ait plus de charité en ce monde », soupire-t-il. Il hausse alors les épaules et repart vers le sud.",
    choices : CHOICES[33]
  },{
    id: 34,
    text : "Tandis que vous frottez la lanterne, une fumée verte s'élève lentement de la mèche et commence à prendre forme. Bientôt apparaît devant vos yeux la silhouette d'un vieil homme gras, à la tête chauve, assis sur un coussin. Sa bouche s'ouvre sans hâte et il vous demande d'une voix grave : « Eh bien, que veux-tu ? » Vous lui racontez brièvement votre histoire et il vous répond qu'il ne peut vous donner aucun bien matériel, aucune richesse. Tout ce qu'il peut vous offrir, c'est de vous améliorer vous-même. Dès lors, vous aurez la possibilité de rétablir à leur niveau de départ vos points d'HABiLETÊ ou d'ENDURANCE ou de CHANCE (choisissez). Après avoir ainsi modifié l'un ou l'autre de ces scores, le génie disparaît, et la lanterne s'éteint. !EVENT",
    choices : CHOICES[34]
  },{
    id: 35,
    text : "Vous perdez 4 points d'ENDURANCE en raison de la terrible brûlure. !EVENT",
    choices : CHOICES[35]
  },{
    id: 36,
    text : "Vous repensez à cet étranger et vous éprouvez en même temps un sentiment de malaise. Quelque chose dans ses manières a éveillé votre méfiance. Vous vous arrêtez un instant pour vérifier le contenu de votre sac à dos et vous êtes alors furieux de constater qu'il y manque quelque chose. Cet homme était un voleur ! Vous allez devoir soustraire de vos biens soit toutes les Pièces d'Or qui vous restent, soit deux des objets magiques que vous avez achetés à Yaztromo. Modifiez en conséquence votre Feuille d'Aventure. Vous vous demandez si vous ne feriez pas mieux de courir après votre voleur, mais vous vous doutez qu'il n'est certainement pas parti dans la direction où il prétendait aller. !EVENT",
    choices : CHOICES[36]
  },{
    id: 37,
    text : "Vous tendez le bras vers une branche de l'arbre et vous cueillez un fruit en forme de poire et de couleur violette. Vous y mordez du bout des dents : son goût en est amer.",
    choices : CHOICES[37]
  },{
    id: 38,
    text : "Vous jetez un regard par la petite fenêtre aux vitres sales de la cabane, et vous apercevez une vieille femme vêtue d'une robe malpropre. Son visage est ridé, elle a des verrues sur le nez, et elle est en train de lire un livre, assise près de la cheminée, au fond de la pièce. Une servante bossue lui apporte d'autres ouvrages qu'elle est allée prendre sur des étagères remplies de volumes anciens, de parchemins et de cartes.",
    choices : CHOICES[38]
  },{
    id: 39,
    text : "Vous déployez le filet et vous le faites tournoyer au-dessus de votre tête. Puis vous le lancez en direction du Troll des Cavernes. Le filet s'envole dans les airs et vient atterrir sur sa cible immobile. Le Troll des Cavernes s'éveille pour s'apercevoir qu'il est prisonnier des mailles dont il essaye vainement de se dégager. Vous vous précipitez alors vers la chaise de pierre et vous vous emparez du sac de cuir sous les yeux du Troll écumant de fureur.",
    choices : CHOICES[39]
  },{
    id: 40,
    text : "Vous vous relevez en poussant un juron et vous époussetez vos vêtements. L'idée vous vient d'attendre ici pour voir qui a posé ce piège, mais finalement vous y renoncez.",
    choices : CHOICES[40]
  },{
    id: 41,
    text : "Vous retournez en courant au croisement où le corbeau est toujours perché sur la pancarte.",
    choices : CHOICES[41]
  },{
    id: 42,
    text : "La vieille femme rejette la tête en arrière et éclate de rire lorsque vous commencez à lui parler. C'est une malfaisante sorcière et vous perdez 1 POINT de CHANCE. !EVENT",
    choices : CHOICES[42]
  },{
    id: 43,
    text : "Vous dégainez votre épée et vous vous lancez à l'assaut des Hommes des Bois qui cessent aussitôt de se disputer et vous font face en hurlant, leurs haches brandies.",
    choices : CHOICES[43]
  },{
    id: 44,
    text : "Vous perdez 2 points d'ENDURANCE. Si vous êtes toujours vivant, vous trouvez vos Filtres à Nez dans une poche latérale de votre sac à dos, et vous les glissez aussitôt dans vos narines. Vous inspirez lentement l'air empoisonné, mais sans autre dommage et, bientôt, vous parvenez à respirer tout à fait librement. Peu à peu, le nuage de gaz se dissipe, mais il ne vous semble pas utile, cependant, de rester plus longtemps en ces lieux. !EVENT",
    choices : CHOICES[44]
  },{
    id: 45,
    text : "Vous perdez 2 points d'ENDURANCE !EVENT",
    choices : CHOICES[45]
  },{
    id: 46,
    text : "La carotte vole vers le Gnome, mais avant de l'avoir atteint, elle se transforme en un papillon qui se laisse emporter par la brise. Le Gnome alors se met à tailler un morceau de bois à l'aide d'un petit couteau, une expression d'ennui sur son visage. Vous perdez 2 points de CHANCE. !EVENT",
    choices : CHOICES[46]
  },{
    id: 47,
    text : "Tandis que vous esquiviez la chaise, la Sorcière a prononcé quelques paroles étranges. Et soudain, elle disparaît dans un éclair aveuglant, puis reparaît sous la forme d'une chauve-souris qui s'envole par la porte ouverte. La servante bossue s'écroule alors sur le sol et se met à pleurer.",
    choices : CHOICES[47]
  },{
    id: 48,
    text : "Vous soulevez le coffre au-dessus de votre tête et vous le fracassez contre le sol. Il s'ouvre aussitôt sous le choc, et vous voyez alors apparaître, parmi les débris de bois, un gros œuf de couleur bleu clair et de presque un mètre de diamètre. Vous le touchez du bout des doigts : il est dur et froid, on dirait du marbre. Or soudain, une fêlure apparaît à sa surface et, avant que vous ayez pu faire un geste, l'œuf explose en projetant de tous côtés des fragments de coquille tranchants comme des rasoirs. Lancez un dé pour savoir combien de ces fragments se sont plantés dans votre épiderme. Vous perdez 1 point d'ENDURANCE pour chaque fragment reçu. !EVENT",
    choices : CHOICES[48]
  },{
    id: 49,
    text : "Vous continuez le long du tunnel et vous pénétrez dans la caverne. Le plafond n'en est pas plus haut que celui du tunnel lui-même et il vous est impossible de vous tenir debout. La caverne est toute petite et remplie de meubles minuscules, d'objets de toutes sortes et de bibelots. Deux personnages à la peau verdâtre et au corps gracile surmonté d'une grosse tête se tiennent au milieu. Ils ont des oreilles pointues, un long nez, et leurs vêtements ont été taillés dans des sacs. Ils semblent complètement affolés et se précipitent sur vous, armé chacun d'un poignard. Il vous faut combattre ces GREMLINS car vous n'avez pas le temps de vous retourner pour vous enfuir. Vous affrontez les Gremlins chacun à son tour, mais vous devrez à chaque assaut réduire votre Force d'Attaque de 3 points : vous êtes, en effet, obligé de combattre à quatre pattes en raison de la hauteur du plafond. !MONSTRE",
    choices : CHOICES[49]
  },{
    id: 50,
    text : "Une petite clé d'argent est accrochée à un cordon de cuir que l'un des deux Hommes des Bois porte autour du cou. Vous dénouez le cordon et vous rangez la clé dans votre sac à dos. !EVENT",
    choices : CHOICES[50]
  },{
    id: 51,
    text : "Votre marche au fond de la verte vallée vous mène à une bifurcation.",
    choices : CHOICES[51]
  },{
    id: 52,
    text : "Quin vous annonce qu'il va miser un peu de Poudre de Lévitation contre un objet ou 10 Pièces d'Or. Et tandis que vous vous asseyez de l'autre côté de la table, face à lui, vous glissez adroitement votre Brassard de Force autour de votre bras. Vous posez ensuite votre coude sur la table et vous lui étreignez la main. Sa poigne est si ferme qu'on dirait une mâchoire d'acier, et ses yeux sombres et bridés expriment une totale confiance en lui. Son biceps se gonfle alors et il donne le signal du départ. Vous pesez aussitôt sur son bras et vous êtes étonné d'avoir tant de force. La sueur perle à son front et son visage traduit soudain la douleur et la stupéfaction. !EVENT",
    choices : CHOICES[52]
  },{
    id: 53,
    text : "Les muscles de votre cou commencent à se raidir et vous sentez les effets du poison envahir votre corps. Vous arrachez la fléchette de votre cou, mais il est trop tard : vos genoux se dérobent et vous vous écroulez sur le sol, sans connaissance. Lorsque vous reprenez conscience, vous constatez qu'on vous a laissé votre épée et les objets contenus dans votre sac à dos, mais qu’on vous a volé tout votre or. Les Pygmées ne vous ont pas laissé la moindre pièce.",
    choices : CHOICES[53]
  },{
    id: 54,
    text : "Lorsque vous tirez votre épée, Yaztromo se tourne vers vous sans manifester la moindre émotion et vous conseille de ne pas faire l'imbécile car ses pouvoirs magiques sont considérables.",
    choices : CHOICES[54]
  },{
    id: 55,
    text : "Vous fouillez dans votre sac à dos et vous en retirez le gant de soie violette qui vous va à merveille. Vous vous penchez ensuite pour ramasser une grosse pierre que vous lancez de toutes vos forces, en visant l'Ogre. La pierre file comme une flèche et assomme le monstre qui s'écroule sur le sol. La créature enfermée dans la cage saute alors en tous sens avec une frénésie redoublée. Qu'allez-vous faire à présent ? !EVENT",
    choices : CHOICES[55]
  },{
    id: 56,
    text : "Vous cheminez au fond de la paisible vallée et vous arrivez à une bifurcation. Vous constatez alors que le sentier orienté au sud remonte vers les collines et vous décidez de ne pas remprunter.",
    choices : CHOICES[56]
  },{
    id: 57,
    text : "Vous vous dirigez vers la tanière pour aller y jeter un coup d'oeil, mais une ombre, soudain, se projette sur vous et vous entendez un grognement sonore au-dessus de votre tête. En levant les yeux, vous apercevez alors une créature en forme de dragon : elle a deux pattes, une peau verdâtre couverte d'écaillés et elle vole vers son antre. Tandis qu elle s'approche, un jet de flammes jaillit de sa gueule : c'est vous qui êtes visé. Tentez votre Chance. !EVENT",
    choices : CHOICES[57]
  },{
    id: 58,
    text : "Vous fouillez dans votre sac à dos et vous en retirez la petite bouteille d'Eau Bénite. Vous la débouchez aussitôt et vous en jetez le contenu sur la GOULE qui avance vers vous. Une fumée épaisse s'élève alors des brûlures provoquée par l'Eau Bénite sur la chair décomposée de la Goule. La créature ressent apparemment une intense douleur, mais aucun son ne sort de sa bouche grande ouverte. Elle se traîne dans un coin de la pièce pour essayer d'échapper à votre arme sacrée, et vous vous approchez du cercueil pour voir ce qu'il contient. Vous avez le bonheur d'y trouver 25 Pièces d'Or, ainsi qu'un objet dont la Goule se servait en guise d'oreiller : il s'agit d'un marteau à tête de bronze gravée de l'initiale G. Tout heureux de votre butin, vous le rangez dans votre sac à dos. !EVENT",
    choices : CHOICES[58]
  },{
    id: 59,
    text : "Vous arrivez à une autre bifurcation.",
    choices : CHOICES[59]
  },{
    id: 60,
    text : "Vous retenez votre souffle et vous fouillez dans votre sac à dos en cherchant désespérément vos Filtres à Nez. Tentez votre Chance. !EVENT",
    choices : CHOICES[60]
  },{
    id: 61,
    text : "Vous êtes bientôt de retour à la première bifurcation.",
    choices : CHOICES[61]
  },{
    id: 62,
    text : "Tandis que vous retirez votre épée du corps de votre dernier adversaire, l'étalon blanc s'enfuit au galop en direction de l'est et disparaît bientôt au loin.",
    choices : CHOICES[62]
  },{
    id: 63,
    text : "Lorsqu'il voit que la flèche vous a manqué, le Centaure se dresse sur ses pattes de derrière et se précipite sur vous au grand galop. Il vous faut faire un bond de côté pour éviter d'être renversé, et vous le voyez passer devant vous dans un nuage de poussière. Il s'arrête dix mètres plus loin, sur le chemin par lequel vous êtes venu ; et vous songez alors que l'idée d'affronter le Centaure n'était peut-être pas si bonne que ça.",
    choices : CHOICES[63]
  },{
    id: 64,
    text : "Avant que l'Herbe d'Embrouille ait eu le temps de vous faire tomber sur le sol, vous parvenez à attraper dans votre sac à dos la bouteille contenant la Potion de Contrôle des Plantes et à avaler le liquide. Aussitôt, comme si elle avait été brûlée par une flamme, l'Herbe d'Embrouille relâche son étreinte et s'écarte du chemin. !EVENT",
    choices : CHOICES[64]
  },{
    id: 65,
    text : "Le pont tombe quasiment en ruine mais vous parvenez malgré tout à le franchir sans encombre. De l'autre côté, vous arrivez au pied de quelques collines tandis que le soir tombe, et vous installez votre camp derrière des rochers, à gauche du chemin.",
    choices : CHOICES[65]
  },{
    id: 66,
    text : "Vous avancez avec prudence sur les pierres glissantes et vous traversez ainsi la rivière. De l'au-tre côté, le chemin continue vers le nord, dans les collines ; mais le soir tombe et vous décidez d'installer votre camp pour la nuit sous un grand arbre solitaire, à droite du sentier.",
    choices : CHOICES[66]
  },{
    id: 67,
    text : "Vous arrivez à une autre bifurcation. L'embranchement qui va vers le sud retourne dans les collines.",
    choices : CHOICES[67]
  },{
    id: 68,
    text : "Vous buvez lentement le liquide clair à la bouteille : il a un goût très amer, et vous avez soudain peur d'avoir fait une sottise en l'avalant. Mais, bientôt, une sensation de chaleur se diffuse dans tout votre corps et vous vous sentez revigoré. C'est une Potion de Santé que vous venez de boire et vous gagnez 3 points d'ENDURANCE. !EVENT",
    choices : CHOICES[68]
  },{
    id: 69,
    text : "Le tunnel s'enfonce de plus en plus profondément en direction de l'ouest et débouche, quelque soixante mètres plus loin, sur une vaste caverne aux parois verdâtres et suintantes. A travers une ouverture dans le plafond, un rayon de lumière s'infiltre dans la caverne et illumine le sol. De petits humanoïdes à la peau claire s'affairent çà et là, semblant accorder tous leurs soins à des champignons de différentes couleurs. De l'eau coule dans une rigole qui traverse la caverne et des marches, taillées dans la paroi du fond, mènent à l'ouverture par laquelle entre la lumière du jour. Vous tirez votre épée et vous vous approchez de l'un des humanoïdes. Ce sont de petites créatures chauves aux yeux blancs, et votre présence ne semble pas les intéresser le moins du monde. Elles continuent imperturbablement à surveiller leurs champignons, se penchant de temps à autre pour en chasser des insectes ou arracher de mauvaises herbes. Qu'allez-vous faire ?  !EVENT",
    choices : CHOICES[69]
  },{
    id: 70,
    text : "L'épée est magnifique et c'est là, sans nul doute, l'œuvre d'un maître en matière d'armurerie. Vous en sentez la puissance en la tenant en main, et vous gagnez 2 points d'HABiLETÊ grâce à cette épée enchantée. Vous en faites tournoyer la lame au-dessus de votre tête. !EVENT",
    choices : CHOICES[70]
  },{
    id: 71,
    text : "En écartant le rideau, vous apercevez une minuscule créature à la peau verdâtre. Le petit être a une grosse tête, un long nez, des oreilles pointues, et porte des vêtements de toile marron. A son cou, pend un gros médaillon accroché à une chaîne d'argent. Assis à une table, il est en train d'examiner une main d'homme, moulée en argile rouge. Lorsqu'il vous voit entrer, il saisit un marteau de pierre et fracasse la main d'argile, puis il se lève d'un bond et vous fait face, son marteau à la main. C'est un chef GREMLIN et il vous faut le combattre. A chaque assaut, vous devrez réduire de 3 points votre Force d'Attaque, en raison de l'exiguïté des lieux qui vous empêche de vous mouvoir librement.!MONSTRE",
    choices : CHOICES[71]
  },{
    id: 72,
    text : "Le chemin aboutit à une bifurcation. L'embranchement orienté au sud retourne à la forêt.",
    choices : CHOICES[72]
  },{
    id: 73,
    text : "Vous prenez votre élan et vous foncez sur la porte. Lancez deux dés. Si le chiffre obtenu est égal ou inférieur à votre total de CHANCE et à votre total d'HABILETÉ, la porte s'ouvre à la volée et vous vous rendez au 327. Si ce chiffre est supérieur soit à votre total de CHANCE, soit à votre total d'HABILETÉ, VOUS rebondissez sur la porte et vous frottez votre épaule meurtrie. Vous estimez alors qu'il est inutile de risquer une blessure plus grave. !EVENT",
    choices : CHOICES[73]
  },{
    id: 74,
    text : "Vous vous emparez du sac de cuir accroché au dossier de la chaise de pierre et vous quittez la caverne sur la pointe des pieds. Une fois dehors, vous examinez le contenu du sac et vous y trouvez 5 Pièces d'Or, ainsi qu'une petite cloche de cuivre. Vous rangez le tout dans votre sac à dos. !EVENT",
    choices : CHOICES[74]
  },{
    id: 75,
    text : "Vos jambes vous semblent très vulnérables, et vous ne seriez guère étonné qu'une quelconque créature vivant dans l'eau de la rivière vienne vous mordre les mollets. Rien ne se produit cependant, et vous parvenez à atteindre l'autre rive sans dommage. Vous vous trouvez à présent au pied de quelques collines alors que le soir tombe. Vous décidez donc d'installer votre camp pour la nuit et vous choisissez un emplacement à l'abri d'un amas de rochers situé à gauche du chemin.",
    choices : CHOICES[75]
  },{
    id: 76,
    text : "",
    choices : CHOICES[76]
  },{
    id: 77,
    text : "Les Pygmées font aussitôt volte-face et s'enfuient dans les hautes herbes. Qu'allez-vous faire à présent ? ",
    choices : CHOICES[77]
  },{
    id: 78,
    text : "Quin se lève et s'approche sans bruit d'un coffre de bois, au fond de la cabane. Il en soulève le couvercle et en retire une petite fiole de verre qu'il vous tend, avant de revenir vers la table où il se laisse tomber sur sa chaise, l'air profondément abattu. La poudre dans la fiole étincelle à la lumière, et vous la rangez soigneusement dans votre sac à dos. !EVENT",
    choices : CHOICES[78]
  },{
    id: 79,
    text : "Bien campé sur vos jambes, le dos contre l'arbre, vous vous préparez à combattre les Vampires ; et vous les affronterez un par un tandis qu'ils fondent sur vous. !MONSTRE",
    choices : CHOICES[79]
  },{
    id: 80,
    text : "Il ne vous semble pas utile de rester plus longtemps en cet endroit.",
    choices : CHOICES[80]
  },{
    id: 81,
    text : "Vous entendez à quelque distance des voix aiguës qui s'appellent les unes les autres d'un ton surexcité. Le tunnel aboutit à l'entrée d'une petite caverne et, soudain, une flèche jaillit dans votre direction. Tentez votre Chance. !EVENT",
    choices : CHOICES[81]
  },{
    id: 82,
    text : "Possédez-vous une Potion de Tranquillité? !EVENT",
    choices : CHOICES[82]
  },{
    id: 83,
    text : "Vous fouillez dans votre sac à dos pour y prendre la belladone. C'est une plante vénéneuse, mais elle vous empêchera de vous changer vous-même en Loup-Garou. Vous perdez 2 points d'ENDURANCE en raison des effets du poison. !EVENT",
    choices : CHOICES[83]
  },{
    id: 84,
    text : "En vous approchant du rocher, vous êtes encore plus étonné de le voir se soulever, porté par ce qui semble deux courtes jambes de pierre. Deux bras, en pierre également, se déploient alors de part et d'autres ; leurs extrémités ressemblent à des massues, et vous contemplez, incrédule, ce rocher qui s'avance vers vous en brandissant l'une de ces massues de pierre. Fort heureusement, vous avez suffisamment de réflexe pour vous arracher à votre stupéfaction et vous tirez votre épée, prêt à combattre la BETE ROCHEUSE. Si vous souhaitez prendre la Fuite9 vous pourrez le faire après avoir mené trois Assauts, et vous vous échapperez alors en direction du nord, vers le fond de la vallée. MONSTRE",
    choices : CHOICES[84]
  },{
    id: 85,
    text : "A l'intérieur de la cage, une petite créature mus-culeuse à la peau brune et couverte d'écaillés sautille en tous sens. Il s'agit d'un GOBELIN qui porte autour du cou, accroché à une lanière de cuir, un petit bâton d'un noir brillant.",
    choices : CHOICES[85]
  },{
    id: 86,
    text : "Vous vous accroupissez dans les hautes herbes et vous entendez, parmi les aboiements, le bruit d'un galop. Vous apercevez alors les pattes de quatre chiens de chasse et les jambes d'un cheval de course qui passent devant vous dans un nuage de poussière. Les échos de la chasse s'évanouissent au loin et vous allez rejoindre le chemin.",
    choices : CHOICES[86]
  },{
    id: 87,
    text : "Le chemin mène le long d'une corniche, au flanc de la colline, et aboutit à une autre bifurcation. L'embranchement orienté au sud repart vers la rivière.",
    choices : CHOICES[87]
  },{
    id: 88,
    text : "Vous grimpez les marches et vous atteignez bientôt la deuxième anfractuosité. En y jetant un coup d'œil, vous apercevez de vagues silhouettes se déplaçant dans l'obscurité, et vous entendez également des bruits de pas traînants.",
    choices : CHOICES[88]
  },{
    id: 89,
    text : "La pièce tombe dans l'eau avec un léger « plouf » et vous la rayez de votre Liste d'Equipement. Vous faites ensuite le vœu de recevoir d'autres Pièces d'Or, mais rien ne se produit : ce puits-là n'exauce pas les vœux. Qu'allezvous faire à présent ? !EVENT",
    choices : CHOICES[89]
  },{
    id: 90,
    text : "Le chemin mène vers le nord en descendant la colline entre de gros amas rocheux. Vous avez la désagréable sensation d'être observé et soudain, surgissant de derrière un gros roc, à gauche du sentier, apparaissent deux hommes au corps noueux, barbus et chevelus. Ils sont vêtus de peaux de bêtes et ont l'air menaçant. L'un des deux hommes tend alors son arc et vous décoche une flèche. Tentez votre Chance.!EVENT",
    choices : CHOICES[90]
  },{
    id: 91,
    text : "Vous ouvrez le livre et vous avez la surprise de constater que les pages ont été évidées en leur milieu, ménageant ainsi une cavité dans laquelle a été déposé un bijou attaché à une chaîne d'argent. Juste à côté se trouve un parchemin sur lequel on peut lire ces mots : !EVENT Vous passez le collier autour de votre cou, en pensant qu'il ne tardera pas à vous être utile dans cette forêt de malheur ! Par la même occasion, vous gagnez 1 POINT de CHANCE. !EVENT",
    choices : CHOICES[91]
  },{
    id: 92,
    text : "A mesure que vous avancez vers le nord, l'herbe est de moins en moins haute et le chemin remonte en pente douce. A quelque distance, * vous entendez le son d'une eau courante. Mais vous percevez également un autre bruit ŕ et infiniment plus inquiétant celui-là. C'est un énorme bourdonnement qui annonce l'arrivée d'un essaim d'Abeilles Géantes, chacun de ces insectes mesurant une bonne dizaine de centimètres de longueur. Or, l'essaim vole très exactement au-dessus de votre tête. Qu'allez-vous faire ?",
    choices : CHOICES[92]
  },{
    id: 93,
    text : "De retour à la bifurcation.",
    choices : CHOICES[93]
  },{
    id: 94,
    text : "Vous prenez dans votre sac à dos la Corde Magique qui semble très bien savoir ce qu elle a à faire : l'une de ses extrémités, en effet, s'enroule d'ellemême autour du tronc d'arbre, tandis que l'autre extrémité se laisse tomber dans le trou qui aboutit au tunnel, vous invitant ainsi à y descendre. !EVENT",
    choices : CHOICES[94]
  },{
    id: 95,
    text : "Vous essayez de toutes vos forces de déplacer le bloc de pierre mais sans parvenir à le faire bouger d'un pouce.  Avez-vous de la Poudre de Lévitation ?  !EVENT",
    choices : CHOICES[95]
  },{
    id: 96,
    text : "!MONSTRE",
    choices : CHOICES[96]
  },{
    id: 97,
    text : "Le sentier continue inlassablement vers le nord mais, au bout d'un moment, le feuillage des arbres s'éclaircit quelque peu et semble moins menaçant lorsque, enfin, des rayons de lumière parviennent à le traverser. Bientôt, vous apercevez à la droite du chemin une vieille chaise en bois de chêne couverte de mousse.",
    choices : CHOICES[97]
  },{
    id: 98,
    text : "Tandis que vous poursuivez votre chemin au sein de la Forêt des Ténèbres, vous êtes attaqué par un groupe d'Hommes des Bois, probablement les mêmes qui ont défait Gromollet et ses compagnons deux jours auparavant. Tentez votre Chance. !EVENT",
    choices : CHOICES[98]
  },{
    id: 99,
    text : "Le chemin mène un peu plus loin, à la porte d une cabane aux murs de boue séchée. La cabane est munie d'un toit en forme de dôme et d'une seule et unique fenêtre. En jetant un coup d'œil à travers la fenêtre, vous apercevez un homme grand, à la peau sombre, qui est assis à une table, au centre de la pièce. Il est torse nu et semble faire des exercices de musculation.",
    choices : CHOICES[99]
  },{
    id: 100,
    text : "Tandis que vous fouillez dans votre sac à dos, vous réalisez soudain ŕ et avec terreur ŕ que les gros insectes bourdonnant au-dessus de votre tête sont des ABEILLES TUEUSES. Vous saisissez alors votre bouteille de Potion de Contrôle des Insectes et vous en avalez le contenu. Les Abeilles Tueuses fondent aussitôt sur vous mais sans parvenir à vous atteindre : on dirait qu'elles se heurtent à un écran invisible et elles continuent de voler tout autour de vous dans un bourdonnement assourdissant, en essayant vainement de vous piquer. Avec un courage redoublé, vous tirez alors votre épée et vous la faites tournoyer en l'air : vous réussissez à toucher Tune des abeilles qui tombe sur le sol ; un instant plus tard, vous l'écrasez sous la semelle de cuir de votre sandale, et les autres insectes s'enfuient aussitôt au loin. !EVENT",
    choices : CHOICES[100]
  },{
    id: 101,
    text : "Vous prenez le sac de cuir sur la chaise en pierre et vous sortez. A l'intérieur du sac, vous découvrez 5 Pièces d'Or et une petite cloche de cuivre que vous rangez dans votre sac à dos. !EVENT",
    choices : CHOICES[101]
  },{
    id: 102,
    text : "En marchant le long du chemin, vous remarquez les traces laissées par les sabots d'un cheval se dirigeant vers l'est. Bientôt, vous parvenez à une autre bifurcation et les empreintes de sabots prennent la direction du sud, retournant vers la forêt.",
    choices : CHOICES[102]
  },{
    id: 103,
    text : "Le chemin mène à une petite clairière. Sur votre droite, vous apercevez un entassement de branches, d'herbe et de morceaux d'étoffe ; c'est sans doute le repaire de quelque créature de grande taille. Parmi les débris et les vieux os répandus çà et là, vous distinguez quelque chose de brillant.",
    choices : CHOICES[103]
  },{
    id: 104,
    text : "La femme BANDIT s'avance vers vous en brandissant son épée. « Mort à l'intrus ! » s'écrie-t-elle. Elle est le chef de la bande, et c'est elle que vous allez devoir combattre en premier. Si vous parvenez à la vaincre, vous aurez ensuite à affronter les quatre autres bandits deux par deux. Ils vous attaqueront par paire, et vous devrez à chaque Assaut et dans chaque paire choisir celui que vous combattrez en priorité. Affrontez cet adversaire selon les règles habituelles. Quant à l'autre, vous jetterez les dés comme à l'accoutumée pour calculer vos Forces d'Attaque respectives ; mais si votre propre Force d'Attaque est supérieure à la sienne, vous ne lui aurez pas infligé une blessure pour autant, vous aurez simplement esquivé le coup qu'il vous aura porté. Si sa Force d'Attaque est en revanche supérieure à la vôtre, vous aurez reçu une blessure selon les règles habituelles. Chaque fois que vous aurez réussi à tuer l'un des adversaires de chaque paire, le combat se poursuivra avec l'autre selon les règles normales. !MONSTRE",
    choices : CHOICES[104]
  },{
    id: 105,
    text : "Vous voyez au loin, à la droite du chemin, de gros oiseaux qui tournoient dans le ciel. En vous approchant, vous reconnaissez leur aspect caractéristique : ce sont des vautours.",
    choices : CHOICES[105]
  },{
    id: 106,
    text : "Posée sur les cendres de Pâtre, vous trouvez une petite bouilloire de cuivre noircie par les flammes. Vous en soulevez le couvercle, et vous découvrez à l'intérieur un anneau d'or serti d'une grosse émeraude. Cette bague vaut 15 Pièces d'Or, et cette bonne fortune vous rapporte 2 points de CHANCE. Tout heureux de votre trouvaille, vous décidez de ne pas vous occuper du coffre de bois.",
    choices : CHOICES[106]
  },{
    id: 107,
    text : "Au moment où vous montez les dernières marches qui mènent à l'anfractuosité, un jet de flammes vous barre la route. Puis une forme immense et sombre sort de la cavité rocheuse. Du feu lui jaillit des narines et des volutes de fumée noire s'élèvent dans la caverne. La créature a la forme d'un homme mais elle est dotée d'ailes. Dans une main, elle tient une épée de feu et, dans l'autre, un fouet. Sa tête est coiffée d'une couronne d'or. La créature vous fait face, debout sur les marches, au-dessus de vous. Elle reste ainsi immobile un instant, puis fait soudain claquer son fouet tout en brandissant son épée enflammée. La seule issue qui permette de sortir de la caverne se trouve à quelque distance devant vous, en haut des marches et, pour parvenir jusque-là, il vous faudra combattre le DEMON DE FEU, Maître des Clones. !MONSTRE A chaque Assaut, après avoir déterminé vos Forces d'Attaque respectives, vous devrez lancer à nouveau un dé pour savoir s'il a réussi à vous donner un coup de son fouet. Si vous faites un 1 ou un 2, vous aurez reçu un coup de fouet qui vous fera perdre 1 POINT d'ENDURANCE. Si vous faites entre 3 et 6, en revanche, le fouet vous aura manqué.  Vous avez le droit de faire usage de votre CHANCE pour parer les coups de fouet.",
    choices : CHOICES[107]
  },{
    id: 108,
    text : "La douleur augmente et devient presque insupportable. Vous vous prenez le ventre à deux mains et vous tombez à genoux, la bouche écumante. Lorsque enfin la douleur disparaît, vous vous sentez très faible, et cette épreuve vous coute 3 points d'ENDURANCE. Vous vous demandez ce qui peut bien vous attendre encore dans cette maudite forêt. !EVENT",
    choices : CHOICES[108]
  },{
    id: 109,
    text : "Bientôt, le chemin sort de sous les arbres et vous conduit à une vaste plaine couverte de hautes herbes. Un peu plus loin, le sol monte en pente douce, et vous apercevez à quelque distance des collines basses dont les contours se découpent contre le ciel. Devant vous, le chemin se divise en trois embranchements.",
    choices : CHOICES[109]
  },{
    id: 110,
    text : "",
    choices : CHOICES[110]
  },{
    id: 111,
    text : "L'expression du visage d'Arragon passe aussitôt de la confiance à la peur. Il n'est peut-être pas aussi redoutable qu'il veut bien le dire et, soudain, en effet, il vous présente ses excuses pour s'être montré aussi agressif, essayant de se justifier par le fait que bandits et criminels de toutes sortes abondent dans les environs, et qu'il essaye de s'en protéger en se faisant passer pour un sorcier aux terribles pouvoirs. Il vous demande de lui pardonner et vous offre 5 Pièces d'Or si vous promettez de le laisser en paix, et de ne révéler à personne la supercherie. Vous acceptez le marché et vous quittez la maison. !EVENT",
    choices : CHOICES[111]
  },{
    id: 112,
    text : "Le sentier continue vers le nord à travers une végétation touffue. Bientôt, il oblique brusquement à droite en direction de Test, et la végétation devient si dense par endroits, qu'il faut vous tailler un chemin à coups d'épée. Votre marche vers l'est est longue et pénible ; enfin, vous arrivez à une bifurcation.",
    choices : CHOICES[112]
  },{
    id: 113,
    text : "Le chemin oblique soudain vers la droite et mène droit au nord, à travers le lit d'une vallée. Sur la gauche, vous apercevez un vaste étang au bord duquel se trouve une petite cabane de bois au toit de chaume.",
    choices : CHOICES[113]
  },{
    id: 114,
    text : "L'Homme-Arbre avance lentement vers vous sur ses racines déployées. !EVENT",
    choices : CHOICES[114]
  },{
    id: 115,
    text : "Le chemin arrive bientôt à une bifurcation.",
    choices : CHOICES[115]
  },{
    id: 116,
    text : "Vous parvenez finalement à vous rendormir, mais vous vous réveillez de bonne heure. Dans la lumière du matin, vous remarquez que le plus gros des Loups portait autour du cou un collier de cuir incrusté d'or, qui doit valoir 15 Pièces d'Or. Vous rangez le collier dans votre sac à dos en vous demandant qui peut bien être le maître du Loup. !EVENT",
    choices : CHOICES[116]
  },{
    id: 117,
    text : "Vous déverrouillez la porte, et vous faites un pas en arrière en tirant votre épée, au cas où le Gobelin se mêlerait de vouloir vous attaquer. La créature saisit alors un tabouret de bois qu'elle brandit au-dessus d'elle, puis elle ouvre la porte d'un coup de pied et se précipite sur vous en hurlant. Il vous faut combattre. !MONSTRE",
    choices : CHOICES[117]
  },{
    id: 118,
    text : "Le chemin finit par émerger de sous les feuillages, et débouche sur une vaste plaine. Un peu plus loin, le sol s'élève, menant à quelques collines basses. De chaque côté du chemin, des herbes hautes ondulent doucement sous la brise tiède. Tout est paisible et il semble qu'aucun danger grave ne vous menace. Vous marchez donc d'un pas confiant lorsque, soudain, le silence alentour est rompu par des cris et des grognements, à droite du chemin. En regardant de ce côté, vous voyez alors les herbes s'écarter sous les pas d'une bête encore invisible qui s'avance vers vous. Aussitôt, vous tirez votre épée, prêt à combattre. Et quelques instants plus tard, une énorme créature au pelage sombre et aux allures de cochon, surgit devant vous et s'immobilise sur le chemin. Deux longues défenses pointent de chaque côté de son groin et de la vapeur s'élève de son corps en sueur. Ses petits yeux vous regardent fixement, puis l'animal baisse la tête et fonce sur vous. Il va falloir affronter ce SANGLIER SAUVAGE. !MONSTRE",
    choices : CHOICES[118]
  },{
    id: 119,
    text : "Le chemin monte parmi les collines en suivant une pente escarpée et, lorsque vous parvenez au sommet, le soleil est brûlant. A quelque distance se dessine le cercle verdoyant de la Forêt des Ténèbres. Derrière vous, la brume du matin s'étend toujours sur les hautes herbes ; mais devant, les rayons du soleil illuminent une vallée sans nuages. Tout est calme et vous commencez à descendre le versant opposé de la colline. Vous arrivez alors à une bifurcation.",
    choices : CHOICES[119]
  },{
    id: 120,
    text : "Vous laissez tomber un caillou dans le tronc creux. D'après le temps qu'il met à atteindre le sol du tunnel, vous estimez à cinq mètres la hauteur qui vous sépare du fond.  Possédez-vous une Corde Magique ? !EVENT",
    choices : CHOICES[120]
  },{
    id: 121,
    text : "De retour à la bifurcation.",
    choices : CHOICES[121]
  },{
    id: 122,
    text : "Arrivé au bas de l'échelle, vous constatez que le tunnel mène vers le nord sur une bonne distance, et vous remarquez avec étonnement qu'il est éclairé sur toute sa longueur par des torches disposées à intervalles réguliers.",
    choices : CHOICES[122]
  },{
    id: 123,
    text : "L'homme Arbre essaye de vous frapper à grands coups de ses deux grandes branches, et vous vous lancez à l'assaut. Pour terrasser l'Homme Arbre, il faut le combattre deux fois : une fois pour chacune de ses deux grandes branches.  !EVENT !MONSTRE",
    choices : CHOICES[123]
  },{
    id: 124,
    text : "Le chemin aboutit à une autre bifurcation. L'embranchement orienté au sud ramène vers la forêt.",
    choices : CHOICES[124]
  },{
    id: 125,
    text : "Tandis que vous descendez dans le trou, vous remarquez une abondance de matière gluante, secrétée sans doute par quelque immense créature.",
    choices : CHOICES[125]
  },{
    id: 126,
    text : "Vous forcez avec précaution le couvercle de la boîte et soudain, un nuage de gaz jaune s'en échappe, vous enveloppant le visage. !EVENT",
    choices : CHOICES[126]
  },{
    id: 127,
    text : "Vous montez sur le dos du Centaure qui se tourne vers la rivière pour la traverser. L'eau a une couleur vert sombre, et vous vous demandez quel genre de créatures peut bien se cacher dans ses profondeurs. Bientôt, vous atteignez l'autre rive et vous donnez au Centaure ses 3 pièces d'Or. Il vous remercie, vous fait un signe d'adieu et vous souhaite bonne chance. Vous vous trouvez à présent au pied de quelques collines et le soir tombe. !EVENT",
    choices : CHOICES[127]
  },{
    id: 128,
    text : "Vous tranchez les cordes épaisses qui retiennent le Barbare prisonnier. Celuici pousse un grognement puis s'assied, frottant ses poignets et ses chevilles endoloris. Il tourne ensuite son regard vers vous et se met à ricaner. Est-il fou ou ingrat ? En tout cas, il arrache un pieu du sol et vous attaque aussitôt. !MONSTRE",
    choices : CHOICES[128]
  },{
    id: 129,
    text : "Votre bras est douloureux en raison de l'effort fourni, et vous ne vous consolez pas d'avoir dû laisser cela à Quin. Cette mésaventure vous fait perdre 2 points de CHANCE et vous quittez la cabane, laissant là un Quin souriant et satisfait. !EVENT",
    choices : CHOICES[129]
  },{
    id: 130,
    text : "A Le chemin s'enfonce parmi les arbres noueux et les buissons d'épines. Bientôt, vous entendez un grognement au-dessus de votre tête et vous apercevez, allongée sur une branche qui surplombe le sentier, une créature moitié femme, moitié félin. Elle a le pelage ras et d'un noir brillant comme celui d'une panthère, et ses bras et ses jambes sont dotés de grosses pattes aux griffes acérées. Le visage de la créature, cependant, a des traits humains, avec des yeux en amande, mais de longues dents de fauve. Il vous semble qu'elle s'apprête à bondir sur vous.",
    choices : CHOICES[130]
  },{
    id: 131,
    text : "Vous vous hissez hors de l'eau sur la berge opposée de la rivière. Le chemin continue vers le nord, en direction des collines ; mais, comme le soir tombe, vous décidez d'établir votre campement ici même sous un grand arbre solitaire, à droite du chemin.",
    choices : CHOICES[131]
  },{
    id: 132,
    text : "La créature qui se pose devant vous est une VOUIVRE VOLANTE. Elle vous fixe du regard et ouvre sa gueule immense pour cracher à nouveau un jet de feu rugissant. Le monstre est long d'une bonne dizaine de mètres, et ses écailles épaisses semblent invulnérables à votre épée.  Avez vous une flûte ? !EVENT",
    choices : CHOICES[132]
  },{
    id: 133,
    text : "Vous glissez l'anneau à votre majeur et vous ressentez aussitôt une douleur fulgurante. La douleur finit par disparaître, mais vous ne parvenez plus à enlever la bague. Or, il s'agit là d'un Anneau de Lenteur qui vous obligera à déduire 2 points du total obtenu aux dés lorsque vous calculerez votre Force d'Attaque au cours des combats à venir. Notez-le sur votre Feuille d'Aventure !EVENT",
    choices : CHOICES[133]
  },{
    id: 134,
    text : "Vous faites un vœu, mais rien ne se produit et vous perdez 1 point de CHANCE. !EVENT",
    choices : CHOICES[134]
  },{
    id: 135,
    text : "Le tunnel continue vers le nord jusqu'à ce que vous parveniez à une bifurcation.",
    choices : CHOICES[135]
  },{
    id: 136,
    text : "Vous descendez dans le tunnel à l'aide de la corde et, lorsque vos yeux commencent à s'habituer à l'obscurité, vous vous apercevez qu'il n'a pas plus d'un mètre de hauteur.",
    choices : CHOICES[136]
  },{
    id: 137,
    text : "!EVENT Si vous possédez un Gant d'Adresse au Lancer",
    choices : CHOICES[137]
  },{
    id: 138,
    text : "Vous avancez sur le chemin, entre les hautes herbes qui ondulent sous le vent. Mais bientôt vous avez la désagréable impression que ces herbes, en fait, ne se soumettent pas au souffle de la brise : il semble plutôt qu'elles soient douées de volonté et qu'elles puissent remuer à leur guise. Et soudain, un bouquet d'herbes se couche en travers du sentier et s'enroule autour de votre cheville. D'autres herbes font de même, essayant de vous saisir bras et jambes. Vous vous rendez compte alors que vous êtes cerné par de l'HERBE D'EMBROUILLE !EVENT  et si vous possédez une Potion de Contrôle des Plantes",
    choices : CHOICES[138]
  },{
    id: 139,
    text : "Les effets de la belladone et de la morsure du Loup-Garou disparaissent bientôt, et vous parvenez enfin à vous rendormir.",
    choices : CHOICES[139]
  },{
    id: 140,
    text : "Vous contournez la masse bulbeuse de l'Araignée Géante et vous vous recouchez pour plonger dans un sommeil agité. Au matin, vous vous réveillez de bonne heure et vous repartez vers le nord, le long du chemin. Le sentier suit bientôt une pente escarpée en montant dans les collines et, lorsque vous arrivez au sommet, le soleil est brûlant. A quelque distance, vous apercevez le cercle verdoyant de la Forêt des Ténèbres. Derrière vous, la brume du matin s'étend sur les hautes herbes mais devant, les rayons du soleil illuminent une vallée sans nuages. Tout est calme et vous commencez à descendre le versant opposé de la colline. Bientôt, le chemin bifurque.",
    choices : CHOICES[140]
  },{
    id: 141,
    text : "Vous demandez au Nain s'il vient de Pont-de-Pierre. Il vous lance alors un regard mauvais et se lève d'un bond, sa hache à la main. Puis il vous déclare qu'il voue une véritable haine aux Nains de Pont-de-Pierre, et qu'il parcourt la Forêt des Ténèbres en quête du marteau de guerre de Gillibran, pour le rapporter à Eau-de-Boue, son propre village, qui se trouve à l'ouest. Il ajoute que son nom est Gayemainar et qu'il a perdu son aigle préféré et égaré ses viandes en essayant de s'emparer du marteau de guerre de Gillibran. Vous êtes donc en train de parler à un ennemi de Pont-de-Pierre, ce qui vous fait perdre 1 POINT de CHANCE. !EVENT",
    choices : CHOICES[141]
  },{
    id: 142,
    text : "Tandis que le chemin continue vers le nord, l'herbe est de moins en moins haute et le sol s'élève légèrement. Un peu plus loin, vous entendez le bruit d'une eau courante et vous arrivez bientôt sur la berge d'une rivière au cours paisible. Il n'y a pas de pont pour la tra-verser, mais le chemin se prolonge de l'autre côté. Debout, devant vous, se tient un animal magnifique, moitié homme, moitié cheval, d'une blancheur étincelante. Il porte en bandoulière un arc et un carquois de flèches : c'est un CENTAURE. Qu'allez-vous faire ?",
    choices : CHOICES[142]
  },{
    id: 143,
    text : "Votre épée s'enfonce dans le champignon haut d'un mètre, comme s'il s'agissait d'une grosse motte de beurre, mais un nuage de spores s'échappe aussitôt de son pied transpercé, et vous éprouvez quelque difficulté à respirer. Vous vous mettez à tousser et à cracher, vous perdez 2 points d'ENDURANCE. !EVENT",
    choices : CHOICES[143]
  },{
    id: 144,
    text : "En poursuivant votre chemin au fond de la vallée, vous voyez bientôt se dresser une nouvelle fois devant vous le mur sombre de la Forêt des Ténèbres. Le sentier s'enfonce droit dans l'épaisse végétation et, quelques instants plus tard, vous avancez parmi des arbres imposants et des buissons d'épines enchevêtrés. Il fait sombre et tout est calme. Peu après, le chemin aboutit à une bifurcation.",
    choices : CHOICES[144]
  },{
    id: 145,
    text : "Vous dénouez l'amarre du bateau, et vous traversez la rivière à la rame. Mais lorsque vous êtes à peu près à mi-chemin, vous vous apercevez que l'eau s'infiltre dans le fond de l'embarcation. En vérité, la coque est pleine de trous, et le bateau commence à couler :. il ne vous reste plus, dès lors, qu'à prendre vos affaires et à nager vers l'autre rive. Mais, après avoir pris pied sur la berge, vous constatez avec désespoir que toutes vos provisions (si toutefois vous en aviez encore) se sont gâtées au contact de l'eau. Le soir tombe, à présent ; et vous décidez d'installer votre camp à l'abri de quelques rochers, à droite du chemin. !EVENT",
    choices : CHOICES[145]
  },{
    id: 146,
    text : "Vous contemplez le tas de rocs fracassés qui repose à vos pieds, et vous vous demandez comment une telle bête a bien pu voir le jour ; sans doute est-ce là l'œuvre de quelque démon particulièrement malfaisant ? Vous ne le saurez jamais. Quoi qu'il en soit, si vous désirez emporter avec vous un morceau de la pierre qui constituait le corps de la Bête Rocheuse afin de l'examiner plus tard, notez-le sur votre Liste d'Équipement.!EVENT",
    choices : CHOICES[146]
  },{
    id: 147,
    text : "Le chemin mène vers le nord, dans l'épaisse forêt. Dans l une des rares clairières qui s'ouvrent parmi les arbres, vous apercevez un filet de fumée s'élevant de la cheminée d'une cabane en bois située à votre droite. ",
    choices : CHOICES[147]
  },{
    id: 148,
    text : "Le chemin continue vers le nord et vous parvenez bientôt à une autre bifurcation.",
    choices : CHOICES[148]
  },{
    id: 149,
    text : "Tandis que vous cheminez au fond de la vallée, vous voyez bientôt se dresser devant vous le mur vert sombre de la Forêt des Ténèbres. Le sentier s'enfonce dans l'épaisse végétation et, quelques instants plus tard, vous avancez parmi des arbres imposants et des buissons d'épines. L'obscurité règne et tout est calme. Plus loin, le chemin bifurque.",
    choices : CHOICES[149]
  },{
    id: 150,
    text : "En cheminant vers le nord, à travers la verte vallée, vous apercevez bientôt le mur vert sombre de la Forêt des Ténèbres qui se dresse devant vous. Le sentier s'enfonce dans l'épaisse végéta-tion et quelques instants plus tard, vous avancez parmi des arbres imposants et des buissons d'épines. L'obscurité règne et tout est calme. Un peu plus loin, le chemin aboutit à une bifurcation.",
    choices : CHOICES[150]
  },{
    id: 151,
    text : "Le tunnel débouche sur une caverne dont l'entrée est masquée par un rideau qui vous empêche de voir à l'intérieur.",
    choices : CHOICES[151]
  },{
    id: 152,
    text : "En proie à son agonie, le Démon de Feu est englouti dans ses propres flammes, et vous vous avancez pour vous emparer de sa couronne, tandis qu'il s'écroule en un petit tas de cendres. Sa tanière est froide et humide. Elle abrite un trône magnifique devant lequel se prosternent deux Guerriers Clones qui se soumettent à vous dans une attitude de révérence ; vous avez en effet vaincu leur maître, et à présent vous !SUITE",
    choices : CHOICES[152]
  },{
    id: 153,
    text : "La Femme Féline grogne et gronde en montrant les dents avant de bondir sur vous pour vous attaquer. Vous reculez d'un pas et vous vous préparez à combattre.",
    choices : CHOICES[153]
  },{
    id: 154,
    text : "Vous vous relevez et vous constatez que la lanterne a pris une teinte noire.",
    choices : CHOICES[154]
  },{
    id: 155,
    text : "Vous vous recouchez pour essayer de vous rendormir, mais vous vous mettez à frissonner et à trembler tandis que la sueur ruisselle sur votre corps, bien que vous ayez très froid. Avez-vous de la belladone?",
    choices : CHOICES[155]
  },{
    id: 156,
    text : "Vous commencez à en avoir assez de tomber sans cesse. D'autant que vous vous êtes fait mal. Vos diverses contusions vous coûtent d'ailleurs 3 points d'ENDURANCE",
    choices : CHOICES[156]
  },{
    id: 157,
    text : "A gauche du chemin, vous remarquez un grand trou, large d'environ trois mètres. Vous vous avancez tout au bord, et vous constatez qu'il s'enfonce dans les profondeurs de la terre. Ses parois sont en pente douce et vous pouvez descendre dans le trou en marchant.",
    choices : CHOICES[157]
  },{
    id: 158,
    text : "Vous commencez à perdre l'équilibre tandis que l'illusion perturbe votre esprit. Vous fermez alors les yeux et vous fouillez dans votre sac à dos pour y dénicher le Bandeau de Concentration que vous vous hâtez de placer sur votre tête. Vos vertiges disparaissent aussitôt et vous rouvrez les yeux : la vieille femme qui se tient devant vous ŕ vous le savez maintenant ŕ est une SORCIÈRE. Pour vous empêcher d'approcher d'elle, sa servante vous lance à la tête une chaise de bois. Tentez votre Chance.",
    choices : CHOICES[158]
  },{
    id: 159,
    text : "Vous avez beau vous débattre, l'Herbe d'Embrouille parvient à agripper vos bras et vos jambes, et à vous faire tomber sur le sol. L'une des herbes s'enroule alors autour de votre cou et resserre son étreinte. Vous avalez de travers et vous essayez de tousser, puis vous réalisez soudain que l'Herbe d'Embrouille n'a pas l'intention de vous étrangler : elle veut simplement entrer en contact avec les parties de votre corps qui ne sont pas protégées par vos vêtements pour vous sucer le sang ! Avec un haut-le-cœur, vous voyez en effet sur vo§ bras et vos jambes des centaines de traces de piqûres d'où perlent des gouttes de sang et, lorsque enfin l'Herbe a bu tout son content, elle vous relâche et reprend sa place. Ce repas pris à vos dépens vous coûte 3 points d'ENDURANCE et, si vous êtes toujours vivant, vous vous relevez et vous restez debout tout tremblant en frottant vos plaies. ",
    choices : CHOICES[159]
  },{
    id: 160,
    text : "L'étroit sentier continue de s'enfoncer dans la forêt épaisse. Toutes sortes de cris d'animaux et de bruits étranges retentissent à travers les feuillages ; et bientôt, le chemin s'agrandit : il fait à présent un mètre de large. Peu après, vous arrivez devant un poteau indicateur en bois. Il est couvert de mousse et, à son sommet, un gros corbeau est perché. Le panneau porte deux indications : nord et est. Vous êtes en train de vous demander quelle direction prendre, lorsque vous entendez une voix lancer : « Bon après-midi ! » Vous levez les yeux en direction de l'endroit d'où la voix est venue, et vous voyez le corbeau qui vous regarde attentivement. « Bon après-midi », répondez-vous à voix basse, en vous sentant un peu idiot. Le corbeau alors reprend la parole et vous demande où vous allez. Vous lui répondez que vous cherchez deux Gobelins, des petites créatures au corps noueux et à la peau brune et écailleuse. « Pour une Pièce d'Or, je vous donnerai conseil », dit aussitôt le corbeau. Qu'allezvous faire ? !EVENT",
    choices : CHOICES[160]
  },{
    id: 161,
    text : "En plongeant la main dans la noirceur d'encre du vase, vous ressentez soudain une violente douleur. Vous avez d'abord l'impression qu'on vous a écrasé la main, puis qu'on vous la brûle.",
    choices : CHOICES[161]
  },{
    id: 162,
    text : "Il n'y a rien d'utile ou de précieux dans la caverne de l'Homme-Poisson ; et vous vous dirigez vers la paroi située au nord. Des marches permettent de retraverser la chute d'eau, et mènent ensuite au sommet de la pente nord du défilé. Vous vous trouvez à présent au pied de quelques collines et vous voyez que le chemin monte parmi elles en direction du nord. Le soir tombe, et vous décidez d'établir votre campement derrière un amas rocheux, à droite du chemin.",
    choices : CHOICES[162]
  },{
    id: 163,
    text : "Bien qu'il fasse plein soleil, un minuscule nuage gris apparaît dans le ciel. Il se trouve à très basse altitude et semble s'approcher de vous. A mesure qu'il avance, vous constatez qu'il se déplace à très grande vitesse et, finalement, il s'immobilise au-dessus de vous à environ cinq mètres du sol. Puis soudain, un éclair jaillit du nuage et vient vous frapper à l'épaule. Vous perdez 3 points d'ENDURANCE.",
    choices : CHOICES[163]
  },{
    id: 164,
    text : "Vous montez les dernières marches et vous vous retrouvez hors de la caverne, sur l'herbe grasse et verte de la vallée. A l'est, vous voyez le tronc creux par lequel vous êtes descendu peu de temps auparavant, et vous passez devant pour retourner sur le chemin. ",
    choices : CHOICES[164]
  },{
    id: 165,
    text : "Le petit Gremlin fait preuve d'une grande agilité, sautillant tout autour de vous, alors que vous parvenez difficilement à bouger en restant ainsi à quatre pattes. Vous prenez appui contre un mur et vous tirez votre épée.",
    choices : CHOICES[165]
  },{
    id: 166,
    text : "Le moine sourit et vous dit : « Soyez béni. » Puis il s'incline pour vous saluer et s'en va vers le sud, en sifflotant le long du chemin. Vous gagnez 2 points de CHANCE",
    choices : CHOICES[166]
  },{
    id: 167,
    text : "La longue queue de la Vouivre cingle l'air de tous côtés ; et des volutes de fumée s'élèvent des narines de la créature. Vous tirez votre épée et vous vous préparez à affronter ce monstre redoutable.",
    choices : CHOICES[167]
  },{
    id: 168,
    text : "A l'intérieur de la cage, une petite créature au corps noueux et à la peau brune et écailleuse bondit en tous sens. C'est un GOBELIN. Il porte au cou, accroché à une lanière de cuir, un bâton noir et brillant.",
    choices : CHOICES[168]
  },{
    id: 169,
    text : "Le gaz est toxique et vos yeux commencent à larmoyer. Vous toussez et vous retenez votre souffle tandis que vous courez dans la caverne, en vous efforçant d'échapper au nuage de gaz qui vous enveloppe. Mais bientôt, vous avez l'impression que vos poumons vont éclater ; et vous ne pouvez vous empêcher de respirer. Vous perdez 2 points d'HABILETÊ et autant de points d'ENDURANCE que le chiffre obtenu en lançant un dé. Si vous êtes toujours vivant, le nuage de gaz se dissipe et vous rangez la boîte d'argent dans votre sac à dos.",
    choices : CHOICES[169]
  },{
    id: 170,
    text : "Vous entrez dans une pièce richement meublée, décorée d'objets d'art et de tapis de laine. Un vieil homme vêtu d'une ample robe violette et la tête coiffée d'un chapeau pointu, est assis à un bureau devant le mur du fond. « Je suis Arra-gon, dit le vieil homme en se levant, et tu n'es qu'un piètre mortel. Or, voici que tu as l'audace d'entrer chez moi sans y avoir été invité, pour me dérober sans doute mes biens et mes richesses. Mais tu te trompes, étranger, car c'est moi qui vais te soulager de tes biens. Si tu ne me donnes pas, en effet, 10 pièces d'Or et deux des objets que tu transportes dans ton sac à dos pour ajouter à ma magnifique collection, je te changerai aussitôt en pierre ». Avez-vous l'Œil d'Ambre autour du cou ?",
    choices : CHOICES[170]
  },{
    id: 171,
    text : "Le chemin mène à une autre bifurcation. Le sentier orienté au sud retourne dans la vallée",
    choices : CHOICES[171]
  },{
    id: 172,
    text : "Une échelle permet de descendre dans le puits, jusqu'à la surface de l'eau. L'entrée d'un tunnel orienté vers le nord apparaît juste au-dessus de l'eau : c'est un boyau circulaire, large d'environ un mètre. Vous avez le choix entre ",
    choices : CHOICES[172]
  },{
    id: 173,
    text : "Vous prenez dans votre sac à dos la fiole de verre qui contient la poudre étincelante, vous en répandez le contenu sur le bloc de pierre. Celui-ci commence alors à se soulever et, lorsque vous jetez un coup d'œil à l'intérieur du coffre, vous vous apercevez avec dégoût qu'un cadavre en décomposition y est enfermé. C'est un squelette auquel sont encore rattachés des lambeaux de chair qui se mêlent aux haillons dont il est revêtu. Vous avez soulevé le couvercle d'un cercueil où repose quelque maudite créature pas même morte ; car un instant plus tard, vous faites un bond en arrière en voyant le cadavre cligner des yeux et les ouvrir. Vous vous trouvez dans une crypte maléfique où règne un mystérieux suppôt de Satan. Lentement, la créature se redresse dans son cercueil et s'avance vers vous, les bras tendus. Possédez-vous de l'Eau Bénite ?",
    choices : CHOICES[173]
  },{
    id: 174,
    text : "Tandis que vous retirez votre épée de la carcasse du Sanglier Sauvage, vous vous demandez pourquoi il vous a attaqué. Vous entendez alors au lointain des aboiements de chiens. Peut-être était-il poursuivi par une meute et, se voyant pris au piège, a-t-il voulu livrer contre vous son dernier combat? Passé dans le groin du sanglier, vous trouvez un anneau d'or que vous arrachez aussitôt pour le ranger dans votre sac à dos. Cet anneau vaut 10 Pièces d'Or et vous fait gagner 1 point de CHANCE.",
    choices : CHOICES[174]
  },{
    id: 175,
    text : "La serrure du coffre est vieille et rouillée : inutile d'essayer de la forcer.",
    choices : CHOICES[175]
  },{
    id: 176,
    text : "Vous vous penchez sur le cadavre du Gobelin fou et vous examinez le bâton accroché à son cou. Il a été taillé dans un morceau d'ébène et il est muni d'un pas de vis à l une de ses extrémités. La lettre G est gravée à l'autre bout, et vous éprouvez un sentiment d'excitation à l'idée que vous venez de découvrir là ce qui doit être le manche du marteau de guerre que vous recherchez.",
    choices : CHOICES[176]
  },
  {
    id: 177,
    text : "Dehors, à la lumière du plein jour, vous remarquez à nouveau ce silence mortel. Un étroit sentier mène vers le nord, s'éloignant des hautes herbes qui entourent la maison de Yaztromo pour s'enfoncer dans la végétation touffue de la Forêt des Ténèbres. Vous avez à peine fait quelques pas que vous vous retrouvez cerné par l'obscurité de cette forêt inextricable ; des pierres et des racines noueuses semblent se cacher dans l'ombre, et vous pourriez presque croire qu'elles cherchent à vous faire trébucher. La lumière du soleil s'efface bientôt complètement et l'atmosphère devient humide et déplaisante. Vous avancez de plus en plus profondément dans les ténèbres et le chemin finit par se diviser en deux autres sentiers, de part et d'autre d'un grand et vieil arbre. Si ",
    choices : CHOICES[177]
  },{
    id: 178,
    text : "Tandis que vous entrez dans l'eau, le Centaure s'en va au galop vers le sud, le long du chemin. L'eau de la rivière a une teinte vert foncé et vous vous demandez si quelques créatures ne se cachent pas dans ses profondeurs. L'eau vous monte seulement jusqu'à la taille mais elle est si froide que vos jambes s'engourdissent. Vous avez l'impression que quelque chose est entré en contact avec vos jambes, des herbes peut-être ; mais il est difficile, en vérité, de deviner de quoi il s'agit. Vous atteignez enfin l'autre berge et vous vous hissez hors de l'eau. Vous examinez alors vos jambes et vous avez une réaction de dégoût en voyant une grosse sangsue noire, d'environ 15 centimètres de long, accrochée à votre cuisse. Vous fouillez dans votre sac à dos pour y prendre du sel et vous en frottez le répugnant animal qui se recroqueville aussitôt et se détache de votre jambe. Vous perdez une ration de vos Provisions en raison du sel utilisé. Vous rejetez ensuite à la rivière la sangsue ratatinée, et vous jetez un coup d'oeil autour de vous. Vous vous trouvez à présent au pied de quelques collines, et le soir tombe. Vous remarquez que le chemin monte parmi les collines en direction du nord et vous décidez d'établir votre campement sous un vieux chêne immense, situé à droite du sentier.",
    choices : CHOICES[178]
  },{
    id: 179,
    text : "Vous vous coiffez du casque et, aussitôt, une énergie nouvelle parcourt tout votre corps : vous vous sentez fort et rien ne vous fait peur. Ce casque a des vertus magiques : il vous permettra, chaque fois que vous vous en coifferez, d'ajouter 1 point à votre Force d'Attaque, lors de futurs combats.",
    choices : CHOICES[179]
  },{
    id: 180,
    text : "Vous marchez rapidement le long du sentier, à travers les hautes herbes qui vous arrivent à la taille, et vous arrivez à une nouvelle bifurcation. ",
    choices : CHOICES[180]
  },{
    id: 181,
    text : "Vous suivez les marches et vous traversez la chute d'eau pour entrer dans une vaste caverne ; les marches contournent un bassin d'eau stagnante. De l'autre côté du bassin, vous trouvez une table et une chaise de pierre. En vous approchant de la table, vous voyez des déchets de poisson abandonnés là et, soudain, vous entendez derrière vous un bruit d'eau. Une étrange créature armée d'un trident surgit alors du bassin et s'avance vers vous. Elle a les jambes d'un homme, mais sa tête et son torse ressemblent au corps d'un gros poisson vert aux yeux globuleux. Ses bras ont également quelque chose d'humain, bien qu'ils soient recouverts d'écaillés. Il s'agit d'un HOMMEPOISSON et il vous faut île combattre.",
    choices : CHOICES[181]
  },{
    id: 182,
    text : "Vous empoignez l'épée et vous posez un pied sur le rocher pour y prendre appui. Lancez deux dés. !EVENT",
    choices : CHOICES[182]
  },{
    id: 183,
    text : "Vous inhalez lentement l'air empoisonné qui vous environne, mais vous n'en ressentez aucun inconvénient et, bientôt, vous pouvez à nouveau respirer librement. Quelques instants plus tard, le nuage de gaz se dissipe, mais comme il ne servirait pas à grand-chose de rester plus longtemps en ces lieux,",
    choices : CHOICES[183]
  },{
    id: 184,
    text : "Vous racontez au moine que vous avez pris une cloche de cuivre à un Troll des Cavernes, et vous la lui montrez. Il se met alors à sauter de joie en criant : « O mon Dieu, quelle chance ! quelle chance ! » Puis il fouille dans une bourse de cuir qu'il porte à la ceinture et en retire une petite fiole de verre. Vous lui donnez la cloche et il vous confie la fiole que vous débouchez et dont vous avalez le contenu. Vous gagnez aussitôt 4 points d'ENDURANCE. Le moine ensuite vous serre la main et se confond en remerciements.",
    choices : CHOICES[184]
  },{
    id: 185,
    text : "Vous êtes étonné de constater que votre main ne porte aucune trace de blessure, et vous essayez de la replonger dans le vase ; mais une barrière invisible en protège maintenant l'ouverture et il vous est impossible de la forcer. ",
    choices : CHOICES[185]
  },{
    id: 186,
    text : "Vous entrez dans l'eau et vous avancez en direction de la berge opposée. Vous avez de l'eau jusqu'à la ceinture, une eau trouble dans laquelle se cachent peut-être toutes sortes de créatures qui peuvent représenter pour vous un danger. Et soudain, vos appréhensions se trouvent justifiées, car vous sentez des dents pointues se planter dans votre cuisse. En portant alors votre main à l'endroit mordu, vous sentez sous vos doigts le corps long et mince d'une ANGUILLE CARNIVORE. Vous tirez aussitôt votre épée et vous essayez de transpercer l'animal.  !SUITE",
    choices : CHOICES[186]
  },{
    id: 187,
    text : "En cheminant le long du sentier sinueux, vous apercevez bientôt une petite créature au corps noueux et à la peau brune et écailleuse. Elle est assise sur un tronc d'arbre mort à la droite du chemin, et son visage paraît maussade tandis qu'elle balance lentement entre ses doigts un bâton d'un noir brillant accroché à une lanière de cuir. C'est peut-être l'un des Gobelins que vous cherchez. Qu'allez-vous faire ?",
    choices : CHOICES[187]
  },{
    id: 188,
    text : "En descendant la colline, vous contemplez le fond de la vallée qui s'étend devant vous. Au-delà se dresse un sinistre mur de feuillages : la Forêt des Ténèbres ! De l'autre côté de ces arbres, se trouve le but de votre voyage : Pont-de-Pierre. En arrivant au fond de la vallée, le chemin aboutit à une bifurcation.",
    choices : CHOICES[188]
  },{
    id: 189,
    text : "Deux des humanoïdes sont en train d'arroser les champignons à chapeaux verts.",
    choices : CHOICES[189]
  },{
    id: 190,
    text : "Vous entendez à quelque distance le piétinement d'un pas lourd et des craquements de branches. Il semble qu'une énorme créature se dirige vers vous ",
    choices : CHOICES[190]
  },{
    id: 191,
    text : "Le moine semble en grand émoi et marche nerveusement d'un côté et d'autre, tandis que vous lui parlez. Vous lui demandez ce qui lui cause un si grand désarroi et il vous répond qu'on a volé sa cloche sacrée, une cloche en cuivre. Il serait prêt à donner comme récompense à quiconque la lui rendrait une potion magique de guérison. Avez-vous une cloche de cuivre dans votre sac à dos ?",
    choices : CHOICES[191]
  },{
    id: 192,
    text : "Vous tirez votre épée, mais le Gnome s'assied en tailleur et sourit. Vous baissez alors les yeux et vous constatez que votre épée s'est soudain transformée en carotte ! ",
    choices : CHOICES[192]
  },{
    id: 193,
    text : "Un petit GREMLIN à la peau verte saute du dernier barreau de l'échelle et entre dans le tunnel. Il ne mesure pas plus d'un mètre de haut et semble très surpris de vous voir là, accroupi dans le tunnel. Il sort aussitôt un poignard de sa veste et vous allez devoir le combattre.",
    choices : CHOICES[193]
  },{
    id: 194,
    text : "L'homme sourit et ôte son masque en vous expliquant qu'il le porte pour se protéger de la poussière, et non pas pour se cacher le visage à la manière des voleurs. Vous rengainez alors votre épée et vous vous détendez quelque peu. L'homme vous déclare qu'il est un chasseur et que le meilleur gibier de la région se trouve dans cette plaine herbeuse, au sein de la Forêt des Ténèbres. Il ajoute que ses chiens étaient en train de poursuivre un sanglier sauvage lorsque, perdant sa trace, ils se sont mis à courir par erreur derrière le renard. L'homme vous avertit que des bêtes dangereuses se cachent alentour : « Et si vous avez l'intention de passer la nuit dans la Forêt des Ténèbres, poursuit-il, vous pourriez bien avoir besoin de ceci. » Il vous met alors un peu de belladone dans la main et remonte sur son cheval. Puis, au son de son cor, il lance ses chiens vers l'est et vous adresse un signe de la main, avant de repartir au galop derrière sa meute.",
    choices : CHOICES[194]
  },{
    id: 195,
    text : "Vous parvenez tout en haut de la liane et vous prenez pied sur une plateforme de bois. Un rideau fait de feuilles et de fougères dissimule rentrée d'une petite cabane ; lorsque vous vous approchez, le rideau s'écarte, laissant apparaître une immense créature simiesque, le corps couvert de poils, et vêtue d'une simple peau de bête nouée autour des reins. La créature brandit un gros os et se met à grogner vers vous. Il s'agit là d'un HOMME SINGE. Qu'allezvous faire?",
    choices : CHOICES[195]
  },{
    id: 196,
    text : "Vous pénétrez dans la sombre caverne, votre épée à la main. L'atmosphère est froide et humide. Vous entendez bientôt un ronflement sonore et lorsque vos yeux se sont habitués à l'obscurité, vous distinguez la forme imposante d'un Troll des Cavernes, dormant sur une grande chaise de pierre. Il a la peau brune et ridée et il est vêtu^de peaux de bêtes. Une massue est posée sur ses genoux et un grand sac de cuir pend au dossier de sa chaise. Qu'allez-vous faire ? ",
    choices : CHOICES[196]
  },{
    id: 197,
    text : "Si vous avez une Potion Antipoison",
    choices : CHOICES[197]
  },{
    id: 198,
    text : "Le chemin devient de plus en plus escarpé à mesure qu'il monte dans les collines. Lorsque vous parvenez au sommet, le soleil est brûlant et vous apercevez au loin le cercle vert foncé de la Forêt des Ténèbres. La brume du matin s'étend sur les hautes herbes, derrière vous, mais devant, les rayons du soleil illuminent une vallée sans nuages. Tout est calme. Vous descendez alors le versant opposé de la colline et vous arrivez bientôt à une bifurcation.",
    choices : CHOICES[198]
  },{
    id: 199,
    text : "Vous remarquez, à gauche du chemin, un vaste bassin d'eau boueuse et bouillonnante. De la vapeur s'élève des grosses bulles qui éclatent bruyamment à sa surface. Qu'allez-vous faire ?",
    choices : CHOICES[199]
  },
  { id: 200 ,
text: "Vous prenez dans votre sac à dos la petite clé d'argent et vous l'introduisez dans la serrure. Elle s'y adapte parfaitement et vous la faites tourner. La serrure cliquette et la porte de pierre s'ouvre aussitôt. Un escalier, en pierre également, s'enfonce dans des profondeurs obscures, et il vous est impossible de distinguer quoi que ce soit au bas des marches.",
 choices: CHOICES[ 200 ]
}
,{ id: 201 ,
text: "!EVENT",
 choices: CHOICES[ 201 ]
}
,{ id: 202 ,
text: "La Femme Féline porte deux boucles d oreille en or. Elles valent chacune 5 Pièces d'Or et vous les rangez dans votre sac à dos. !EVENT",
 choices: CHOICES[ 202 ]
}
,{ id: 203 ,
text: "Lorsque vous lui parlez, le Gobelin lève les yeux et sourit, puis il commence à se métamorphoser devant vous. Sa taille augmente et il prend une teinte verte ; une longue queue épineuse lui pousse dans le dos, ses bras s'épaississent et des griffes pointues apparaissent au bout de ses doigts. Son visage se déforme et prend une apparence reptilienne, avec des yeux rouges et une large bouche plantée de dizaines de dents tranchantes comme des rasoirs. Ce n'est pas un Gobelin que vous avez devant vous, mais un CHANGEUR DE FORME et il vous faut le combattre. !MONSTRE",
 choices: CHOICES[ 203 ]
}
,{ id: 204 ,
text: "Le chemin mène à travers champs jusqu'à un pont de pierre qui enjambe une rivière d'eau limpide. Au-delà du pont, vous apercevez les maisonnettes et les huttes de bois d'un village. Une pancarte indique « Pont-de-Pierre » et, lorsque vous franchissez le pont, vous voyez deux nains aux longues barbes blanches qui se tiennent debout près d'une maisonnette, le regard fixé sur vous. Avez-vous en votre possession la tête de marteau et le manche, tous deux gravés de la lettre G !EVENT",
 choices: CHOICES[ 204 ]
}
,{ id: 205 ,
text: "Chacun des Pygmées a une petite bourse de cuir attachée à son cou, et vous trouvez dans chacune d'elles 3 pièces d'Or. !EVENT",
 choices: CHOICES[ 205 ]
}
,{ id: 206 ,
text: "Soudain, vous entendez des appels au secours qui viennent de votre gauche, à l'écart du chemin.",
 choices: CHOICES[ 206 ]
}
,{ id: 207 ,
text: "Vous enjambez le corps de l'Homme-Singe et vous entrez dans sa cabane. Le sol est jonché d'os et de fruits pourris. Le lit de la créature est fait de mousses et de feuilles, et il semble grouiller d'insectes. Vous êtes parcouru d'un frisson de dégoût et vous retournez sur la plate-forme. Vous remarquez alors, autour du poignet de l'Homme-Singe, un bracelet de cuivre.",
 choices: CHOICES[ 207 ]
}
,{ id: 208 ,
text: "Vous arrivez bientôt à un croisement. Le chemin orienté au sud retourne vers la forêt, et vous décidez de ne pas le prendre.",
 choices: CHOICES[ 208 ]
}
,{ id: 209 ,
text: "Lorsque vous entrez dans la cabane, l'homme sourit. Il semble heureux de vous voir et s'adresse à vous d'une voix grave. « Bienvenu, étranger, vous ditil. Je m'appelle Quin et je gagne ma vie en me servant de mes bras. Seriezvous homme à miser quelque argent sur une partie de bras de fer ? »",
 choices: CHOICES[ 209 ]
}
,{ id: 210 ,
text: "Les deux hommes poussent des jurons et se mettent à trépigner de colère pour vous avoir manqué. Une dispute éclate alors entre eux, et ils commencent à se pousser l'un l'autre. Ils semblent vous avoir complètement oublié",
 choices: CHOICES[ 210 ]
}
,{ id: 211 ,
text: "",
 choices: CHOICES[ 211 ]
}
,{ id: 212 ,
text: "",
 choices: CHOICES[ 212 ]
}
,{ id: 213 ,
text: "",
 choices: CHOICES[ 213 ]
}
,{ id: 214 ,
text: "",
 choices: CHOICES[ 214 ]
}
,{ id: 215 ,
text: "",
 choices: CHOICES[ 215 ]
}
,{ id: 216 ,
text: "",
 choices: CHOICES[ 216 ]
}
,{ id: 217 ,
text: "",
 choices: CHOICES[ 217 ]
}
,{ id: 218 ,
text: "",
 choices: CHOICES[ 218 ]
}
,{ id: 219 ,
text: "",
 choices: CHOICES[ 219 ]
}
,{ id: 220 ,
text: "",
 choices: CHOICES[ 220 ]
}
,{ id: 221 ,
text: "",
 choices: CHOICES[ 221 ]
}
,{ id: 222 ,
text: "",
 choices: CHOICES[ 222 ]
}
,{ id: 223 ,
text: "",
 choices: CHOICES[ 223 ]
}
,{ id: 224 ,
text: "",
 choices: CHOICES[ 224 ]
}
,{ id: 225 ,
text: "",
 choices: CHOICES[ 225 ]
}
,{ id: 226 ,
text: "",
 choices: CHOICES[ 226 ]
}
,{ id: 227 ,
text: "",
 choices: CHOICES[ 227 ]
}
,{ id: 228 ,
text: "",
 choices: CHOICES[ 228 ]
}
,{ id: 229 ,
text: "",
 choices: CHOICES[ 229 ]
}
,{ id: 230 ,
text: "",
 choices: CHOICES[ 230 ]
}
,{ id: 231 ,
text: "",
 choices: CHOICES[ 231 ]
}
,{ id: 232 ,
text: "",
 choices: CHOICES[ 232 ]
}
,{ id: 233 ,
text: "",
 choices: CHOICES[ 233 ]
}
,{ id: 234 ,
text: "",
 choices: CHOICES[ 234 ]
}
,{ id: 235 ,
text: "",
 choices: CHOICES[ 235 ]
}
,{ id: 236 ,
text: "",
 choices: CHOICES[ 236 ]
}
,{ id: 237 ,
text: "",
 choices: CHOICES[ 237 ]
}
,{ id: 238 ,
text: "",
 choices: CHOICES[ 238 ]
}
,{ id: 239 ,
text: "",
 choices: CHOICES[ 239 ]
}
,{ id: 240 ,
text: "",
 choices: CHOICES[ 240 ]
}
,{ id: 241 ,
text: "",
 choices: CHOICES[ 241 ]
}
,{ id: 242 ,
text: "",
 choices: CHOICES[ 242 ]
}
,{ id: 243 ,
text: "",
 choices: CHOICES[ 243 ]
}
,{ id: 244 ,
text: "",
 choices: CHOICES[ 244 ]
}
,{ id: 245 ,
text: "",
 choices: CHOICES[ 245 ]
}
,{ id: 246 ,
text: "",
 choices: CHOICES[ 246 ]
}
,{ id: 247 ,
text: "",
 choices: CHOICES[ 247 ]
}
,{ id: 248 ,
text: "",
 choices: CHOICES[ 248 ]
}
,{ id: 249 ,
text: "",
 choices: CHOICES[ 249 ]
}
,{
    id: 250,
    text : "Le vase tombe par terre mais ne se brise pas, bien que des fêlures apparaissent à sa surface. Vous sentez alors une vibration tout autour de vous et vous remarquez que des lézardes se dessinent un peu partout dans la véranda et sur les murs de la cabane. La vibration s'intensifie, votre corps se met à trembler et vous avez l'impression que votre tête est sur le point d'exploser. Vous perdez 2 points d'ENDURANCE.",
    choices : CHOICES[250]
  }
,{ id: 251 ,
text: "",
 choices: CHOICES[ 251 ]
}
,{ id: 252 ,
text: "",
 choices: CHOICES[ 252 ]
}
,{ id: 253 ,
text: "",
 choices: CHOICES[ 253 ]
}
,{ id: 254 ,
text: "",
 choices: CHOICES[ 254 ]
}
,{ id: 255 ,
text: "",
 choices: CHOICES[ 255 ]
}
,{ id: 256 ,
text: "",
 choices: CHOICES[ 256 ]
}
,{ id: 257 ,
text: "",
 choices: CHOICES[ 257 ]
}
,{ id: 258 ,
text: "",
 choices: CHOICES[ 258 ]
}
,{ id: 259 ,
text: "",
 choices: CHOICES[ 259 ]
}
,{ id: 260 ,
text: "",
 choices: CHOICES[ 260 ]
}
,{
    id: 261,
    text : "Vous suivez le vieil homme vêtu d'une longue robe en haillons. Il souffle et halète en montant l'escalier en colimaçon qui mène à une grande pièce, au sommet de la tour. Des étagères, des armoires et des vitrines s'alignent le long des murs, toutes remplies de flacons, de bocaux, d'armes, de cuirasses et de toutes sortes d'objets à l'aspect étrange. Yaztromo traverse ce bric-à-brac en traînant les pieds et se laisse tomber sur une veille chaise en bois de chêne. Il glisse alors la main dans une poche, sur sa poitrine, et en sort une petite paire de lunettes cerclées d'or qu'il pose sur son nez. Puis il prend une ardoise et un morceau de craie sur une table et se met à écrire fébrilement. Il vous tend ensuite l'ardoise que vous lisez attentivement.",
    choices : CHOICES[261]
  }
,{ id: 262 ,
text: "",
 choices: CHOICES[ 262 ]
}
,{ id: 263 ,
text: "",
 choices: CHOICES[ 263 ]
}
,{ id: 264 ,
text: "",
 choices: CHOICES[ 264 ]
}
,{ id: 265 ,
text: "",
 choices: CHOICES[ 265 ]
}
,{ id: 266 ,
text: "",
 choices: CHOICES[ 266 ]
}
,{ id: 267 ,
text: "",
 choices: CHOICES[ 267 ]
}
,{ id: 268 ,
text: "",
 choices: CHOICES[ 268 ]
}
,{ id: 269 ,
text: "",
 choices: CHOICES[ 269 ]
}
,{ id: 270 ,
text: "",
 choices: CHOICES[ 270 ]
}
,{ id: 271 ,
text: "",
 choices: CHOICES[ 271 ]
}
,{ id: 272 ,
text: "",
 choices: CHOICES[ 272 ]
}
,{ id: 273 ,
text: "",
 choices: CHOICES[ 273 ]
}
,{ id: 274 ,
text: "",
 choices: CHOICES[ 274 ]
}
,{ id: 275 ,
text: "",
 choices: CHOICES[ 275 ]
}
,{ id: 276 ,
text: "",
 choices: CHOICES[ 276 ]
}
,{ id: 277 ,
text: "",
 choices: CHOICES[ 277 ]
}
,{ id: 278 ,
text: "",
 choices: CHOICES[ 278 ]
}
,{ id: 279 ,
text: "",
 choices: CHOICES[ 279 ]
}
,{ id: 280 ,
text: "",
 choices: CHOICES[ 280 ]
}
,{ id: 281 ,
text: "",
 choices: CHOICES[ 281 ]
}
,{ id: 282 ,
text: "",
 choices: CHOICES[ 282 ]
}
,{ id: 283 ,
text: "",
 choices: CHOICES[ 283 ]
}
,{ id: 284 ,
text: "",
 choices: CHOICES[ 284 ]
}
,{ id: 285 ,
text: "",
 choices: CHOICES[ 285 ]
}
,{ id: 286 ,
text: "",
 choices: CHOICES[ 286 ]
}
,{ id: 287 ,
text: "",
 choices: CHOICES[ 287 ]
}
,{ id: 288 ,
text: "",
 choices: CHOICES[ 288 ]
}
,{ id: 289 ,
text: "",
 choices: CHOICES[ 289 ]
}
,{ id: 290 ,
text: "",
 choices: CHOICES[ 290 ]
}
,{ id: 291 ,
text: "",
 choices: CHOICES[ 291 ]
}
,{ id: 292 ,
text: "",
 choices: CHOICES[ 292 ]
}
,{ id: 293 ,
text: "",
 choices: CHOICES[ 293 ]
}
,{ id: 294 ,
text: "",
 choices: CHOICES[ 294 ]
}
,{ id: 295 ,
text: "",
 choices: CHOICES[ 295 ]
}
,{ id: 296 ,
text: "",
 choices: CHOICES[ 296 ]
}
,{ id: 297 ,
text: "",
 choices: CHOICES[ 297 ]
}
,{ id: 298 ,
text: "",
 choices: CHOICES[ 298 ]
}
,{ id: 299 ,
text: "",
 choices: CHOICES[ 299 ]
}
,{ id: 300 ,
text: "",
 choices: CHOICES[ 300 ]
}
,{ id: 301 ,
text: "",
 choices: CHOICES[ 301 ]
}
,{ id: 302 ,
text: "",
 choices: CHOICES[ 302 ]
}
,{ id: 303 ,
text: "",
 choices: CHOICES[ 303 ]
}
,{ id: 304 ,
text: "",
 choices: CHOICES[ 304 ]
}
,{ id: 305 ,
text: "",
 choices: CHOICES[ 305 ]
}
,{ id: 306 ,
text: "",
 choices: CHOICES[ 306 ]
}
,{ id: 307 ,
text: "",
 choices: CHOICES[ 307 ]
}
,{ id: 308 ,
text: "",
 choices: CHOICES[ 308 ]
}
,{ id: 309 ,
text: "",
 choices: CHOICES[ 309 ]
}
,{ id: 310 ,
text: "",
 choices: CHOICES[ 310 ]
}
,{ id: 311 ,
text: "",
 choices: CHOICES[ 311 ]
}
,{ id: 312 ,
text: "",
 choices: CHOICES[ 312 ]
}
,{ id: 313 ,
text: "",
 choices: CHOICES[ 313 ]
}
,{ id: 314 ,
text: "",
 choices: CHOICES[ 314 ]
}
,{ id: 315 ,
text: "",
 choices: CHOICES[ 315 ]
}
,{ id: 316 ,
text: "",
 choices: CHOICES[ 316 ]
}
,{ id: 317 ,
text: "",
 choices: CHOICES[ 317 ]
}
,{ id: 318 ,
text: "",
 choices: CHOICES[ 318 ]
}
,{ id: 319 ,
text: "",
 choices: CHOICES[ 319 ]
}
,{ id: 320 ,
text: "",
 choices: CHOICES[ 320 ]
}
,{ id: 321 ,
text: "",
 choices: CHOICES[ 321 ]
}
,{ id: 322 ,
text: "",
 choices: CHOICES[ 322 ]
}
,{ id: 323 ,
text: "",
 choices: CHOICES[ 323 ]
}
,{
    id: 324,
    text : "Vous contournez la cabane et vous apercevez un grand vase bleu posé au milieu d'une petite véranda. Il n'y a personne alentour et personne à l'intérieur de la cabane lorsque vous en ouvrez la porte. Elle est d'ailleurs complètement vide : pas le moindre meuble, pas le moindre objet. Vous ressortez et vous allez examiner le vase bleu. Vous regardez à l'intérieur, mais, en dépit de la lumière du soleil, vous ne parvenez pas à voir quoi que ce soit au-delà de son col. Le vase semble empli d une inquiétante obscurité. Vous le secouez alors et vous entendez un cliquetis. Qu'allez-vous faire ? ",
    choices : CHOICES[324]
  }
,{ id: 325 ,
text: "",
 choices: CHOICES[ 325 ]
}
,{ id: 326 ,
text: "",
 choices: CHOICES[ 326 ]
}
,{ id: 327 ,
text: "",
 choices: CHOICES[ 327 ]
}
,{ id: 328 ,
text: "",
 choices: CHOICES[ 328 ]
}
,{ id: 329 ,
text: "",
 choices: CHOICES[ 329 ]
}
,{ id: 330 ,
text: "",
 choices: CHOICES[ 330 ]
}
,{ id: 331 ,
text: "",
 choices: CHOICES[ 331 ]
}
,{ id: 332 ,
text: "",
 choices: CHOICES[ 332 ]
}
,{ id: 333 ,
text: "",
 choices: CHOICES[ 333 ]
}
,{ id: 334 ,
text: "",
 choices: CHOICES[ 334 ]
}
,{ id: 335 ,
text: "",
 choices: CHOICES[ 335 ]
}
,{ id: 336 ,
text: "",
 choices: CHOICES[ 336 ]
}
,{ id: 337 ,
text: "",
 choices: CHOICES[ 337 ]
}
,{ id: 338 ,
text: "",
 choices: CHOICES[ 338 ]
}
,{ id: 339 ,
text: "",
 choices: CHOICES[ 339 ]
}
,{ id: 340 ,
text: "",
 choices: CHOICES[ 340 ]
}
,{ id: 341 ,
text: "",
 choices: CHOICES[ 341 ]
}
,{ id: 342 ,
text: "",
 choices: CHOICES[ 342 ]
}
,{ id: 343 ,
text: "",
 choices: CHOICES[ 343 ]
}
,{ id: 344 ,
text: "",
 choices: CHOICES[ 344 ]
}
,{ id: 345 ,
text: "",
 choices: CHOICES[ 345 ]
}
,{ id: 346 ,
text: "",
 choices: CHOICES[ 346 ]
}
,{ id: 347 ,
text: "",
 choices: CHOICES[ 347 ]
}
,{ id: 348 ,
text: "",
 choices: CHOICES[ 348 ]
}
,{ id: 349 ,
text: "",
 choices: CHOICES[ 349 ]
}
,{ id: 350 ,
text: "",
 choices: CHOICES[ 350 ]
}
,{ id: 351 ,
text: "",
 choices: CHOICES[ 351 ]
}
,{ id: 352 ,
text: "",
 choices: CHOICES[ 352 ]
}
,{ id: 353 ,
text: "",
 choices: CHOICES[ 353 ]
}
,{ id: 354 ,
text: "",
 choices: CHOICES[ 354 ]
}
,{ id: 355 ,
text: "",
 choices: CHOICES[ 355 ]
}
,{ id: 356 ,
text: "",
 choices: CHOICES[ 356 ]
}
,{ id: 357 ,
text: "",
 choices: CHOICES[ 357 ]
}
,{ id: 358 ,
text: "",
 choices: CHOICES[ 358 ]
}
,{ id: 359 ,
text: "",
 choices: CHOICES[ 359 ]
}
,{ id: 360 ,
text: "",
 choices: CHOICES[ 360 ]
}
,{ id: 361 ,
text: "",
 choices: CHOICES[ 361 ]
}
,{ id: 362 ,
text: "",
 choices: CHOICES[ 362 ]
}
,{ id: 363 ,
text: "",
 choices: CHOICES[ 363 ]
}
,{ id: 364 ,
text: "",
 choices: CHOICES[ 364 ]
}
,{ id: 365 ,
text: "",
 choices: CHOICES[ 365 ]
}
,{ id: 366 ,
text: "",
 choices: CHOICES[ 366 ]
}
,{ id: 367 ,
text: "",
 choices: CHOICES[ 367 ]
}
,{ id: 368 ,
text: "",
 choices: CHOICES[ 368 ]
}
,{ id: 369 ,
text: "",
 choices: CHOICES[ 369 ]
}
,{ id: 370 ,
text: "",
 choices: CHOICES[ 370 ]
}
,{ id: 371 ,
text: "",
 choices: CHOICES[ 371 ]
}
,{ id: 372 ,
text: "",
 choices: CHOICES[ 372 ]
}
,{ id: 373 ,
text: "",
 choices: CHOICES[ 373 ]
}
,{ id: 374 ,
text: "",
 choices: CHOICES[ 374 ]
}
,{ id: 375 ,
text: "",
 choices: CHOICES[ 375 ]
}
,{ id: 376 ,
text: "",
 choices: CHOICES[ 376 ]
}
,{ id: 377 ,
text: "",
 choices: CHOICES[ 377 ]
}
,{ id: 378 ,
text: "",
 choices: CHOICES[ 378 ]
}
,{ id: 379 ,
text: "",
 choices: CHOICES[ 379 ]
}
,{ id: 380 ,
text: "",
 choices: CHOICES[ 380 ]
}
,{ id: 381 ,
text: "",
 choices: CHOICES[ 381 ]
}
,{ id: 382 ,
text: "",
 choices: CHOICES[ 382 ]
}
,{ id: 383 ,
text: "",
 choices: CHOICES[ 383 ]
}
,{ id: 384 ,
text: "",
 choices: CHOICES[ 384 ]
}
,{ id: 385 ,
text: "",
 choices: CHOICES[ 385 ]
}
,{ id: 386 ,
text: "",
 choices: CHOICES[ 386 ]
}
,{ id: 387 ,
text: "",
 choices: CHOICES[ 387 ]
}
,{ id: 388 ,
text: "",
 choices: CHOICES[ 388 ]
}
,{ id: 389 ,
text: "",
 choices: CHOICES[ 389 ]
}
,{ id: 390 ,
text: "",
 choices: CHOICES[ 390 ]
}
,{ id: 391 ,
text: "",
 choices: CHOICES[ 391 ]
}
,{ id: 392 ,
text: "",
 choices: CHOICES[ 392 ]
}
,{ id: 393 ,
text: "",
 choices: CHOICES[ 393 ]
}
,{ id: 394 ,
text: "",
 choices: CHOICES[ 394 ]
}
,{ id: 395 ,
text: "",
 choices: CHOICES[ 395 ]
}
,{ id: 396 ,
text: "",
 choices: CHOICES[ 396 ]
}
,{ id: 397 ,
text: "",
 choices: CHOICES[ 397 ]
}
,{ id: 398 ,
text: "",
 choices: CHOICES[ 398 ]
}
,{
    id: 399,
    text : "Vous vous précipitez sur Yaztromo, mais vous avez à peine atteint la première marche que le sorcier lève son bras droit d'un geste nonchalant et marmonne quelques mots. Le temps paraît alors s'arrêter tandis que jaillissent tout autour de vous des éclairs aveuglants. Votre corps vous semble soudain un liquide bouillonnant et lorsque toute cette agitation s'apaise enfin, vous êtes conscient qu'il vient de se passer quelque chose de terrifiant. Vous sentez contre votre corps la pierre froide de l'escalier, et vous allez devoir à présent vous habituer à un nouveau genre de vie : le sorcier vous a en effet transformé en grenouille ! Se penchant vers vous, Yaztromo vous ramasse d'une main et vous déclare d'une voix de tonnerre : « Profite donc bien de ta nouvelle vie, piètre bretteur ! » Puis il éclate d'un rire tonitruant et vous laisse presque tomber sur le sol. Il retourne ensuite vers la porte de chêne d'un pas traînant, l'ouvre, et vous jette parmi les hautes herbes qui entourent sa demeure. Votre aventure se termine ici.",
    choices : CHOICES[399]
  }
,{ id: 400 ,
text: "",
 choices: CHOICES[ 400 ]
}
];
