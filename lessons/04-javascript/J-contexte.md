---
description: ""
---

Il serait effectivement agréable si nous pouvions utiliser une fonction pour afficher proprement une adresse de livraison correctement formatée, à partir d'un objet contenant l'adresse d'une personne.

```javascript
const moi = {
  nom: {
    prénom: "Brian",
    nom: "Holt",
  },
  emplacement: {
    numéroDeRue: 500,
    rue: "Fakestreet",
    ville: "Seattle",
    état: "Washington",
    codePostal: 55555,
    pays: "États-Unis",
  },
  obtenirAdresse() {
    return `${this.nom.prénom} ${this.nom.nom}
${this.emplacement.numéroDeRue} ${this.emplacement.rue}
${this.emplacement.ville}, ${this.emplacement.état} ${this.emplacement.codePostal}
${this.emplacement.pays}`;
  },
};

console.log(moi.obtenirAdresse());
```

C'est la première fois que nous voyons le mot-clé étrange this. C'est un concept étrange, complexe et difficile en JavaScript, connu sous le nom de contexte, qui pose problème à toutes sortes de personnes, qu'elles soient nouvelles ou expérimentées dans le langage. Si vous décidez de poursuivre une carrière de développeur, les intervieweurs poseront souvent des questions sur le contexte en JavaScript. Il vaut la peine de comprendre comment cela fonctionne éventuellement (mais pas maintenant, concentrez-vous sur les bases de JS pour le moment).

Dans sa forme la plus simple, partout où vous vous trouvez en JavaScript, vous avez un contexte. Vous pouvez faire référence à ce contexte en utilisant this. Si je fais simplement référence à this depuis la couche extérieure, ce sera l'objet global, qui dans le navigateur s'appelle window. window a déjà beaucoup de choses dessus. Par exemple :

```javascript
console.log(this === window);
console.log(this.scrollY);
console.log(window.scrollY);
```

Comme vous pouvez le voir à partir de la première ligne, dans ce contexte, window est le this à ce moment-là. Cependant, dans l'exemple ci-dessus lorsque nous traitons l'adresse, le this est l'objet puisque lorsque j'appelle la fonction, elle est créée à l'intérieur d'un objet. Cet objet devient alors this lorsque obtenirAdresse est appelée. Dès que la fonction est terminée, le contexte est détruit et le contexte redevient ce qu'il était auparavant, dans ce cas window.

Une bonne règle de base (qui malheureusement n'est pas toujours vraie) est que si vous êtes à l'intérieur d'un objet quelconque, le this sera cet objet. Sinon, ce sera l'objet global, window. Il y a des exceptions folles à cela et vous pouvez même le manipuler vous-même. Pour l'instant, opérez avec cette définition. C'est un terrier de lapin profond et sombre à explorer, donc continuons et vous pouvez suivre [le cours de Kyle Simpson][kyle] plus tard où il approfondit ce sujet.

[kyle]: https://frontendmasters.com/courses/getting-started-javascript-v2/
