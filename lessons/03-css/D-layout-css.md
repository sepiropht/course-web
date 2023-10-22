---
description: ""
title: "Layout CSS"
---

Le CSS peut également être utilisé pour agencer la page différemment. Sans cela, vous ne pourriez pas avoir deux boîtes côte à côte, comme ceci :

```html
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
</style>
```

```html
<style>
  .ex-box {
    border: 3px solid #aaa;
    background-color: #eee;
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
    margin-right: 10px;
    border-radius: 5px;
    font-size: 30px;
  }
  .ex-box:last-of-type {
    clear: right;
  }
</style>
<div class="ex-box">Boîte 1</div>
<div class="ex-box">Boîte 2</div>
```

Ce sont simplement deux div avec un peu de texte à l'intérieur. Sans CSS, nous ne pourrions pas contrôler la largeur, la hauteur, le fait qu'ils sont côte à côte au lieu d'être sur différentes lignes, l'espace entre eux, ni le centrage vertical et horizontal du texte. Nous entrons dans le domaine du CSS plus orienté sur la mise en page.

Le Modèle de Boîte
Nous allons parler de ce qu'on appelle le modèle de boîte en CSS. C'est l'une des choses les plus déroutantes pour les débutants en CSS, donc cela vaut la peine d'investir du temps pour la comprendre. C'est important.

Affichage (Display)
Chaque balise en CSS a une propriété display associée par défaut. En fait, le CSS a beaucoup de valeurs par défaut cachées, tout comme par défaut, la couleur du texte est noire. En ce qui concerne la propriété display, cela varie en fonction du type de balise que nous utilisons. Les balises div ont par défaut display: block;, tandis que les balises span ont par défaut display: inline;, ce qui est logique étant donné leurs fonctions respectives. Cependant, étant donné que nous avons accès au CSS, nous pouvons manipuler un span pour qu'il agisse comme un div et vice versa (bien que vous utiliseriez généralement simplement la balise appropriée). Nous allons répertorier quelques options ici pour la propriété display.

inline – Comme son nom l'indique, cela fait en sorte que l'élément se comporte comme du texte. Si je veux styliser un peu de texte en ligne, c'est ainsi que je le fais. La clé ici est que le navigateur déterminera automatiquement toute la hauteur, la largeur, le remplissage, les marges, etc. pour vous et ne vous permettra pas de le modifier. C'est un écueil courant pour ceux qui apprennent. Si vous avez quelque chose et que vous essayez de définir la largeur ou la hauteur et que cela ne fonctionne pas, c'est probablement à cause du mauvais type de display.
block – Les divs et les ps sont par défaut display: block;. Cela vous donne le contrôle sur la hauteur, la largeur, le remplissage, les marges, etc. de quelque chose. Par défaut, quelque chose qui est de type block occupe toute la ligne pour lui-même.
inline-block – Un hybride des deux options précédentes. Cela fera en sorte que le navigateur tente de placer la balise en ligne, mais vous permettra toujours de contrôler la hauteur, la largeur, le remplissage et les marges. Comme cette boîte : <div class="long-inline-box"></div>. Cela ne serait pas possible avec les deux options précédentes.
flex et inline-flex – Similaire à block en ce sens qu'il affecte les balises autour de lui comme block le fait, mais il gagne de nouveaux pouvoirs pour la disposition de ses balises internes. Nous parlerons de flex plus en détail.
grid et inline-grid – Modes d'affichage plus avancés qui vous permettent davantage de contrôle pour disposer les balises à l'intérieur d'eux. Nous aurons également une section dédiée à cela.
table – Fait en sorte qu'un élément se comporte comme un tableau. En général, utilisez la balise <table></table> au lieu d'utiliser le CSS pour simuler des tableaux.
Hauteur, Largeur, Remplissage, Bordure et Marge
Encore une fois, ces propriétés ne peuvent pas être manipulées si un élément a display: inline. Faites attention à cela.

