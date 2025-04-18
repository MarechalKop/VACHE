const haikuData = {
  Normande: `Brume en Normandie\nRobe tachetée qui veille\nSous pommiers dormants`,
  Charolaise: `Dans l’or de l’herbe\nLe silence d’une masse\nBlanche et paisible`,
  Montbéliarde: `Franche-Comté douce\nRobe rouge, lait si fertile\nCloche au cou résonne`,
  Highland: `Poils longs, cornes fières\nBrouillard des monts écossais\nElle veille en paix`,
  Jersiaise: `Petite et dorée\nSon lait crémeux, son regard\nÎle au vent salé`,
  "Blanc bleu belge": `Muscles bleus d’acier\nForce douce et tranquille\nBelgique la forte`,
  Parthenaise: `Poitou endormi\nFauve froment dans les champs lents\nForce et élégance`,

  Salers: `Cantal au vent frais\nCornes en lyre et robe feu\nGardienne des prés`,

  Abondance: `Haute-Savoie chante\nRouge et blanc sur flanc doré\nLait d'altitude`,

  Bordelaise: `Bordeaux mystérieux\nNoir et blanc de la Gironde\nSouvenir ancien`,

  Brune: `Alpes silencieuses\nFière robe brun-gris doux\nMontagnes en veille`,

  "Froment du Léon": `Bretagne dorée\nFroment pur sous ciel de brume\nGoût des jours anciens`,

  Jersiaise: `Petite île fière\nFauve clair et doux regard\nLait d'or et de vent`,

  "Pie rouge des plaines": `Dans les verts pâtis\nRouge et blanc au vent breton\nPlaines généreuses`,

  "Prim'Holstein": `Hollande fertile\nNoir et blanc sur mer de vert\nReine des étables`,

  "Rouge flamande": `Nord sous ciel brumeux\nRouge sombre et patience\nForce dans le vent`,

  Bazadaise: `Gironde tranquille\nGris argent sous le soleil\nMassive et paisible`,

  "Blanc bleu belge": `Muscles bleus d'acier\nForce douce et tranquille\nBelgique la forte`,

  "Blonde d'Acquitaine": `Sud ensoleillé\nBlondeur dans les hautes herbes\nMajesté dorée`,

  Corse: `Montagnes sauvages\nRobe fauve, cornes légères\nLibre sur l'île`,

  Créole: `Soleil des Antilles\nFauve clair sous les palmiers\nSouffle de liberté`,

  "Gasconne des Pyrénées": `Monts des Pyrénées\nGris argenté sur rochers\nLibre et résiliente`,

  Hereford: `Rouge et blanc royal\nBrume humide d'Angleterre\nForce tranquille`,

  Highland: `Poils longs, cornes fières\nBrouillard des monts écossais\nElle veille en paix`,

  Limousine: `Rouge froment luit\nDans les prés du Limousin\nForce et tradition`,

  Mirandaise: `Gers ensoleillé\nGris clair au cœur des vallons\nRareté précieuse`,

  "Rouge des prés": `Rouge éclat vibrant\nPays de la Loire paisible\nPrés à l'infini`,

  Camargue: `Corne sombre fière\nAu cœur des marais salés\nLibre Camarguaise`,

  Armoricaine: `Brise bretonne\nRouge et blanc contre les vents\nMémoire des champs`,

  Aubrac: `Plateaux infinis\nFauve chaud sur herbe tendre\nCiel pur du matin`,

  "Aure-et-Saint-Girons": `Pyrénées calmes\nChâtain d'ombres et de bois\nÉcho des vallées`,

  Béarnaise: `Soleil sur Béarn\nFroment clair dans la montagne\nVache des anciens`,

  "Bretonne Pie Noir": `Petite et robuste\nNoir et blanc des terres bretonnes\nLait d'authenticité`,

  "Bleue du Nord": `Sous ciel de Belgique\nBleu léger dans les pâtures\nForce douce et fière`,

  Ferrandaise: `Auvergne paisible\nRouge et blanc dans les volcans\nMémoire des champs`,

  Lourdaise: `Montagnes sacrées\nFroment clair des Pyrénées\nVache oubliée`,

  Maraîchine: `Entre mer et vents\nFauve libre du Poitou\nSel dans la rosée`,

  Nantaise: `Terre de Bretagne\nFauve tendre des grands prés\nSouffle des marais`,

  Simmental: `Rouge et blanc puissant\nDe Comté à la montagne\nLait chaud au matin`,

  Tarentaise: `Monts de Savoie clairs\nBrun fauve frôle les roches\nCloche et silence`,

  "Villard-de-Lans": `Au cœur du Vercors\nFroment sage et solitaire\nGardienne des plaines`,

  Vosgienne: `Forêts des Vosges\nTâches noires dans le grand vert\nNature profonde`,

  Brava: `Camargue sauvage\nNoir profond au vent salé\nCorne vers le ciel`,

  "Marine landaise": `Fauve d’Aquitaine\nSouvenir des dunes blondes\nLibre sous les pins`,

  Betizu: `Libre des montagnes\nFauve discret, âme sauvage\nOmbre des Pyrénées`,

  "Aberdeen Angus": `Brume écossaise\nRouge ou noir sur l’herbe grasse\nForce ancestrale`,

  Abigar: `Soleil brûlant haut\nGris ou blanc, lait des plateaux\nAfrique lointaine`,

  "Adaptaur Belmont": `Sous ciel australien\nPeau tachetée qui s’adapte\nVent rouge des plaines`,

  Afrikaner: `Rouge-brun éclatant\nAfrique bat dans ses veines\nChaleur sur la peau`,

  Agerolese: `Monts de Campanie\nChâtain sombre et lait doré\nVache des collines`,

  Alambadi: `Inde au pas tranquille\nGris solide sur les routes\nTravail et patience`,

  Albère: `Noire des montagnes\nPetite ombre de Catalogne\nLibre et silencieuse`,

  Alentejana: `Rouge du soleil\nPortugal et champs arides\nForce et élégance`,

  "Alistana sanabresa": `Espagne profonde\nChâtain noble et résistant\nMémoire vivante`,

  Allmogekor: `Neige et bois du Nord\nSuède garde ses secrets\nRouge parmi blanc`,

  Amerifax: `Rouge sombre, paisible\nPlaines d’Amérique profonde\nForce sans tumulte`,

  "Amrit Mahal": `Sous ciel indien gris\nÉlancée, elle progresse\nFière dans le vent chaud`,

  "Ansbach Triesdorfer": `Champ franconien doux\nTaches rouges sur la plaine\nCalme et tradition`,

  Arouquesa: `Portugal doré\nFroment sur ses flancs robustes\nMontagnes tranquilles`,

  "Asturiana de la montaña": `Froment des hauteurs\nAsturies dans le silence\nVache de rocaille`,

  "Asturiana de los Valles": `Dans les verts vallons\nUne brune puissante veille\nAsturies paisible`,

  "Aurochs de Heck": `Souvenir sauvage\nBrun roux au pas ancestral\nEsprit du passé`,

  "Australian lowline": `Noire et discrète\nSous le ciel austral immense\nCompacte et tranquille`,

  Avilena: `Noire et puissante\nEspagne murmure bas\nForêt et mystère`,

  Ayrshire: `Rouge éclat d’Écosse\nLait blanc, robe tachetée\nVache au cœur fidèle`,

  Azawak: `Désert et courage\nFauve marche dans la poussière\nVie au rythme lent`,

  Bachaur: `Gris du Bihar clair\nPetite et douce au labeur\nSous l’arbre sacré`,

  Baladi: `Égypte brûlante\nPetite brune résiliente\nVie au pas du Nil`,

  Baoulé: `Terre ivoirienne\nMasques noirs sur robe claire\nVache du Sahel`,

  Bargur: `Brune et tachetée\nElle trace sous le soleil\nChemin d'Inde ancien`,

  Barrosã: `Fauve du Portugal\nCornes fières dans les vallées\nMontagne et respect`,

  Barzona: `Sable et vents durs\nArizona la sculpte\nRouge sans relâche`,

  Beefalo: `Croisement musclé\nÉlan sauvage contenu\nVache d’Amérique`,

  Beefmaster: `Texane de feu\nForce et lait dans une robe\nRouge d’héritage`,

  "Berrenda en colorado": `Andalousie rouge\nGrandes taches dans la chaleur\nFierté ibérique`,

  Blaarkop: `Anneaux pour regard\nRouge profond sur robe claire\nVache hollandaise`,

  "Black baldy": `Tête blanche, flanc noir\nBroute les champs australiens vastes\nCroisée d’instinct fort`,

  "Blanca Cacereña": `Blancheur d’Extremadure\nDans les champs au vent sec\nRepos de granit`,

  "Blanco Orejinegro": `Colombie lointaine\nBlanc pur, oreilles charbon\nSous palmiers dansants`,

  "Bleue de Bazougers": `Brume de Mayenne\nBleu gris aux reflets discrets\nForce douce et fière`,

  "Bleue de Lettonie": `Nord en bleu pastel\nSilence froid et robuste\nLait de l’aube calme`,

  "Blonde de Carinthie": `Carinthie dorée\nFroment doré sous le ciel\nCalme des vallons`,

  "Bœuf gris de Hongrie": `Plaines sans limites\nGris ancien de la steppe\nÉcho du passé`,

  Cabannina: `Ligurie sauvage\nBrun profond, œil vigilant\nFille de la roche`,

  Cachena: `Petite et farouche\nGalice ou Douro l’abritent\nCorne en croissant d’or`,

  Calvana: `Blancheur toscane\nElle monte les collines\nDouce et lumineuse`,

  Canadienne: `Froid du Saint-Laurent\nRoux, noir, chaleur sous la neige\nForce et tradition`,

  Canaria: `Île fauve et nue\nDans le vent chaud du volcan\nElle garde l’éclat`,

  Canchim: `Brésil blanc massif\nCroisement de force pure\nSous un ciel de feu`,

  Caracu: `Rouge tropical\nSous le ciel chaud du Brésil\nRobuste et docile`,

  Charbray: `Teint de sable clair\nTexas forge sa puissance\nSous l’étoile fière`,

  Chianina: `Blanc monumental\nToscane au souffle ancien\nFierté en silence`,

  "Cikasto govedo": `Rouge et mont lointain\nSlovénie, calme trait doux\nLait d’altitude`,

  Dexter: `Petite d’Irlande\nNoir soyeux et œil qui brille\nRiche simplicité`,

  Droughtmaster: `Rouge de chaleur vive\nMaître des terres arides\nForce d’Australie`,

  Dangi: `Dang et ses orages\nNoire éclaboussée de nuit\nFière et travailleuse`,

  Deoni: `Pie ou blanche claire\nInde berce sa lignée\nSous l’œil ancestral`,

  Dølafe: `Rouge norvégien\nDouceur dans les fjords gelés\nLa paix dans le lait`,

  Evolène: `Montagne du Valais\nRobe rouge éclat vibrant\nCornes et courage`,

  "Ennstaler bergschecken": `Crépuscule doux\nDans l’herbe des bergs autrichiens\nUn veau tacheté`,

  Eringer: `Cornes et regard noir\nDans les monts du Valais pur\nReine des combats`,

  Fémeline: `Blondeur du Jura\nMonts paisibles, lait doré\nForce et tradition`,

  Fjall: `Suède en noir et blanc\nSilence des plaines fraîches\nLait du vent du nord`,

  "Fjord de l'ouest": `Au bord des fjords bleus\nUne vache sans rivale\nLibre et sauvage`,

  Fleckvieh: `Bavière éclate\nRouge et blanc sur l’herbe verte\nGrande et généreuse`,

  Fribourgeoise: `Souvenir ancien\nÉcho d'une race perdue\nFribourg te pleure`,

  Frisonne: `Noir et blanc dansants\nFrance garde en elle l’empreinte\nD’une reine au lait`,
};

export default haikuData;
