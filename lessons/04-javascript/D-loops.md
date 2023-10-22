---
description: ""
---

D'accord, maintenant, que faire si je veux effectuer une action plusieurs fois ? Je pourrais faire quelque chose comme ceci :

```javascript
let amisAvecVousFête = 0;
amisAvecVousFête = amisAvecVousFête + 1;
amisAvecVousFête = amisAvecVousFête + 1;
amisAvecVousFête = amisAvecVousFête + 1;
amisAvecVousFête = amisAvecVousFête + 1;
amisAvecVousFête = amisAvecVousFête + 1;
amisAvecVousFête = amisAvecVousFête + 1;
amisAvecVousFête = amisAvecVousFête + 1;
amisAvecVousFête = amisAvecVousFête + 1;
amisAvecVousFête = amisAvecVousFête + 1;
amisAvecVousFête = amisAvecVousFête + 1;
console.log(amisAvecVousFête);
```

C'est ennuyeux cependant. J'aimerais qu'il y ait une meilleure façon. Avant d'explorer cela, discutons un peu plus de cet exemple.

Nous avons utilisé let au lieu de const. Les éléments qui sont const ne peuvent pas être réaffectés par la suite. En général, je trouve que cela est d'une aide mineure, mais d'autres ne le pensent pas, alors je vous laisse juger par vous-même. En général, on devrait essayer de suivre le "principe de moindre puissance". Vous devriez toujours choisir le "truc" le moins puissant pour accomplir ce que vous essayez de faire. Les choses moins puissantes sont généralement plus simples et les choses simples sont moins sujettes aux erreurs. Pourquoi ne pas couper vos cheveux avec des cisailles de jardin ? Vous pourriez le faire, cela fonctionnerait, mais c'est beaucoup plus facile de se tromper et les conséquences sont pires. Même idée générale ici. Le bon outil pour le bon travail.

Nous utilisons let ici parce que vous pouvez voir sur les lignes suivantes que nous réaffectons amisAvecVousFête pour qu'il soit un nombre différent. Si vous utilisiez const, votre code planterait parce que const ne vous permettrait pas de le faire. Ainsi, nous utilisons let ici. Il y en a un autre appelé var qui est l'ancienne façon de faire en JavaScript. Il y a des différences, mais je ne vois plus de raison d'utiliser var. Son comportement est plus similaire à let.

D'accord, donc, nous voulons faire mieux, explorons quelques façons de le faire en utilisant des boucles.

```javascript
let amisAvecVousFête = 0;
while (amisAvecVousFête < 10) {
  amisAvecVousFête = amisAvecVousFête + 1;
}
console.log(amisAvecVousFête);
```

Ceci est une boucle while. La première partie fonctionne de manière similaire à une instruction if : tant que ce qui se trouve à l'intérieur de cette instruction est vrai, elle continuera à exécuter et à réexécuter le corps (ce qui se trouve entre { }) jusqu'à ce que cette instruction soit fausse. Une fois que cette instruction est fausse, elle interrompt la boucle et continue. Dans ce cas, nous ajoutons 1 à amisAvecVousFête jusqu'à ce qu'il atteigne 10, et ensuite la boucle suivante, lorsqu'il est à 10, s'arrêtera parce que 10 n'est pas inférieur à 10.

De plus, permettez-moi de vous montrer quelques raccourcis pour ajouter un à un élément

```javascript
let amisAvecVousFête = 0;
amisAvecVousFête = amisAvecVousFête + 1;
amisAvecVousFête += 1;
amisAvecVousFête++;
++amisAvecVousFête;
console.log(amisAvecVousFête);
```

Ces quatre lignes sont équivalentes. Elles font toutes exactement la même chose : elles ajoutent un au total existant. La deuxième ligne, celle avec le +=, vous pouvez mettre n'importe quel nombre là-bas et cela ajoutera cette quantité au total, donc amisAvecVousFête += 15; ajouterait 15 au total. Cela fonctionne également avec -= (soustraction), ainsi qu'avec \*= (multiplication), /= (division) et \*\*= (exposant). Les deux dernières lignes (++ avant ou après) signifient simplement ajouter un. Elles signifient plus ou moins la même chose (il y a une subtile différence de quand cela ajoute un qui ne devrait jamais vous préoccuper), mais suffit de dire que tout le monde dans la communauté JavaScript utilise toujours le ++ après ; je n'ai jamais vu personne l'utiliser avant en JavaScript. -- fonctionne également pour soustraire un.

D'accord, maintenant voyons un deuxième type de boucle pour obtenir le même effet que ci-dessus.

```javascript
let amisAvecVousFête = 0;
for (let i = 0; i <= 10; i++) {
  amisAvecVousFête++;
}
console.log(amisAvecVousFête);
```

Ceci est une boucle for, probablement le type de boucle le plus courant. À l'intérieur des parenthèses se trouvent trois instructions et vous en avez besoin de toutes. let i = 0; vous permet de définir votre variable de contrôle qui va contrôler la boucle. Pour une raison quelconque, les gens utilisent toujours i, je ne sais pas pourquoi. C'est comme ça. Ça pourrait vraiment être n'importe quoi. La deuxième instruction i <= 10 est exactement comme dans la boucle while, c'est l'instruction qui est fausse dès qu'elle l'est et qui arrête la boucle. La dernière instruction, i++, c'est ce qui se passe à la fin de chaque boucle. Dans notre cas, nous incrémentons la variable de contrôle i pour qu'elle se rapproche de la fin de la boucle à chaque fois.

Note importante : en programmation, nous commençons à compter à partir de 0. En anglais, nous comptons 1, 2, 3, 4, 5, etc., mais en programmation, nous comptons `0, 1,
