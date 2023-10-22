---
description: ""
---

Nous allons parler de la portée (scope) à plusieurs reprises, mais nous allons commencer ici. Chaque fois que vous appelez une fonction, elle a sa propre portée. Les autres éléments ne peuvent pas y jeter un coup d'œil ; elle a simplement son propre espace de travail pour travailler. Une fois qu'elle a terminé, toute variable que vous n'avez pas explicitement conservée ou renvoyée à la fin est jetée. Par exemple :

```javascript
function ajouterCinq(nombre) {
  const uneVariable = "vous ne pouvez pas me voir en dehors de cette fonction";
  return nombre + 5;
}
ajouterCinq(10);
console.log(uneVariable);
```

Cela ne fonctionnera pas. uneVariable est à l'intérieur de la portée de la fonction ajouterCinq, et une fois que ajouterCinq est terminée, elle élimine uneVariable, car elle est désormais hors de portée.

```javascript
let amisAVotreFete = 0;
for (let i = 0; i <= 10; i++) {
  amisAVotreFete++;
}
console.log(i);
```

Même cela ne fonctionne pas, car i n'est en portée que pour la boucle, puis après cela, il est jeté. Cela peut être difficile à gérer pour quelqu'un qui débute en programmation, car vous essayerez de consigner quelque chose ou d'utiliser une variable, et elle n'est pas en portée, donc elle n'est pas là. Sachez simplement que si cela se produit, c'est probablement le problème.

La portée est complexe. Et la portée est particulièrement étrange en JavaScript (elle varie d'un langage de programmation à l'autre). Si cela vous semble difficile, c'est parce que c'est le cas. Une façon générale et imparfaite de la comprendre pour l'instant est qu'une variable est "active" (en portée) entre le { le plus proche et le { qui ferme correspondant. Quelques exemples ci-dessous, voyez si vous pouvez comprendre. Gardez à l'esprit que la variable restera en portée tant que toute portée dans laquelle elle existe existera toujours. Si je déclare une variable dans une portée extérieure et que je modifie une variable dans une portée intérieure, cette variable survivra aussi longtemps que la portée extérieure.

```display-javascript

const A = "A";
let F;

function faireQuelqueChose(B) {
  console.log(B);
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "autre chose";
  }
  console.log(D);
  console.log(H);
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A);
  const G = "G";
}
console.log(E);
console.log(G);

faireQuelqueChose("B");
console.log(B);
console.log(C);
console.log(F);
```

Cet exemple est assez compliqué, mais voyez ce que vous en pensez. Une fois que vous êtes prêt, le bloc suivant contiendra les réponses.

```display-javascript
const A = "A";
let F;

function faireQuelqueChose(B) {
  console.log(B); // fonctionne, le paramètre B est toujours en portée
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "autre chose";
  }
  console.log(D); // ne fonctionne pas, D a été déclaré dans ce bloc d'instructions if
  console.log(H); // fonctionne, H a été déclaré en dehors de l'instruction if
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A); // fonctionne, la portée extérieure (appelée portée globale) est toujours en portée
  const G = "G";
}
console.log(E); // fonctionne, E a été déclaré en dehors de la boucle while
console.log(G); // ne fonctionne pas, déclaré à l'intérieur de la boucle while et elle est terminée

faireQuelqueChose("B");
console.log(B); // ne fonctionne pas, le paramètre B expire après l'appel de la fonction
console.log(C); // ne fonctionne pas, C a été déclaré à l'intérieur de la fonction et la fonction est terminée
console.log(F); // fonctionne, F a été déclaré dans la portée globale
```
