---
description: ""
---

Parfois, je veux modifier le déroulement de la façon dont mon programme fonctionne, ou en d'autres termes, parfois je veux exécuter du code uniquement si une certaine condition est vraie. C'est là que les déclarations if sont très utiles. Imaginez si nous essayions ceci :

```javascript
const cielEstBleu = true;

if (cielEstBleu) {
  console.log("Le ciel est bleu !");
} else {
  console.log("Le ciel est... pas bleu ?");
}
```

Dans l'exemple ci-dessus, la condition à l'intérieur des parenthèses est évaluée et si elle est vraie, le premier bloc est exécuté et le second est ignoré. Si elle est fausse, le second bloc est exécuté et le premier est ignoré. Collez ce code dans vos expériences et jouez avec. Vous n'êtes pas obligé d'avoir un bloc else. D'accord, allons plus loin.

```javascript
// si vous voyez trois lignes, ce sont simplement trois signes = à la suite, ===. La police les combine en un seul gros caractère
if (2 + 2 === 4) {
  console.log(
    "Oh merci mon dieu, les principes fondamentaux des mathématiques sont toujours vrais."
  );
} else {
  console.log("Euh, panique ?");
}
```

Vous pouvez mettre n'importe quelle expression (un terme technique, signifie tout ce que vous pouvez coller à droite d'un signe égal, nous allons l'explorer davantage au fur et à mesure que nous avançons) à l'intérieur de l'instruction if. Dans ce cas, nous nous demandons si deux plus deux est toujours égal à quatre. Si c'est vrai (j'espère bien), alors le premier bloc sera exécuté. Sinon, ce sera le second.

Parlons un instant de ===. Si vous utilisez un seul = en JavaScript, cela signifie est assigné à. Donc, lorsque nous avons const estBrianCool = true; vous pouvez le verbaliser comme "La variable estBrianCool est assignée à true". Ainsi, nous ne pouvons pas l'utiliser à l'intérieur de l'instruction if car ce n'est pas ce que nous voulons dire. Nous essayons de poser une question, pas d'assigner quelque chose. Nous essayons de demander "est-ce que deux plus deux est égal à quatre". Voici le triple égal. Le triple égal est identique à demander "est-ce que ceci est égal à cela". Nous utilisons le triple égal au lieu du double égal car le double égal fait beaucoup de choses étranges que nous ne voulons généralement pas qu'il fasse. Il effectue ce qu'on appelle la coercition et nous en parlerons ci-dessous. Mais dans un exemple 2 == "2" mais pas 2 === "2". La chaîne "2" est double égale au nombre 2, mais la chaîne "2" n'est pas triple égale au nombre 2.

Il y a aussi !==. Cela demande "est-ce que ceci n'est pas égal à cela". Enfin, vous pouvez également poser des questions avec les nombres > >= < <= pour demander si les nombres sont inférieurs ou supérieurs également. Pour un autre exemple :

```javascript
const amisAvecVousFête = 10;

if (amisAvecVousFête === 0) {
  console.log("Cool, maintenant j'ai plein de nachos pour moi.");
} else if (amisAvecVousFête <= 4) {
  console.log("Quantité parfaite pour jouer à Mario Kart.");
} else {
  console.log("Wooooo allumez la musique de danse !");
}
```

Cela démontre également la clause else if si vous avez plus que deux conditions différentes.
