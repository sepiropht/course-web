---
description: ""
---

<style>
  .step-one {
    color: red
  }

  .step-two {
    color: limegreen;
    font-size: 60px;
    font-weight: normal;
    text-decoration: underline;
    text-transform: uppercase;
    border: 3px solid pink;
  }
</style>

D'accord, maintenant nous avons commencé à placer des éléments HTML sur une page. En utilisant notre analogie de construction de maison, c'est comme si nous avions maintenant tous les matériaux empilés devant notre maison. Cependant, un tas de bois ne fait pas une maison. Nous allons commencer à réfléchir à la façon de mettre ces éléments ensemble, comment créer nos plans, nos schémas. Le CSS est vraiment puissant et peut accomplir une grande variété de choses : couleurs, tailles, ordre, positionnement, masquage, affichage, animation, etc. Nous allons effleurer le sujet ici, mais sachez que vous pouvez faire beaucoup de choses avec seulement du CSS. C'est un sujet profond et un outil puissant.

Tout comme le HTML, le CSS n'est pas un langage de programmation. C'est une liste de règles que vous donnez au navigateur. Vous fournirez des règles au navigateur comme "tous les éléments h1 seront de couleur rouge." Nous explorerons pourquoi c'est différent de JavaScript plus tard, mais sachez que c'est l'essentiel.

## Style

Nous allons d'abord explorer la manière la plus évidente d'utiliser le CSS : pour effectuer des changements visuels sur votre HTML. Imaginez un h1 comme ceci :

```display-html
<h1>Ceci est un h1.</h1>
```

Jusqu'ici tout va bien. Et si nous voulions plutôt rendre le h1 en rouge ? Comme ceci

<h1 class="step-one">Ceci est un h1.</h1>

Nous allons écrire une règle CSS qui permet cela. Cela ressemblerait à ceci :

```css
h1 {
  color: red;
}
```

C'est tout ! Voici votre premier CSS. Analysons chaque élément de cette règle :

h1 — C'est ce que nous appellerions le sélecteur. Tout ce qui correspond à ce sélecteur aura tout ce qui se trouve à l'intérieur des { } appliqué. Ces sélecteurs peuvent être une grande variété de choses, mais pour l'instant, nous sélectionnons simplement tous les éléments h1 de la page. Il est important de garder à l'esprit également que cela appliquera les modifications à tout ce qui correspond à ce sélecteur.
color: – C'est la propriété. Il y a environ ~350 propriétés que vous pouvez utiliser, mais pour être honnête, vous n'utiliserez jamais toutes. Peut-être cinquante à cent sont fréquemment utilisées et le reste est une longue traîne qui est rarement utilisée. La propriété color affecte la couleur de la police (ainsi que certaines autres choses, mais pour l'instant, supposez simplement qu'elle concerne la couleur de la police.)
red – C'est la valeur. Cela identifie quelle sera la valeur de la propriété. Dans ce cas, nous disons à la couleur d'être rouge. Il existe différentes façons de définir une couleur en CSS. Cela s'appelle l'utilisation d'une "couleur nommée", dont CSS comprend environ [150 couleurs différentes][colors]. CSS comprend également des valeurs hexadécimales comme #ff0000, des valeurs RGB comme rgb(255, 0, 0), et des valeurs HSL comme hsl(0, 100%, 50%). Toutes ces valeurs que j'ai données dans la phrase précédente sont la même couleur que red. En réalité, vous n'avez pas besoin de comprendre comment ces valeurs fonctionnent pour comprendre la programmation web ou le CSS, et j'affirmerais que la plupart des développeurs web ne le font pas. Si vous avez besoin de comprendre, voici un excellent article à ce sujet sur [CSS Tricks][css-tricks].
; – Chaque paire propriété-valeur se termine par un point-virgule. Pensez-y comme un point pour terminer une phrase. C'est ainsi que l'ordinateur sait que vous avez terminé cette propriété et que vous passez à autre chose.
Alors allons un peu plus loin. Rendons notre h1 encore plus différent ! Rendons-le vert lime, plus grand, non gras (les h1 sont en gras par défaut), souligné, en majuscules et avec une bordure rose !

```css
h1 {
  color: limegreen;
  font-size: 60px;
  font-weight: normal;
  text-decoration: underline;
  text-transform: uppercase;
  border: 3px solid pink;
}
```

<h1 class="step-two">Ceci est un h1.</h1>

Remarquez que le HTML que nous utilisons pour cela est toujours : <h1>Ceci est un h1.</h1>. Rien n'a changé ici ! Tout cela utilise simplement une règle CSS pour affecter son apparence. Plutôt cool, non ? Remarquez également qu'un sélecteur peut avoir plusieurs propriétés et qu'une propriété peut avoir plusieurs valeurs ! Analysons cela.

