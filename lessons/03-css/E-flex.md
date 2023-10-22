---
description: ""
---

<style>
  .gatsby-highlight {
    flex-direction: column;
  }
  .klipse-result {
    width: 100%;
  }
  .CodeMirror {
    width: 100%;
    border-right: 1px solid #90b4fe;
    margin-bottom: 15px;
  }
  .long-inline-box {
    display: inline-block;
    border: 1px solid green;
    background-color: limegreen;
    width: 30px;
    height: 15px;
    margin: 0 3px;
    border-radius: 3px;
  }
  .margin-container {
    background-color: blue;
    padding: 25px;
  }

  .box-model {
    border: 3px red solid;
    padding: 5px;
    background-color: white;
    color: black;
  }
  .interior-span {
    display: inline-block;
    border: 2px green dashed;
    width: 100%;
  }
  .box-1 {
    border: 1px solid black;
    color: white;
    background-color: blue;
    height: 150px;
    width: 300px;
  }
  .box-2 {
    border: 1px solid black;
    color: white;
    background-color: red;
    height: 100px;
    width: 300px;
  }
  .box-3 {
    border: 1px solid black;
    color: white;
    background-color: green;
    height: 200px;
    width: 100px;
  }
</style>

display: flex; est un mode d'affichage pour CSS. Il est important de noter que lorsque vous utilisez display: flex;, cela vous permet de modifier la mise en page à l'intérieur de la balise. Vous pouvez ainsi changer la mise en page de ses éléments enfants. De l'extérieur, cela agit comme block. De même, il existe inline-flex qui agit comme display: inline-block de l'extérieur.

Flex permet de créer de nombreux agencements intéressants, mais nous allons seulement survoler le sujet aujourd'hui. Suivez [le cours de Jen Kramer][jen] ou lisez l'article [CSS-Tricks][flex] pour en apprendre davantage. Nous allons explorer quelques exemples aujourd'hui. Flex vous permet de dire à CSS comment agencer les éléments à l'intérieur d'une balise. Nous pouvons leur dire d'être alignés à gauche, en bas, centrés, comme vous le souhaitez. Vous pouvez même les mettre en colonnes. Je pense que c'est mieux enseigné par des exemples, alors jetons un coup d'œil à quelques-uns. Tous auront le CSS suivant :

```html
<style>
  .flex-container {
    display: flex;
    width: 100%;
    border: 1px solid black;
  }
</style>
<div class="flex-container">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```

Nous allons simplement changer trois propriétés : flex-direction, justify-content et align-items. Rien de spécial ne se passera avec les boîtes, juste le style pour créer les boîtes colorées. Examinons donc plusieurs exemples.

Aucun changement apporté, juste le CSS et le HTML ci-dessus.

Cela ressemble aux flottants, mais remarquez que si vous réduisez la largeur de la page, les boîtes se comprimeront au lieu de se retourner.

```html
<style>
  .reverse {
    flex-direction: row-reverse;
  }
</style>
<div class="flex-container reverse">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```

C'est à l'envers ! Facile comme bonjour avec Flex. Nous pouvons même en faire une colonne !

```html
<style>
  .column {
    flex-direction: column;
  }
</style>
<div class="flex-container column">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```

## justify-content

D'accord, maintenant que nous avons créé des colonnes (d'ailleurs, column-reverse fonctionne comme vous vous y attendez), nous allons essayer d'affecter la justification des éléments.

```html
<style>
  .jc-right {
    justify-content: flex-end;
  }
</style>
<div class="flex-container jc-right">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```

C'est essentiellement une justification à droite. Remarquez que cela est différent de la version inversée ci-dessus, car les éléments sont restés dans le même ordre. Par défaut, la valeur de justify-content est flex-start, ce qui équivaut à une justification à gauche.

```html
<style>
  .jc-center {
    justify-content: center;
  }
</style>
<div class="flex-container jc-center">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```

Et ici, nous voyons des boîtes centrées. Examinons les deux dernières options qui visent à espacer uniformément les boîtes dans l'espace disponible.

```html
<style>
  .jc-sb {
    justify-content: space-between;
  }
</style>
<div class="flex-container jc-sb">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```

