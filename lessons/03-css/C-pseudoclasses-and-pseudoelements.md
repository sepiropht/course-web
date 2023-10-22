---
description: ""
---

## Pseudo classes

Parfois, nous souhaitons modifier l'apparence des éléments en fonction d'événements spécifiques qui se produisent dans le DOM. L'un des événements les plus courants est le survol de la souris, où nous voulons changer l'apparence d'un élément lorsque quelqu'un passe sa souris dessus. Par exemple, cette boîte :

Le code HTML et CSS que nous avons utilisé pour cela est le suivant :

```html
<style>
  .hover-example {
    width: 100px;
    height: 100px;
    background-color: limegreen;
    color: white;
  }
  .hover-example:hover {
    background-color: crimson;
    width: 150px;
    height: 150px;
  }
</style>
<div class="hover-example">Passez la souris sur moi</div>
```

La partie :hover sélectionne l'élément uniquement lorsque cette condition est vraie. Il existe de nombreuses [pseudoclasses CSS][pseudoclasses], comme la possibilité de ne sélectionner que le premier élément d'un groupe, comme ceci :

Le CSS pour cet exemple est le suivant :

```html
<style>
  .first-child-example {
    color: crimson;
  }
  .first-child-example:first-child {
    color: limegreen;
  }
</style>
<ol>
  <li class="first-child-example">Premier</li>
  <li class="first-child-example">Deuxième</li>
  <li class="first-child-example">Troisième</li>
</ol>
```

Cela ne sélectionne l'élément que s'il est le premier élément à l'intérieur d'une balise. Sinon, il ne le sélectionnera pas. Il existe de nombreuses autres pseudoclasses CSS ; consultez l'article de CSS-Tricks si vous souhaitez en savoir plus.

Pseudoelements
Nous n'allons pas nous attarder trop longtemps sur les pseudoelements car ils sont un concept un peu avancé. [Lisez ici][pseudoelements] pour une plongée plus approfondie à ce sujet. Cependant, voici un exemple rapide.

```html
<div class="chapter">Ceci est un chapitre de mon livre.</div>

<div class="chapter">Ceci est un deuxième chapitre de mon livre.</div>

<style>
  .chapter p {
    margin: 0;
  }
  .chapter::after {
    content: "❦";
    font-size: 50px;
    text-align: center;
    display: block;
  }
</style>
```

Vous souvenez-vous qu'à la fin de certains chapitres de livres, il y a un petit embellissement pour vous indiquer que vous avez terminé un chapitre ? Cela s'appelle un signe de fin de chapitre. Beaucoup utilisent un signe appelé un "fleuron", et c'est ce que représente le caractère ❦. Disons que nous voulions utiliser CSS pour insérer automatiquement ce caractère après chaque élément de classe de chapitre dans notre livre.

(Au fait, vous pouvez tout à fait utiliser CSS pour les mises en page d'impression comme les livres et les journaux.)

Chaque élément a un ::before et un ::after. Vous pouvez utiliser ces pseudoelements pour insérer des éléments comme nous l'avons fait avec le fleuron.

Encore une fois, ce n'est pas la chose la plus courante à faire, mais je voulais que vous en soyez conscient. Vous pourrez trouver dans d'anciens codes et documentations les notations :before et :after, mais celles-ci ont été remplacées par ::before et ::after afin de pouvoir différencier les pseudoclasses (comme :hover) et les pseudoelements (comme ::after) par syntaxe.

[pseudoclasses]: https://css-tricks.com/pseudo-class-selectors/
[pseudoelements]: https://css-tricks.com/almanac/selectors/a/after-and-before/
