//carrousel

document.body.onload=function(){ // au chargement de la page on appelle une fonction anonyme
    nbr=8; // initialisation de variable ici pour 8 images
 
    p=0; // initialisation de la variable p pour la position à 0 par défaut puis décaler à droite ou à gauche pour simuler l'effet du carroussel
    container=document.getElementById("container");     //récupération des différents objets javascript
    g=document.getElementById("g");
    d=document.getElementById("d");
    container.style.width=(250*nbr)+"px";   // on modifie la largeur du container largeur de base de 250 px * par le  nombre d'images
    
    for(i=1;i<=nbr;i++){  //traitement itératif qui va créer les 5 images
        div=document.createElement("div"); //création de divs
        div.className="photo"; // application d'une classe à ces divs
        div.style.backgroundImage="url('img/im"+i+".jpg')"; //spécification des images qui sont intégrés dans des divs préalablement créés dynamiquement
        container.appendChild(div);   // ajout des divs au container principal
    }
    afficherMasquer();
}
g.onclick=function(){ // click bouton gauche pourr déplacer le carroussel vers la gauche, application d'une position négative
    if(p>-nbr+1) // condition pour limiter le déplacement du carroussel
    p--; // je décremente p de 1 pour déplacement vers la gauche
    container.style.transform="translate("+p*190+"px)"; // déplacement d'un élément sur le plan de la taille de l'image
    container.style.transition="all 0.5s ease";
    afficherMasquer();
}
d.onclick=function(){  // click bouton droit pour déplacer le carroussel vers la droite, application d'une position positive
    if(p<0) // condition pour limiter le déplacement du carroussel
    p++; // j'incrémente de 1 poru déplacement vers la droite
    container.style.transform="translate("+p*190+"px)";
    container.style.transition="all 0.5s ease";
    afficherMasquer();
}
function afficherMasquer(){
    if (p==-nbr+1) //si p=-4 on masque le bouton gauche
        g.style.visibility="hidden";
    else
        g.style.visibility="visible"; // sinon on l'affiche
    if (p==0) 
        d.style.visibility="hidden"; // si p==0 on mesque le bouton droit
    else
        d.style.visibility="visible"; // sinon on l'affiche
}

// pop up

// partie div card
let card = document.querySelectorAll(".card"); // on sélectionne les éléments des div de class card
let bouton = document.querySelectorAll(".card button"); // ainsi que leurs boutons
let ancre =[]; // on créé une variable vide d'un tableau

for (let index = 0; index < card.length; index++) {  // afin d'appliquer à chaque bouton on fait une boucle
  bouton[index].setAttribute("class","popupvoyage") ; // on attribue la class popupvoyage à chaque bouton  
 bouton[index].setAttribute("id",index); // on attribue aussi une id qui est l'index
     ancre[index] = document.createElement("a"); // on créé une ancre
     ancre[index].setAttribute("href","#up"); // auquel on attribue un href =# up, lien d'ancrage qui permettra de se diriger vers l'élément portant le id=up

     card[index].append(ancre[index]); // on ajoute chaque ancre à chaque div card correspondant 
    ancre[index].append(bouton[index]); // puis on ajoute le bouton à l'ancre
}


const btnpop = document.getElementsByClassName('popupvoyage');


// partie div modale up
let creationDiv = document.createElement("div"); // on créé une div
creationDiv.setAttribute("class","overlay"); // on lui attribue une classe + qui s'appelle overlay
let h2Div = document.createElement("h2"); // on créé un H2
let imageDiv = document.createElement("img"); // on crée une balise image
let paragrapheDiv = document.createElement("p"); // on créé une balise paragraphe p
let ancreDiv = document.createElement("a"); // on créé une ancre

creationDiv.append(h2Div,imageDiv,paragrapheDiv,ancreDiv); // on ajoute les éléments créés dans la div créé
  document.body.append(creationDiv); // et on rajoute cette div créé dans le body


//partie stockage des données

// fonction constructrice qui permet de faire un objet
  function Voyage(destination, description) {
    this.destination = destination,
    this.description = description
  };

