---
description: ""
title: "Numbers, Strings, and Booleans"
---

commençons à travailler avec des mots et des caractères. En programmation, nous appelons ces choses des chaînes de caractères, comme une chaîne de caractères d'une seule lettre. Un exemple serait :

```javascript
const monNom = "William Mbotta";
console.log(monNom);
```

Vous pouvez voir que j'utilise les guillemets doubles " pour encadrer tout ce que je veux dans la chaîne de caractères. En JavaScript, vous pouvez également utiliser les guillemets simples ' et les backticks ` pour délimiter les chaînes de caractères.

Les chaînes de caractères, comme vous pouvez l'imaginer, sont partout en programmation. Nous suivons constamment des noms, des adresses, des noms de produits, des villes, etc. et avons donc constamment besoin de chaînes de caractères.

Allons plus loin. Les chaînes de caractères vous permettent de les concaténer ensemble. Si je veux pouvoir saluer quelqu'un en fonction de son nom, j'aurais quelque chose comme ceci :

```javascript
const prenom = "William";
const nom = "Mbotta";

const phrase = "Bonjour " + prenom + " " + nom + "! Comment ça va ?";
const phraseAvecGabarit = `Bonjour ${prenom} ${nom} ! Comment ça va ?`;

console.log(phrase);
console.log(phraseAvecGabarit);
```

La première méthode est l'ancienne méthode. Nous pouvons utiliser le + pour dire à JavaScript de concaténer deux chaînes de caractères. Remarquez comment nous avons inséré l'espace entre prenom et nom. L'ordinateur fait exactement ce que vous lui dites de faire. Si vous n'insérez pas cet espace, il ne sera pas ajouté.

La deuxième ligne est la nouvelle façon de faire cela. JavaScript a eu une grande mise à jour en 2015 et cela a facilité les choses. Maintenant, vous pouvez utiliser le backtick (remarquez que la première utilise des guillemets doubles, vous devez utiliser des backticks pour les gabarits de chaînes) pour créer des gabarits de chaînes. Si vous faites cela, tout ce qui se trouve à l'intérieur de ${votreVariableIci} est inclus dans la chaîne. Sympa, n'est-ce pas ?

## Booléens

Parfois, vous avez juste besoin d'un simple vrai ou faux. C'est là que les booléens sont utiles. Quelque chose comme l'état d'un interrupteur lumineux est mieux représenté par un booléen. Une lumière est soit allumée (vrai), soit éteinte (faux). Vous auriez quelque chose comme const lumiereAllumee = true;. Utile, et vous les verrez partout.

## Nombre

Certains langages séparent les entiers (nombres entiers, comme 1, 2, 3, 4, 500, 1000) et les nombres décimaux (1,2, 3,14159, 14,01, etc.) différemment, mais pas JavaScript. JavaScript n'a qu'un seul type de nombre, le Number. Un nombre est un nombre.
