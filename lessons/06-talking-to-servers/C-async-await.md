---
description: ""
title: "async/await"
---

Les promesses rendent le code difficile à lire. Avant elles, nous faisions tout avec des rappels (similaires à ce que nous faisons avec les écouteurs d'événements, où vous donnez simplement une fonction à exécuter ultérieurement), et c'était encore pire. Nous devions traiter ce que nous appelions "la pyramide des horreurs" ou tout simplement "l'enfer des rappels", où nous devions gérer des fonctions à l'intérieur de fonctions. Comme vous l'avez vu avec l'enchaînement des promesses, au moins c'est linéaire et pas trop difficile à suivre.

Et si ça pouvait être mieux ? C'est possible ! Avec les versions récentes de JavaScript, nous avons obtenu la possibilité de faire ce qu'on appelle les async/await. Cela nous permet de rendre le code encore plus facile à lire.

```display-html
<button id="dog-btn">Donne-moi un chien !</button>
<div id="dog-target"></div>
<button id="dog-btn3">Donne-moi un chien !</button>

<div id="dog-target3"></div>
```

```javascript
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.getElementById("dog-target3");

async function ajouterNouveauChien() {
  const promesse = await fetch(DOG_URL);
  const reponseTraitee = await promesse.json();
  const img = document.createElement("img");
  img.src = reponseTraitee.message;
  img.alt = "Mignon chien";
  doggos.appendChild(img);
}

document
  .getElementById("dog-btn3")
  .addEventListener("click", ajouterNouveauChien);
```

À quel point est-ce plus facile à lire ? Beaucoup plus facile.

D'accord, mais que se passe-t-il avec cette magie noire ?

Tout d'abord, vous ne pouvez utiliser le mot-clé magique await qu'à l'intérieur de fonctions async. Cela peut être déroutant pour certaines personnes, mais sachez simplement que await ne peut être utilisé que dans des fonctions async.

Tout ce que fait await est de dire à votre code "mettez en pause l'exécution de cette fonction jusqu'à ce que cette promesse soit résolue." Ainsi, à la ligne const promesse = await fetch(DOG_URL);, la fonction arrête son exécution jusqu'à ce que votre appel API se termine et que vous ayez une réponse. Ensuite, elle reprend là où elle s'était arrêtée. Cela rend le code très linéaire, ce qui est génial.

Une chose à noter à propos des fonctions asynchrones : elles retournent toujours des promesses elles-mêmes.

```javascript
async function getNom() {
  return "Brian";
}

console.log("une promesse", getNom());

getNom().then(function (nom) {
  console.log("le nom réel", nom);
});
```

Malgré le fait que nous n'utilisons pas await dans getNom, parce qu'elle est asynchrone, elle renvoie une promesse. Je vous montre cela car cela peut surprendre certaines personnes. C'est ainsi que fonctionnent les fonctions async et pourquoi await fonctionne : elles sont asynchrones et donc on peut parfois devoir attendre quand on les appelle.

Cela ne devrait cependant pas être une préoccupation majeure, cela ne compte que si vous vous préoccupez de ce que votre fonction async renvoie à la fin.
