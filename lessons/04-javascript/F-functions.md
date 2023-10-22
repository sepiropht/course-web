---
description: ""
---

Une fonction est un morceau de code réutilisable. Tout comme nous aimons réutiliser des classes CSS, nous aimons réutiliser du code. Commençons par un exemple :

```javascript
function ajouterDeux(nombre) {
  return nombre + 2;
}

const réponseFinale = ajouterDeux(5);
console.log(réponseFinale);
```

Ce n'est pas super utile, mais j'espère que cela vous montre le fonctionnement d'une fonction. Nous avons créé une fonction appelée ajouterDeux. Cette fonction prend un paramètre, nombre, et renvoie ce nombre auquel 2 est ajouté. Nous pouvons maintenant utiliser cette fonction ajouterDeux autant que nous le souhaitons ! Créons quelque chose d'un peu plus utile.

```javascript
function saluer(prénom, nom, honorifique, salutation) {
  return `${salutation} ${honorifique} ${nom} ! Je suis extrêmement ravi que vous ayez pu nous rejoindre, ${prénom} ! J'espère que vous apprécierez votre séjour, ${honorifique} ${nom}.`;
}

console.log(saluer("Brian", "Holt", "Seigneur", "Salutations"));
console.log(saluer("Jack", "Sparrow", "Capitaine", "À l'abordage"));
```

Maintenant, au lieu de nous répéter sans cesse avec cette longue chaîne de caractères, nous pouvons simplement appeler saluer avec les paramètres appropriés. Ici, nous utilisons quatre paramètres. L'ordre est important dans lequel nous envoyons les paramètres, car ce sera l'ordre dans lequel la fonction recevra ces paramètres. Vous pouvez avoir autant ou aussi peu de paramètres que vous le souhaitez.

La façon d'appeler une fonction est d'ajouter des parenthèses à la fin, comme ceci : nomDeLaFonction(). Si vous voyez des parenthèses après un nom de variable, vous savez instantanément que c'est une fonction. À l'intérieur des parenthèses se trouvent les paramètres. Ces variables seront transmises à la fonction qui est appelée dans l'ordre où vous les avez placées. Ces variables d'entrée sont appelées paramètres. Exemple :

```javascript
const maVilleNatale = "Seattle";
const monÉtatNatal = "Washington";
const monPaysNatal = "USA";

function afficherVilleNatale(ville, état, pays) {
  console.log(`Vous êtes de ${ville}, ${état} ${pays}.`);
}

afficherVilleNatale(maVilleNatale, monÉtatNatal, monPaysNatal);
```

## Diverses façons d'écrire des fonctions

Il y a quelques façons d'écrire des fonctions qui sont essentiellement les mêmes (il y a des différences, mais pour l'instant ne vous en préoccupez pas.)

```javascript
function aboyer() {
  console.log("ouaf");
}

const miauler = function () {
  console.log("miaouuuuu");
};

// le => est simplement = > mis ensemble, la police les combine en un seul glyphe
const gazouiller = () => {
  console.log("gazou gazou");
};

aboyer();
miauler();
gazouiller();
```

Toutes ces options sont des fonctions et fonctionnent en tant que telles. Il y a des différences très subtiles dans leur fonctionnement, mais pour l'instant, il suffit de savoir que "ce sont des fonctions". La plupart du temps, elles fonctionnent exactement de la même manière (comme vous le voyez ici).