color: limegreen; – Nous l'avons déjà utilisé, mais maintenant nous utilisons la couleur limegreen !
font-size: 60px; – font-size permet de rendre le texte plus grand ou plus petit. Puisque nous voulions le rendre plus grand, nous l'avons rendu haut de 60 pixels, ce qui est assez grand. Les px représentent l'unité de mesure ici. Tout comme il est différent de dire que quelque chose mesure cinq pieds de long, cinq pouces de long ou cinq mètres de long, il en va de même pour dire que quelque chose mesure 60px ou 60em. Le CSS a différentes unités de mesure, mais la plupart des choses sont mesurées en px, em ou rem. [Voir cet article CSS Tricks][css-lengths] si vous souhaitez en savoir plus sur les différentes unités de mesure du CSS.
font-weight: normal; – Comme je l'ai indiqué précédemment, les h1 sont en gras par défaut. C'est ainsi que vous indiquez au navigateur de maintenir le poids du texte à normal. Il y a d'autres choses que vous pouvez faire ici, mais généralement, vous indiquez simplement s'il doit être en gras ou en normal.
text-decoration: underline; – C'est ainsi que vous indiquez de souligner le texte. La plupart du temps, text-decoration est utilisé pour cela, mais vous verrez également line-through pour le barré ou `overline` pour... sur-lignage ? Ouais, je ne suis pas sûr. Mais vous pouvez le faire !

text-transform: uppercase; – Cela peut être un peu déroutant car nous ne changeons pas le texte à l'intérieur de la balise HTML, mais nous transformons tout en majuscules. C'est ce que text-transform peut faire pour vous. Il fera également lowercase ou capitalize (cette dernière option mettant en majuscule la première lettre de chaque mot). Faites attention à cela, car si votre site web prend en charge d'autres langues, la modification de la casse des lettres modifiera la signification.
border: 3px solid pink; – C'est ainsi que vous ajoutez des bordures autour des éléments. Premièrement, remarquez que la bordure va jusqu'au bord de la page. C'est parce que les h1 occupent toute la ligne, même s'ils n'ont pas nécessairement de texte pour la remplir. Nous aborderons cette question plus tard lorsque nous parlerons du modèle de bloc, mais il est bon de le savoir dès maintenant. Donc, remarquez que nous avons trois valeurs pour une seule propriété : 3px, solid et pink. Ce sont toutes des parties séparées et pourraient être placées dans n'importe quel ordre (par exemple, vous pourriez écrire border: solid pink 3px; et cela serait identique). Le 3px représente l'épaisseur de la bordure, solid indique qu'il s'agit d'une ligne solide (elle pourrait être dotted, dashed, double, ou quelques autres) et pink représente la couleur de la bordure. C'est en fait un exemple de propriété CSS combinée, un raccourci. Vous pourriez le séparer en border-style: solid;, border-color: pink; et border-width: 3px;. Vous verrez beaucoup de ces combinaisons dans le CSS.
Pourquoi est-ce font-_ parfois et text-_ d'autres fois ? Font concerne la police réelle qui est chargée. Une police en italique se compose en réalité de glyphes différents de ceux d'une police en gras. Text concerne le texte affiché, comme les majuscules ou une ligne en dessous. Cela n'a pas besoin de changer la police réelle qui est chargée.

## Parents et enfants

Vous remarquerez que si j'ai du HTML comme ceci :

```display-html
<div>
  <h1>Un h1</h1>
</div>
```

Et que j'ai du CSS qui ressemble à ceci :

```css
div {
  color: blue;
}
```

Le h1 sera coloré en bleu. C'est parce qu'il a une balise parente (ou ancêtre) qui est un div, ce qui signifie que le CSS l'affectera toujours. Cela fonctionne même avec de grands degrés de séparation. Si j'ai <body><div><div><div><div><div><h1>mon h1</h1></div></div></div></div></div></body> et que mon sélecteur CSS est body { color: orange }, cela affectera le h1 au milieu.

## Expérimentez

C'est une introduction de base au CSS et aux propriétés. Jouez avec le CodePen ci-dessous et voyez quel genre de problèmes vous pouvez créer. La clé avec le CSS est l'expérimentation. Comme vous pouvez l'imaginer, toutes les différentes propriétés interagiront les unes avec les autres, parfois à votre détriment et parfois de manière vraiment cool et intéressante. Nous explorerons plus en détail comment utiliser le CSS pour positionner et dimensionner les éléments, mais pour l'instant, amusez-vous avec ces techniques de style. Pour passer entre le HTML et le CSS, cliquez sur les boutons en haut du CodePen.

<iframe height='600' scrolling='no' title='CSS Playground' src='//codepen.io/btholt/embed/ELaxOB/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/btholt/pen/ELaxOB/'>CSS Playground</a> by Brian Holt (<a href='https://codepen.io/btholt'>@btholt</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[properties]: https://meiert.com/en/indices/css-properties/
[colors]: https://css-tricks.com/snippets/css/named-colors-and-hex-equivalents/
[css-tricks]: https://css-tricks.com/nerds-guide-color-web/
[css-lengths]: https://css-tricks.com/the-lengths-of-css/
