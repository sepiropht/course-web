---
description: ""
title: "The DOM"
---

Jusqu'à présent, nous avons écrit du code dans un environnement relativement clos. Nous avons utilisé console.log comme mécanisme de sortie. Nous n'avons pas vraiment fait quelque chose en JavaScript qui ne pourrait pas être fait dans n'importe quel autre langage. Maintenant, nous allons commencer à utiliser JavaScript pour interagir avec votre page web. C'est une caractéristique unique de JavaScript (pour la plupart, nous n'allons pas explorer cela pour le moment).

Commençons d'abord par discuter de ce qu'est un navigateur et comment votre code passe de son écriture à son exécution dans un navigateur.

Dans un contexte typique :

Vous écrivez du code dans votre éditeur (comme VSCode).
Vous placez votre code sur un serveur pour que d'autres personnes puissent y accéder.
Quelqu'un visite votre site web
(Beaucoup de choses se passent ici. Pour l'instant, nous n'allons pas en parler.)
Leur navigateur envoie une requête à votre serveur pour obtenir votre index.html.
Votre serveur leur envoie une copie du HTML.
Le navigateur lit le HTML, voit que vous avez une balise de script my-script.js dedans.
Le navigateur fait une autre requête à votre serveur pour my-script.js.
Votre serveur leur envoie une copie de my-script.js.
Le navigateur lit le code JavaScript et commence à exécuter le code.
Le même processus se produit également avec les styles CSS.

Maintenant, comment cela fonctionne-t-il si vous avez mis votre code sur un serveur cloud comme Microsoft Azure, Amazon Web Services, ou d'autres endroits comme Bluehost ou GoDaddy ? Comment faire cela localement, sans serveur, uniquement sur nos ordinateurs ? Votre ordinateur simule essentiellement ce processus. Il agit à la fois en tant que serveur et client pour faciliter l'écriture du code. Lorsque vous ouvrez un fichier dans votre navigateur depuis votre ordinateur, votre disque dur est le serveur. C'était un point de confusion pour moi au début, donc je le partage avec vous.

Pour l'instant, notre ordinateur ne fait rien d'autre que de servir le fichier tel quel. Un vrai serveur peut faire beaucoup de choses, comme lire à partir de bases de données, appeler d'autres serveurs ou modifier les requêtes en cours. Nous ne faisons rien de tout cela. Pour l'instant, il vous renvoie simplement le fichier brut sans modification.

D'accord, maintenant que nous avons éclairci cela, commençons à créer un autre projet.

Le DOM
La manière dont JavaScript, HTML et CSS interagissent entre eux est appelée DOM, pour Document Object Model. Le DOM est essentiellement un ensemble d'objets et de méthodes que vous pouvez appeler depuis JavaScript pour interagir avec le HTML et le CSS de la page.

Note : pour ces exemples de code, je vous montrerai d'abord le HTML et le CSS (qui ne seront pas modifiables), puis je vous montrerai le JavaScript ensuite (qui sera modifiable).

Voyons un exemple.

```display-html

<div class="red-square"></div>
css
Copy code
.red-square {
  color: crimson;
  width: 100px;
  height: 100px;
}
<style>
  .red-square {
    color: crimson;
    width: 100px;
    height: 100px;
  }
</style>
<div class="red-square"></div>
```

```javascript
const redSquare = document.querySelector(".red-square");
redSquare.style.backgroundColor = "limegreen";
```

Remarquez que, malgré la classe CSS qui indique que la div devrait être de couleur crimson, elle est en réalité de couleur limegreen. C'est parce que nous avons utilisé JavaScript pour changer sa couleur. Examinons cela en détail.

Nous avons appelé une méthode sur document. document est une variable globalement disponible dans le navigateur que vous utilisez pour interagir avec le HTML et le CSS. Elle contient de nombreuses méthodes que vous pouvez utiliser. Dans ce cas, nous utilisons querySelector dans lequel vous passez un sélecteur CSS et il vous renvoie le premier élément correspondant au sélecteur qu'il trouve (si vous en avez plusieurs sur la page, vous obtenez uniquement le premier).
Ensuite, nous avons un pointeur JavaScript vers la balise div.red-square stocké dans la variable redSquare, ce qui signifie que nous pouvons commencer à la manipuler.
Nous utilisons ensuite l'objet style qui représente tous les styles CSS qui sont appliqués à cet objet à ce moment-là.
Ensuite, nous définissons la backgroundColor de cet élément. Remarquez que c'est backgroundColor et non background-color (camelCase vs kebab-case). C'est ainsi que vous interagissez avec le CSS via JavaScript. Tout ce qui est en kebab-case comme padding-right devient en camelCase, comme paddingRight. Bien que cela soit agaçant, cela facilite les choses, car tout en JavaScript est en camelCase.

Ensuite, nous attribuons simplement la valeur que nous voulons. Cela fonctionne avec n'importe quelle propriété CSS, par exemple : tag.style.marginBottom = '50px'.
Il y a beaucoup plus de choses que vous pouvez faire avec un élément que de simplement modifier son style. Vous pouvez ajouter plus de HTML à l'intérieur, le supprimer, changer le texte, rechercher différents éléments à l'intérieur, obtenir sa position sur la page, le cloner, et bien plus encore.

D'accord, et si nous avions plusieurs éléments que nous voulions modifier tous en même temps ? Nous avons également les outils pour le faire !

```display-html
<ul>
  <li class="js-target">Non modifié</li>
  <li class="js-target">Non modifié</li>
  <li>Ne changera pas</li>
  <li class="js-target">Non modifié</li>
  <li>Ne changera pas</li>
  <li class="js-target">Non modifié</li>
</ul>
<ul>
  <li class="js-target">Non modifié</li>
  <li class="js-target">Non modifié</li>
  <li>Ne changera pas</li>
  <li class="js-target">Non modifié</li>
  <li>Ne changera pas</li>
  <li class="js-target">Non modifié</li>
</ul>
```

```javascript
const elementsToChange = document.querySelectorAll(".js-target");
for (let i = 0; i < elementsToChange.length; i++) {
  const currentElement = elementsToChange[i];
  currentElement.innerText = "Modifié par JavaScript !";
}
```
