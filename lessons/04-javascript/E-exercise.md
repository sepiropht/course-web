---
description: ""
---

Dans votre fichier experiments.js,

Écrivez du code qui déclare deux variables, character (caractère) et timesToRepeat (nombreDeRépétitions).
À l'aide d'une boucle, répétez ce caractère autant de fois et affichez-le ensuite dans la console.
Exemple : si j'avais character = 'f' et timesToRepeat = 5, cela afficherait 'fffff'.
Essayez différentes combinaisons pour vous assurer que vous avez compris, par exemple 'a' et 10, 'c' et 100, '🐶' et 3.

## Pourquoi ?

C'est juste un exercice pour vous permettre de fléchir un peu vos muscles nouvellement acquis. Ce code en lui-même ne serait pas super utile, mais il sera utile pour vous d'essayer de prendre une idée en mots et de la traduire en code fonctionnel.

Faites défiler vers le bas pour voir ma réponse.

<div style="width: 10px; height: 1000px"></div>
```javascript

const timesToRepeat = 100;
const character = "🐩";

let mot = ""; // commencer avec une chaîne vide
for (let i = 0; i < timesToRepeat; i++) {
mot = mot + character;
}

console.log(mot);

```

```