// 8 instances de l'objet
  let voyage1 = new Voyage("JDubai","Dubaï est une destination qui mêle la culture moderne à l'histoire, l'aventure, le divertissement et le shopping de première classe. Venez assister à une représentation à l'opéra de Dubaï, observez le cœur de la ville du haut de la tour Burj Khalifa et passez un après-midi au bord de la rivière de Dubaï à explorer les souks d'or, de tissus et d'épices. Si vous êtes à la recherche de sensations fortes, élevez-vous en montgolfière au-dessus des dunes, faites un tour à toute allure à l'IMG Worlds of Adventure ou sautez en parachute sur l'île de Palm Jumeirah.")
  let voyage2 = new Voyage("Bali","Avec ses décors de carte postale, Bali est un véritable paradis en Indonésie. Prenez le soleil sur un tapis de sable blanc et découvrez la faune tropicale en explorant les récifs coralliens de l'île ou l'épave colorée d'un navire de guerre datant de la Seconde Guerre mondiale. Enfoncez-vous dans les terres et découvrez une jungle luxuriante dans laquelle sont camouflés d'antiques temples de pierre habités par des singes facétieux. La « capitale artistique » de Ubud est le lieu idéal pour assister à une performance de danse traditionnelle, acheter un batik, visiter l'atelier d'un argentier, ou vivifier votre corps et votre esprit avec un cours de yoga.");
  let voyage3 = new Voyage("Londres","Du style audacieux de Shoreditch à la punk attitude de Camden en passant par l'élégance de Portobello Road, Londres rassemble de nombreux univers. Dans cette ville énergique, les jours se suivent sans se ressembler. Explorez les sites historiques ou royaux et des monuments qui vous font rêver, testez des restaurants étoilés, buvez une pinte dans un pub traditionnel ou perdez-vous dans le méandre des rues pavées pour vous laisser surprendre. À Londres, les possibilités sont infinies.");
  let voyage4 = new Voyage("Rome","Rome ne s'est pas faite en un jour, mais Rome ne se visite pas en un jour non plus. On se croirait dans un gigantesque musée en plein air : vous vous retrouvez au milieu d'un authentique assemblage de « piazzas », de marchés en plein air et de sites historiques fascinants. Jetez une pièce dans la fontaine de Trevi, pâmez-vous d'admiration au Colisée et au Panthéon, puis prenez un cappuccino pour refaire le plein d'énergie au cours d'un après-midi shopping au Campo de'Fiori ou dans la Via Veneto. Enfin, pour conclure votre journée en beauté, offrez-vous un repas inoubliable et en commandez un bon plat de pâtes fraîches, de délicieux artichauts frits ou encore un tendre ragoût de queue de bœuf.");
  let voyage5 = new Voyage("Paris","Déguster un pain au chocolat à la terrasse d'un café, se délasser après une journée de balade sur les quais de la Seine, s'émerveiller devant des lieux symboliques comme la Tour Eiffel ou l'Arc de triomphe… Un séjour à Paris réussi conjugue activités et détente, tout en prenant le temps de savourer un bon repas tout comme les célèbres expositions du Louvre. Commencez par prendre des forces à Notre-Dame, puis partez à la chasse aux bonnes affaires au marché aux puces de Montreuil ou goûtez aux spécialités vendues au marché biologique de Raspail et pour terminer votre journée en beauté, couronnez le tout par un spectacle osé au Moulin Rouge.");
  let voyage6 = new Voyage("Cancun","C'est certain, Cancún est avant tout un refuge pour les étudiants cherchant à passer des vacances alcoolisées. Cependant, l'endroit regorge d'excellents complexes familiaux accueillant les touristes à la recherche d'un endroit calme pour découvrir le climat tropical du Yucatan. La région recèle aussi des ruines mayas, comme El Rey et le Yamil Lu'um, tour en pierre grise en train de s'effondrer. Le Musée maya de Cancún vous permettra d'en savoir plus sur cette ancienne civilisation. Et pour un vrai goût de Mexique, visitez le Museo Sensorial del Tequila.");
  let voyage7 = new Voyage("Crète","L'île de Crète est un petit joyau grec flottant sur une mer turquoise. Les plages sont de divines étendues de sable mœlleux et de galets polis. Sans oublier son importance historique et mythologique : la Crète serait le lieu de naissance de Zeus, le roi des Dieux, et elle a été le berceau de la première civilisation moderne d'Europe. Les sites historiques et archéologiques foisonnent et, entre deux baignades ensoleillées, permettent de faire des pauses tout simplement grandioses.");
  let voyage8 = new Voyage("Marrakech","Marrakech, la ville rouge, est un endroit plein de magie, avec ses innombrables marchés, jardins, palais et mosquées. Consacrez une journée entière pour découvrir la Médina et ses cours secrètes et arpenter ses ruelles sinueuses. Puis allez vous ressourcer dans le calme et la sérénité régnant au Jardin Majorelle ou bien admirez toute la splendeur de l'une des vieilles mosquées de la ville (remarquez toutefois que vous ne serez pas autorisé à y rentrer si vous n'êtes pas de religion musulmane).");


//    let maCollection = {...{voyage1}, ...{voyage2}, ...{voyage3},...{voyage4}, ...{voyage5}, ...{voyage6}, ...{voyage7}, ...{voyage8}};

//   for (const key in maCollection)
// {
//     console.log(maCollection[key].destination); //syntaxe obligatoire lorsque la clé est dynamique
// };

// tableau contenant les 8 instances de l'objet
let maCollection = [voyage1, voyage2, voyage3, voyage4, voyage5, voyage6, voyage7, voyage8];


// div modale remplissage etc

  for (let index = 0; index < btnpop.length; index++) { // création d'une boucle
    btnpop[index].addEventListener('click', e => { // on utilise un écouteur d'évènement qui au click déclenche la fonction callback
    let key = e.target.id; // récupère l'ID que l'on stocke dans key
 //   console.log(key);
     imageDiv.setAttribute("src", `img/img${index+1}.jpg`); // on attribue la source de l'image correspondante grace à l'index+1
     paragrapheDiv.innerHTML = maCollection[key].description; // on accède aux variables du tableau qui stocke les isntances d'objet, ici la description
     h2Div.innerHTML = maCollection[key].destination; // on accède aux variables du tableau qui stocke les isntances d'objet, ici la destination
    
    creationDiv.setAttribute("id", "up"); // on attribue l'id up qui permet à l'ancre de la div card de se diriger vers la div up
   ancreDiv.setAttribute("href","#"); //erreur
   ancreDiv.innerHTML = "&times;"; // permet de faire une croix sur la modale pour fermer la modale
    });
  }

  