Cette option place la première boîte tout à gauche et la dernière tout à droite. Elle essaie ensuite d'espacer uniformément les éléments au milieu. Très utile pour agencer des colonnes sur votre page web. Les deux dernières options sont space-around et space-evenly. Je vous montre uniquement space-around, mais space-evenly est très similaire. N'hésitez pas à en savoir plus si cela vous intéresse.

```html
<style>
  .jc-sa {
    justify-content: space-around;
  }
</style>
<div class="flex-container jc-sa">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```

Remarquez l'espace entre les éléments et les bords (comparé à avant).

## align-items

Maintenant que nous avons exploré la propriété justify-content, examinons align-items. justify-content se préoccupe de la justification horizontale, tandis que align-items se préoccupe de l'alignement vertical. Examinons quelques exemples.

````html
<style>
  .ai-fe {
    align-items: flex-end;
  }
</style>
<div class="flex-container ai-fe">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
Remarquez comment tous les éléments sont maintenant poussés vers le bas de
l'élément, vers l'« extrémité » (l'opposé serait, vous l'avez deviné,
flex-start). Cela n'est pas toujours utile, mais je trouve que le prochain
exemple est très utile pour centrer verticalement les éléments. ```html
<style>
  .ai-center {
    align-items: center;
  }
</style>
<div class="flex-container ai-center">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
````

Centrer verticalement quelque chose avant Flex était un cauchemar. Sérieusement, recherchez "centrer verticalement CSS" et observez les décennies d'angoisse sur StackOverflow. Heureusement pour vous, nous avons maintenant Flex, qui permet de centrer verticalement quelque chose aussi facilement que align-items: center dans une balise display: flex. Comptez vos étoiles chanceuses !!

```html
<style>
  .ai-stretch {
    align-items: stretch;
    height: 200px;
  }

  /* retirer la hauteur des trois boîtes */
  .no-height {
    height: inherit;
  }
</style>
<div class="flex-container ai-stretch">
  <div class="box-1 no-height">1</div>
  <div class="box-2 no-height">2</div>
  <div class="box-3 no-height">3</div>
</div>
```

Pour celui-ci, j'ai dû supprimer la hauteur des boîtes, sinon elle l'emporte sur l'étirement. L'option stretch fait en sorte que les éléments intérieurs s'étirent pour s'adapter à leur conteneur (à moins qu'ils ne soient limités par une height déjà définie).

## flex-grow

```html
<style>
  .ai-grow {
    // rien n'est nécessaire ici
  }

  .ai-grow .box-1 {
    flex-grow: 1;
    width: 0;
  }
  .ai-grow .box-2 {
    flex-grow: 5;
    width: 0;
  }
  .ai-grow .box-3 {
    flex-grow: 10;
    width: 0;
  }
</style>
<div class="flex-container ai-grow">
  <div class="box-1">1</div>
  <div class="box-2">5</div>
  <div class="box-3">10</div>
</div>
```

Ceci est une autre astuce sympa que vous pouvez réaliser avec Flex : indiquer une proportion et laisser l'espace disponible remplir les largeurs. Avec flex-grow, vous indiquez la proportion à utiliser pour la largeur. Dans notre cas, nous avons 1, 5 et 10. Ainsi, la boîte 1 occupera 1/16, la boîte 2 occupera 5/16 et la boîte 3 occupera 10/16 de la largeur disponible.

## Combinaison de ce que nous avons appris

Maintenant que nous avons abordé les bases de Flex, vous pouvez évidemment combiner ces propriétés pour obtenir différents effets. Nous allons réutiliser les classes CSS ci-dessus (si vous les avez modifiées, il suffit de rafraîchir la page).

```html
<div class="flex-container ai-center reverse jc-sa">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```

Ou ceci :

```html
<div class="flex-container ai-fe column">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```

## Aller plus loin avec Flex

Il y a beaucoup plus de puissance à découvrir avec Flex. Vous pouvez créer plusieurs lignes avec flex-wrap. Il existe également toute une série de propriétés que les éléments enfants peuvent avoir (tout ce que nous avons fait jusqu'à présent s'applique à la classe parente) pour affecter des choses comme l'ordre avec order, et vous pouvez également substituer individuellement align-items en utilisant align-self. C'est vraiment cool. Approfondissez davantage si cela vous intéresse.

[jen]: https://frontendmasters.com/courses/css-grid-flexbox-v2/
[flex]: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
