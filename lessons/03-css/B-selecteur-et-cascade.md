---
description: ""
---

Avant cette section, vous avez appris à créer des règles CSS pour modifier l'apparence de votre page web. Nous vous avons montré comment créer une règle CSS pour que chaque élément p de la page ait un texte vert au lieu de noir, ce qui est incroyable. Cependant, lorsque vous commencez à construire des sites web plus importants, vos besoins deviennent plus compliqués : vous pourriez avoir besoin que ce p ait un texte vert et que cet autre p ait un texte rouge. Nous ne vous avons pas encore montré comment faire en sorte que deux balises identiques soient stylisées différemment. Commençons à vous montrer comment faire cela pour que vous puissiez obtenir des résultats comme ceux-ci :

<p style="color: red">Ceci est un paragraphe rouge.</p>
<p style="color: blue">Ceci est un paragraphe bleu.</p>
Comment pouvons-nous accomplir cette magie noire ? Vous vous souvenez de la section sur les classes dans la partie HTML ? Nous allons l'utiliser maintenant. Les classes nous permettent de styliser différemment les mêmes balises (par exemple p, div, span, etc.) car nous pouvons sélectionner la classe au lieu de la balise. C'est là que des noms de classe utiles sont nécessaires. Donc maintenant, si nous avons un h1 qui est le titre d'un article de blog et un h1 qui est le logo de marque en haut, nous pouvons faire ceci :

```display-html
<h1 class="branding">Ma Super Marque Cool</h1>
<!-- autres balises HTML ... elles n'ont pas besoin d'être des balises sœurs -->
<h1 class="titre-article-blog">Mon Article de Blog Cool</h1>
```

Nous pouvons utiliser du CSS pour appliquer des styles différents à ces deux balises. Comme ceci :

```html
<style>
  .branding {
    color: red;
  }

  .titre-article-blog {
    color: limegreen;
  }
</style>
<h1 class="branding">Ma Super Marque Cool</h1>
<h1 class="titre-article-blog">Mon Article de Blog Cool</h1>
```

Dans le CSS, remarquez le . (point) avant le nom de la classe. C'est ainsi que vous différenciez entre un nom de balise (comme h1) et un nom de classe (comme "branding").

Alors que devriez-vous utiliser, en général ? Les classes. Presque toujours les classes. C'est le consensus dans la communauté du développement front-end. Les classes sont la meilleure façon de styliser les pages web. Il y a des cas rares où il peut être utile de styliser des balises (par exemple, si vous voulez littéralement styliser chaque balise a sur la page) mais ces cas sont rares. Utilisez des classes. Optez pour l'utilisation des classes.

## La Cascade

J'aimerais pouvoir m'arrêter ici. C'est la partie où le CSS peut devenir inutilement compliqué, même si la possibilité d'utiliser la cascade est parfois utile. Avant de plonger dedans, évitez d'utiliser cette capacité du CSS partout où c'est possible. Cela vous fera gagner des heures de débogage, je vous le promets.

Alors, la cascade. Que se passe-t-il si vous avez deux classes CSS avec des propriétés en conflit ? Laquelle "gagne" et est appliquée ? Voyons un exemple.

```html
<style>
  .title {
    color: red;
  }

  .title {
    color: green;
  }
</style>
<h1 class="title">Titre Cool</h1>
```

Dans cet exemple, nous avons deux règles avec la même classe (ce qui est une pratique "légale" en CSS). Alors laquelle est appliquée ? Comme elles sont égales, celle qui arrive en dernier l'emporte. Donc dans ce cas, le h1 sera en vert. Alors souvenez-vous de cette règle (nous la récapitulerons à la fin) : quand tout est égal, la dernière règle l'emporte. Cela fonctionnerait de la même manière si nous avions deux sélecteurs h1.

Okay, un peu plus compliqué :

```html
<style>
  .main-brand-2 {
    border: 1px solid black;
    color: red;
  }

  .title-2 {
    color: green;
  }
</style>
<h1 class="title-2 main-brand-2">Marque ici</h1>
```

