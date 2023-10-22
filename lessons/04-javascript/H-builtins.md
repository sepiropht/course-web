---
description: ""
---

## Fonctions intégrées

Beaucoup de fonctions existent déjà pour vous ! Des personnes intelligentes ont créé ces fonctions couramment utilisées pour des choses que nous avons souvent besoin. Par exemple, si vous avez une chaîne de caractères et que vous voulez tout mettre en minuscules, vous pouvez faire ceci :

```javascript
const phrase = "CeTte PhRaSe A UnE CaSse ÉtrAnGe";
const phraseEnMinuscules = phrase.toLowerCase();
console.log(phraseEnMinuscules);
```

Recherchez toujours les parenthèses. Et le meilleur endroit pour chercher toutes ces informations est chez nos amis de Mozilla (les créateurs de Firefox) : [le MDN][mdn]. MDN signifiait auparavant "Mozilla Developer Network", je pense, mais maintenant c'est simplement synonyme de la documentation pour le web. Je consulte littéralement ce site plusieurs fois par jour. Comme je l'ai dit précédemment, vous n'êtes pas censé tout mémoriser. Consulter les informations sur le MDN n'est pas de la triche.

Il y a tellement de fonctions intégrées que nous ne pourrions jamais toutes les couvrir. Voici quelques exemples. Le reste, vous l'apprendrez au fur et à mesure.

```javascript
// vous voulez arrondir un nombre ? utilisez Math !
const nombre = 5.3;
const nombreArrondi = Math.round(nombre);
console.log(nombreArrondi);
```

```javascript
// vous voulez savoir si une chaîne de caractères contient une autre chaîne ?
const chaineTestUn =
  "Le renard brun rapide saute par-dessus le chien paresseux";
const chaineTestDeux =
  "Miroir, mon beau miroir, ne le dis pas car je sais que je suis mignon";
const chaineATrouver = "mignon";

console.log(chaineTestUn.includes(chaineATrouver));
console.log(chaineTestDeux.includes(chaineATrouver));
```

```javascript
// vous voulez savoir combien de millisecondes se sont écoulées depuis le 1er janvier 1970 ?
console.log(Date.now());
```

J'espère que cela vous aide à mieux comprendre les fonctions intégrées et comment les utiliser. N'hésitez pas si vous avez d'autres questions ou si vous avez besoin de plus de traductions !

[mdn]: https://developer.mozilla.org/en-US/
