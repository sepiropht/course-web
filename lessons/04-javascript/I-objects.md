---
description: ""
---

Jusqu'à présent, nous avons parlé d'avoir une seule variable à la fois : un prénom, un nom de famille, un prix, etc. Mais que faire si nous avons une collection de données ? Il serait bien de regrouper des données similaires. Bonne nouvelle, vous pouvez le faire !

```javascript
const personne = {
  nom: "Brian Holt",
  ville: "Seattle",
  état: "Washington",
  platPréféré: "🌮",
  veutDesTacosMaintenant: true,
  nombreDeTacosVoulus: 100,
};
console.log(personne);
console.log(personne.nom);
console.log(personne["nom"]); // identique à la ligne ci-dessus ; préférable d'utiliser l'autre façon
```

Ceci s'appelle un objet. Ils sont extrêmement utiles en JavaScript ; c'est ainsi que vous regrouperiez des informations similaires pour qu'elles puissent être utilisées ensemble. Ils contiennent un ensemble de clés et de valeurs. Les clés sont situées à gauche du : et représentent comment vous obtenez ces données à partir de l'objet. nom est une telle clé, et la façon dont j'obtiens le nom de la personne.

Utilisés en conjonction avec des fonctions, ils sont très puissants. Prenons cet exemple :

```javascript
const personne1 = {
  nom: "Angie",
  trancheD'Âge: "25-35",
};
const personne2 = {
  nom: "Francesca",
  trancheD'Âge: "65-75",
};

function suggérerMusique(personne) {
  if (personne.trancheD'Âge === "25-35") {
    console.log("Nous pensons que vous aimerez Daft Punk.");
  } else if (personne.trancheD'Âge === "65-75") {
    console.log("Vous allez évidemment aimer Johnny Cash.");
  } else {
    console.log(
      "Euh, peut-être essayer David Bowie ? Tout le monde aime David Bowie, non ?"
    );
  }
}

suggérerMusique(personne1);
suggérerMusique(personne2);
```

Maintenant, nous pouvons transmettre toutes ces informations sous forme de paquet, ce qui facilite le suivi puisque nous passons simplement une seule variable. Vous verrez que cela deviendra encore plus utile lorsque nous commencerons à intégrer des serveurs et des API.

Les objets peuvent même avoir leurs propres fonctions ! Voyons cela.

```javascript
const chien = {
  nom: "chien",
  parler() {
    console.log("ouaf ouaf");
  },
};

chien.parler();
```

Les objets peuvent également contenir des objets imbriqués à l'intérieur d'eux.

```javascript
const moi = {
  nom: {
    prénom: "Brian",
    nom: "Holt",
  },
  emplacement: {
    ville: "Seattle",
    état: "Washington",
    pays: "États-Unis",
  },
};

console.log(moi.nom.prénom);
console.log(moi.emplacement.état);
```