Tout d'abord, oui, une balise peut avoir plusieurs classes, et cela peut être utile. Alors, à quoi cela va-t-il ressembler ? Aux yeux du CSS, ces deux sélecteurs sont égaux car ils ont tous les deux la même spécificité (mot clé que vous verrez souvent lorsque l'on parle de CSS). Ils spécifient tous deux une classe, ce qui les rend égaux. Donc dans ce cas, puisque .titre vient en dernier dans le CSS, elle l'emporte. La couleur sera verte. Et la bordure ? Puisque .titre n'est pas en conflit, elle aura également une bordure noire. Alors gardez à l'esprit que chaque "conflit" est résolu propriété par propriété. Le résultat final est donc un h1 avec une bordure noire et une police verte.

```html
<style>
  .main-brand-3.title-3 {
    color: red;
  }

  .title-3 {
    color: green;
  }
</style>
<h1 class="title-3 main-brand-3">Marque ici</h1>
```

C'est ainsi que vous ajoutez deux classes à un seul sélecteur. Remarquez qu'il n'y a pas d'espace entre les deux noms de classe (cette absence d'espace a une signification différente). Le sélecteur .marque-principale.titre correspondra uniquement à une balise qui possède les deux classes. S'il n'a qu'une seule des deux classes, cela ne correspondra pas. Comme vous pouvez l'imaginer, puisqu'il a deux classes, il est plus spécifique et l'emporte donc.

Okay, prochaine étape

```html
<style>
  .title-4 {
    color: orange;
  }

  h1 {
    color: green;
  }
</style>
<h1 class="title-4">Another h1</h1>
```

Celui-ci est moins évident. Maintenant, nous devons comprendre la spécificité encore plus en profondeur. Une classe est considérée comme plus spécifique qu'une balise. Ainsi, un sélecteur de classe "surpasse" un sélecteur de balise. Il est plus spécifique. Par conséquent, même si le sélecteur h1 vient en dernier, la classe .titre l'emporte car elle est plus spécifique. C'est pourquoi il est utile de tout faire avec des classes ; vous n'avez pas à vous soucier de ces guerres de spécificité si tout est égal et essayez de ne pas avoir de règles en conflit (ce qui n'est pas toujours possible).

Une manière utile mais imparfaite de penser à cela est de considérer la spécificité comme un nombre. La classe est comme le chiffre des dizaines, et la balise est comme le chiffre des unités. Ainsi, quelque chose avec un seul sélecteur de classe aurait une spécificité de 10 et quelque chose avec un seul sélecteur de balise aurait une spécificité de 1. Le plus grand nombre l'emporte. Cette analogie est imparfaite car un seul sélecteur de classe est encore plus grand que dix sélecteurs de balises, mais c'est un moyen pratique pour rapidement évaluer mentalement quel sélecteur est plus spécifique.

Dernier exemple et nous passerons à autre chose :

```html
<style>
  h1.main-brand-5 {
    color: red;
  }

  .main-brand-5.title-5 {
    color: orange;
  }

  .main-brand-5 {
    color: green;
  }
</style>
<h1 class="title-5 main-brand-5">Another Example</h1>
```

Le premier sélecteur, h1.marque-principale, montre comment sélectionner à la fois une balise et une classe en même temps. Comme vous pouvez l'imaginer, c'est plus spécifique que le troisième sélecteur, .marque-principale. Si vous vous souvenez de notre astuce, le premier sélecteur serait 11, le deuxième serait 20 et le dernier serait 10, ce qui fait du deuxième sélecteur le plus spécifique, et en effet, c'est le cas. Le premier sélecteur n'est pas une bonne idée à suivre ; utiliser à la fois une balise et une classe est généralement une mauvaise idée et signifie que vous faites probablement quelque chose d'étrange dans votre code. Je vous le montre simplement car cela arrive souvent dans les codes existants.

## IDs et !important

Les deux prochaines choses que je vais vous montrer sont celles que vous ne devriez pratiquement jamais utiliser. Ce sont des boulets de démolition quand la plupart des problèmes nécessitent un marteau de charpentier. Je vous les montre car de nombreux tutoriels en ligne et codes existants les incluent. Alors, s'il vous plaît, abstenez-vous d'utiliser ces outils à moins d'avoir une bonne raison (il y a quelques problèmes qui nécessitent effectivement un boulet de démolition).

```html
<style type="text/css">
  #site-brand {
    color: red;
  }

  h1.nav-head.nav-main.other-useful-class {
    /*
     * cette classe est beaucoup trop spécifique ; n'ayez jamais un sélecteur de classe aussi long
     * c'est ridicule et juste pour illustrer un point
     */
    color: green;
  }
</style>
<h1 id="site-brand" class="nav-head nav-main other-useful-class">
  La Marque de mon Site Web
</h1>
```

Vous penseriez qu'en fonction de la longueur de la deuxième classe, elle l'emporterait. Ce n'est pas le cas. Les sélecteurs d'ID (#marque-site) l'emportent sur les sélecteurs de classe. Si les balises sont au niveau des unités et les classes au niveau des dizaines, alors les ID sont au niveau des centaines. En utilisant cette analogie, le premier est 100 et le second est 31. Encore une fois, gardez à l'esprit que cela n'est qu'un outil utile pour avoir rapidement une idée de la spécificité. Mais un ID est toujours supérieur à cinquante classes.

Voulez-vous démolir le boulet de démolition ? En utilisant le HTML précédent, regardez ce CSS :

```html
<style>
  #site-brand-2 {
    color: red;
    border: 1px solid red;
  }

  .nav-head-2 {
    color: green !important;
    border: 1px solid green;
  }
</style>
<h1 id="site-brand-2" class="nav-head-2 nav-main-2 other-useful-class-2">
  La Marque de mon Site Web
</h1>
```

Détruit. La couleur du h1 sera verte, mais la bordure sera rouge. C'est une terrible idée. N'utilisez jamais !important. Comme vous pouvez le constater, les choses se compliquent rapidement et la logique devient très difficile à suivre, même pour les développeurs expérimentés.

## Héritage

Maintenant, parlons d'héritage. Les propriétés CSS peuvent être héritées des éléments parents vers leurs éléments enfants. Cela signifie que si vous appliquez un style à un élément parent, ses éléments enfants hériteront également de ce style à moins qu'ils ne soient explicitement remplacés.

Par exemple :

```html
<style>
  .parent {
    color: blue;
  }

  .child {
    color: red;
  }
</style>
<div class="parent">
  <p class="child">Ceci est un texte en rouge.</p>
</div>
```

Dans ce cas, l'élément enfant <p> a une couleur rouge, annulant la couleur bleue héritée de l'élément parent.

## Combinaison de Sélecteurs

Vous pouvez également combiner plusieurs sélecteurs pour cibler des éléments spécifiques. Par exemple, si vous avez une liste d'éléments avec différents niveaux d'importance, vous pouvez utiliser plusieurs classes pour les styler différemment :

```html
<style>
  .important {
    font-weight: bold;
  }

  .highlight {
    background-color: yellow;
  }
</style>
<ul>
  <li class="important">Élément à haute priorité</li>
  <li class="highlight">Élément en surbrillance</li>
  <li class="important highlight">Les deux</li>
  <li>Élément normal</li>
</ul>
```

Dans cet exemple, l'élément "Élément à haute priorité" sera en gras, l'élément "Élément en surbrillance" aura un arrière-plan jaune, et l'élément "Les deux" aura les deux styles appliqués.

## Résumé

CSS est un outil puissant pour contrôler l'apparence visuelle de vos pages web. Il vous permet d'appliquer des styles à des éléments spécifiques en utilisant des sélecteurs, et vous pouvez utiliser des classes et des IDs pour rendre votre style plus spécifique. Souvenez-vous de ces concepts clés :

Les sélecteurs ciblent les éléments HTML pour les styles.
Les classes et les IDs sont utilisés pour appliquer des styles à des éléments spécifiques.
Les propriétés définissent les attributs visuels que vous souhaitez modifier (par exemple, la couleur, la taille de la police, etc.).
Les valeurs spécifient les réglages que vous souhaitez pour chaque propriété (par exemple, rouge, 16px, etc.).
La cascade détermine quels styles sont appliqués en cas de règles en conflit.
L'héritage permet aux éléments enfants d'hériter des styles des éléments parents.
En continuant d'apprendre et de pratiquer CSS, vous découvrirez son immense flexibilité et sa polyvalence pour créer des pages web visuellement attrayantes et interactives. Et n'oubliez pas, l'expérimentation et la pratique sont essentielles pour maîtriser CSS !