Un élément de type block ou similaire à block a plusieurs mesures qui se combinent pour former l'ensemble.

<div class="margin-container">
  <div class="box-model"><span class="interior-span">Contenu intérieur</span></div>
</div>
J'utilise ici plusieurs éléments pour montrer concrètement comment fonctionne le modèle de boîte, mais imaginez que tout cela soit une seule balise div. Le CSS ressemblerait à ceci :

```css
Copy code
.example {
  border: 3px solide rouge;
  remplissage: 5px;
  marge: 25px;
  couleur de fond: blanche;
}
```

La couleur de fond du conteneur parent est bleue. La bordure verte pointillée de 2px a été ajoutée par moi pour montrer le remplissage. Analysons cela, en commençant de l'extérieur et en allant vers l'intérieur.

marge – C'est l'espace extérieur de l'élément, entre lui et les autres éléments. Il est situé à l'extérieur de la bordure. Si vous attribuez une couleur de fond à un élément, celle-ci n'inclura pas l'espace de la marge. Cela est utilisé pour espacer les éléments les uns des autres.
bordure – Ensuite vient la bordure. Si votre élément a une bordure, elle vient ensuite (tout le monde n'a pas besoin ou ne possède pas de bordure).
remplissage – À l'intérieur de la bordure se trouve le remplissage. Il s'agit de l'espace intérieur de l'élément. Si vous attribuez une couleur de fond à un élément, vous colorerez l'espace de remplissage. Dans notre diagramme ci-dessus, vous pouvez voir l'espace entre la bordure rouge solide et la bordure verte en pointillés. Il s'agit du remplissage de l'élément.
Actuellement, l'élément ci-dessus n'a pas de hauteur ou de largeur définie, ce qui signifie qu'il prendra sa hauteur à partir de son contenu et essayera d'occuper 100% de la largeur disponible. Nous pouvons modifier les deux. Cependant, si je dis largeur: 200px, quelle partie fait 200px de large ? Malheureusement, la réponse est que cela dépend. Cela dépend de la valeur de la propriété box-sizing. Par défaut, cela fonctionne selon l'ancienne méthode d'écriture de code, ce qui signifie que si je dis largeur: 200px, je n'inclus pas la bordure ni le remplissage. Cela est ennuyeux car si j'essaie de bien agencer les éléments, il est beaucoup plus facile d'inclure la bordure et le remplissage. Rappelez-vous comment je vous ai dit de ne jamais utiliser le sélecteur générique \* auparavant ? C'est la seule exception où je vous permets de le faire :

```css
* {
  box-sizing: border-box;
}
```

Cela fera en sorte que tout utilise la valeur border-box pour la propriété box-sizing au lieu de la valeur par défaut (appelée content-box, mais vous n'aurez jamais besoin de le savoir). C'est la première chose que j'ajoute à chaque projet que je commence. Vous en aurez besoin une seule fois dans un seul fichier. Cela fera en sorte que par défaut, tout soit de type border-box et soit donc plus facile à travailler. Cela était autrefois controversé, mais [voici Paul Irish (un homme très intelligent qui travaille sur Google Chrome)][paul-irish] qui dit que c'est acceptable.

Disposer les Balises
Il existe plusieurs façons de créer des mises en page. Nous allons brièvement discuter de deux d'entre elles : les floats (flottants) et les flex. Il y a aussi le grid, mais il est encore nouveau, ce qui signifie qu'un grand nombre d'ordinateurs ne le prennent pas en charge, et les meilleures pratiques pour l'utiliser sont encore en cours d'élaboration. De plus, vous n'en aurez pas besoin tout de suite.

Nous allons utiliser ces boîtes dans les exemples suivants. Voici le CSS si vous voulez les utiliser :

```html
<style>
  .box-1 {
    border: 1px solide noir;
    couleur: blanche;
    couleur de fond: bleue;
    hauteur: 150px;
    largeur: 300px;
  }
  .box-2 {
    border: 1px solide noir;
    couleur: blanche;
    couleur de fond: rouge;
    hauteur: 100px;
    largeur: 300px;
  }
  .box-3 {
    border: 1px solide noir;
    couleur: blanche;
    couleur de fond: vert;
    hauteur: 200px;
    largeur: 100px;
  }
</style>
<div class="box-1">1</div>
<div class="box-2">2</div>
<div class="box-3">3</div>
```

Flottants (Floats)
La méthode ancienne et éprouvée pour disposer les éléments est d'utiliser une propriété appelée float (flottant). L'idée derrière float est de pousser un élément aussi loin que possible à gauche ou à droite, et une fois qu'il n'y a plus de place, de passer à la ligne suivante. J'ai inclus un exemple ci-dessous. Essayez de redimensionner votre navigateur horizontalement et observez comment les boîtes se réorganisent.

```html
<style>
  .floated div {
    float: left;
  }
</style>
<div class="floated">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```

Vous verrez que les boîtes se réorganisent dès qu'elles n'ont plus de place, et la boîte 3 se réorganise comme prévu. Cependant, une fois que vous avez réorganisé les deux boîtes 2 et 3, vous remarquerez que la boîte 3 ne remonte pas tout en haut à côté de la boîte 1 ; elle reste à la même position verticale que la boîte 2. Étant donné que la boîte 2 est plus haute dans le HTML, la boîte 3 ne peut pas monter plus haut sur la page en raison du fonctionnement du CSS. C'est l'une des limitations des flottants. Ils ont un comportement particulier et difficile à comprendre. Passons et parlons du modèle flex, qui simplifie grandement la manipulation.

Flexbox (flex)
Flexbox est un outil puissant et plus intuitif pour créer des mises en page flexibles et dynamiques. Avec Flexbox, vous pouvez organiser les éléments horizontalement et verticalement, les centrer, les réorganiser facilement et même les faire changer de taille pour s'adapter à différents écrans.

Pour illustrer, voici comment vous pouvez utiliser Flexbox pour disposer les boîtes de l'exemple précédent :

```html
<style>
  .flex-container {
    display: flex;
  }

  .flex-box {
    border: 1px solid black;
    color: white;
    height: 150px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    margin-right: 10px;
    background-color: blue;
  }
</style>
<div class="flex-container">
  <div class="flex-box">1</div>
  <div class="flex-box">2</div>
  <div class="flex-box">3</div>
</div>
```

Dans cet exemple, nous créons un conteneur flex-container avec display: flex;, ce qui indique que nous voulons utiliser Flexbox pour agencer les éléments à l'intérieur. Ensuite, chaque boîte est définie avec la classe flex-box et contient le contenu du numéro de la boîte. La propriété display: flex; est utilisée pour activer Flexbox à l'intérieur de chaque boîte individuelle également.

Les propriétés align-items et justify-content sont utilisées pour centrer le contenu des boîtes verticalement et horizontalement. Ainsi, avec Flexbox, nous avons un meilleur contrôle sur la disposition et le centrage des éléments sans les limitations des flottants.

Notez que dans l'exemple Flexbox, nous n'avons pas besoin d'utiliser la propriété float, ni de manipuler les marges et les paddings pour obtenir la mise en page souhaitée. Flexbox simplifie grandement le processus de disposition des éléments sur la page.

Conclusion
Le CSS est un outil puissant qui vous permet de styliser et de disposer vos éléments HTML de manière créative. Grâce aux propriétés de style et aux concepts de mise en page que nous avons explorés, vous avez désormais les bases nécessaires pour commencer à créer des mises en page attrayantes et dynamiques pour vos sites web. N'hésitez pas à expérimenter et à pratiquer davantage pour maîtriser davantage ces concepts et créer des designs époustouflants !

[paul-irish]: https://www.paulirish.com/2012/box-sizing-border-box-ftw/
