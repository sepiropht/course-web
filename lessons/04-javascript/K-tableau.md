---
description: ""
---

Les objets sont des collections de données non ordonnées utilisant des clés et des valeurs. En revanche, les tableaux (arrays) sont des collections de données ordonnées. Si vous placez quelque chose dans un tableau, cela a un ordre. Par exemple, vous pourriez avoir une liste des jours de la semaine.

```javascript
const joursDeLaSemaine = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];
console.log(joursDeLaSemaine);
console.log(joursDeLaSemaine[0]);
console.log(joursDeLaSemaine[1]);
console.log(joursDeLaSemaine[6]);
```

Vous pouvez voir comment nous déclarons un tableau en utilisant [ ]. À l'intérieur d'un tableau, vous pouvez stocker tout ce que vous pouvez stocker dans une variable. Vous pouvez avoir un tableau de nombres, un tableau de chaînes de caractères, un tableau d'objets, un tableau de tableaux, un tableau de tableaux de tableaux, etc.

Vous pouvez également voir ci-dessus comment nous accédons aux éléments individuels d'un tableau : nous utilisons à nouveau des crochets, puis nous faisons référence au numéro que nous voulons accéder. Encore une fois, souvenez-vous, la numérotation commence à 0. Ainsi, le premier élément est l'indice 0.

Les tableaux ont également de nombreuses méthodes (un autre mot pour désigner les fonctions qui résident dans un objet) et des propriétés (un autre mot pour désigner les paires clé/valeur) qui leur appartiennent. Voyons-en quelques-unes :

```javascript
const nombresPremiers = [1, 2, 3, 5, 7, 11, 13, 17];
console.log(nombresPremiers.length);
console.log(nombresPremiers.join(" | "));
nombresPremiers.length renvoie un nombre qui correspond à la longueur du tableau. Dans ce cas, il y a huit éléments dans le tableau, il nous renvoie donc 8. nombresPremiers.join(" | ")) prend tout votre tableau et en fait une seule chaîne de caractères. Le paramètre " | " que je passe est ce que je veux mettre entre chaque élément, de sorte que vous obtenez la chaîne "1 | 2 | 3 | 5 | 7 | 11 | 13 | 17".
```

Donc, que faire si je veux ajouter un élément au tableau après sa création ? Utilisez push !

```javascript
const cours = [
  {
    enseignant: "Will Sentance",
    matière: "JavaScript : Les Parties Difficiles",
  },
  { enseignant: "Sarah Drasner", matière: "Introduction à Vue" },
  { enseignant: "Brian Holt", matière: "Introduction Complète à React" },
  {
    enseignant: "Steve Kinney",
    matière: "Construisez Votre Propre Langage de Programmation",
  },
  { enseignant: "Scott Moss", matière: "Introduction à Node.js" },
];

cours.push({ enseignant: "Jen Kramer", matière: "Démarrer avec CSS" });

console.log(cours);

cours[2] = {
  enseignant: "Brian Holt",
  matière: "Introduction Complète aux Bases de Données",
};

console.log(cours);
```

La première chose que nous faisons est d'ajouter un élément à la fin en utilisant la fonction push que les tableaux possèdent. Elle "pousse" l'élément à la fin.

En dessous de cela, nous remplaçons l'index 2 par un nouveau cours. Cela supprimera ce qui était là avant et le remplacera par ce que nous avons défini.

Maintenant, étant donné cela, que faire si nous voulions console.log tout dans le tableau ? Vous avez déjà tous les outils pour le faire ? Voyons comment faire.

```javascript
const villes = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong",
];

// méthode 1
for (let i = 0; i < villes.length; i++) {
  console.log(villes[i]);
}

// méthode 2
villes.forEach(function (ville) {
  console.log(ville);
});
```

La première façon, en utilisant une boucle for, nous utilisons cette variable de contrôle i qui est incrémentée à chaque boucle. Nous utilisons cette i pour accéder à chaque élément du tableau à chaque itération de la boucle. Nous arrêtons la boucle lorsque i devient égal à la longueur de villes. Motif très utile. Vous le verrez souvent.

La deuxième façon utilise une fonction que les tableaux ont appelée forEach. Cette méthode forEach prend une fonction en argument et cette fonction sera appelée une fois pour chaque élément du tableau. Elle passera cet élément dans la fonction, ce que ville représente dans cette situation. Les deux méthodes sont utiles à connaître. Vous les utiliserez toutes les deux fréquemment. Pendant que vous débutez, utilisez celle avec laquelle vous vous sentez à l'aise. Elles ont des caractéristiques différentes qui les rendent préférables dans différentes situations, mais généralement vous pouvez utiliser l'une ou l'autre. La méthode 2 peut être un peu plus avancée, mais je ne pense pas que vous devriez en avoir peur. Pour l'instant, préférez la méthode 1. Je voulais simplement que vous voyiez la méthode 2.
