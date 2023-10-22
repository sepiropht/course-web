---
description: ""
---

Les animations CSS sont un domaine complexe et nous allons examiner quelques-unes des techniques. [Vous pouvez réaliser des choses vraiment incroyables uniquement avec des animations CSS][solar-system]. Vous pouvez également utiliser JavaScript conjointement avec CSS pour créer tout ce que vous pouvez imaginer.

```html
<style>
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  .spinny-boi {
    animation: spin 0.5s infinite linear;
    display: inline-block;
    font-size: 30px;
  }
</style>
<div class="spinny-boi">🤢</div>
```

La partie @keyframes vous permet de définir une animation réutilisable. Nous pourrions maintenant appliquer spin à n'importe quel élément.
Nous définissons simplement to, qui représente l'état final de l'animation. Nous pourrions également définir from, qui représente l'état de départ de l'animation. Implicitement, si vous ne définissez pas de valeur pour from, l'animation commence à partir de l'état actuel. Dans ce cas, spinny-boi n'est pas du tout tourné, ou transform: rotate(0deg). Ainsi, il tournera de 0 à 360 degrés, soit une révolution complète. N'hésitez pas à expérimenter.
animation est la propriété pour utiliser un @keyframes défini. Ici, nous disons simplement "fais ce que spin définit, l'animation complète doit durer une demi-seconde, elle doit se répéter indéfiniment (c'est-à-dire ne jamais s'arrêter), et elle doit être exécutée de manière linéaire (il n'y a pas d'accélération ni de ralentissement dans l'animation). Il s'agit d'une notation abrégée. Vous pouvez également définir les propriétés séparément. [Voir la documentation MDN ici][mdn].
Interpolation
Les animations impliquent un certain type de changement au fil du temps. Vous passez d'une valeur de 0 à une valeur de 1 d'une manière ou d'une autre. Le taux de changement peut être manipulé pour obtenir des effets intéressants. Dans l'exemple précédent, vous avez vu une fonction linéaire (ces effets sont appelés fonctions) où il s'agit simplement d'une ligne lisse entre 0 et 1. Examinons les autres possibilités.

```html
<style>
  @keyframes move {
    to {
      translate: 50px;
    }
  }
  .dancer {
    position: relative;
    display: inline-block;
    font-size: 30px;
    position: absolute;
    right: 0;

    /*
    Voici comment faire avec la notation courte :
    animation: move 1s infinite alternate;
    */
    animation-name: move;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  .dancers-list {
    width: 100%;
    max-width: 300px;
    position: relative;
  }

  .linear {
    animation-timing-function: linear;
  }
  .ease {
    animation-timing-function: ease;
  }
  .ease-in-out {
    animation-timing-function: ease-in-out;
  }
  .ease-in {
    animation-timing-function: ease-in;
  }
  .ease-out {
    animation-timing-function: ease-out;
  }
  .cubic-bezier {
    animation-timing-function: cubic-bezier(0,1,.5,1);
  }
</style>

<ul class="dancers-list">
  <li>linéaire : <span class="dancer linear">💃</li>
  <li>ease : <span class="dancer ease">💃</li>
  <li>ease-in-out : <span class="dancer ease-in-out">💃</li>
  <li>ease-in : <span class="dancer ease-in">💃</li>
  <li>ease-out : <span class="dancer ease-out">💃</li>
  <li>cubic-bezier : <span class="dancer cubic-bezier">💃</li>
</ul>
```

Remarquez qu'ils ont tous une sorte d'effet de « rebond » où ils accélèrent puis ralentissent d'une certaine manière. Imaginez que nous pourrions utiliser ease-out pour simuler la gravité d'une balle rebondissante, par exemple.

La dernière, cubic-bezier, vous permet de définir votre propre courbe via des mathématiques que je ne comprends pas suffisamment pour vous l'expliquer. Mais je voulais vous montrer que si vous avez des besoins spécifiques qui ne sont pas satisfaits par l'une des fonctions prédéfinies, vous pouvez les accomplir avec cubic-bezier.

[En savoir plus sur la documentation MDN ici][mdn]

Au-delà du Positionnement
Je vous ai montré comment faire cela avec le positionnement, car c'est plus facile à visualiser. De nombreuses propriétés CSS peuvent être animées, alors voici un exemple ici.

```html
<style>
  @keyframes rainbow {
    100%,
    0% {
      color: rgb(255, 0, 0);
    }
    8% {
      color: rgb(255, 127, 0);
    }
    16% {
      color: rgb(255, 255, 0);
    }
    25% {
      color: rgb(127, 255, 0);
    }
    33% {
      color: rgb(0, 255, 0);
    }
    41% {
      color: rgb(0, 255, 127);
    }
    50% {
      color: rgb(0, 255, 255);
    }
    58% {
      color: rgb(0, 127, 255);
    }
    66% {
      color: rgb(0, 0, 255);
    }
    75% {
      color: rgb(127, 0, 255);
    }
    83% {
      color: rgb(255, 0, 255);
    }
    91% {
      color: rgb(255, 0, 127);
    }
  }
  .rainbow-boi {
    animation: rainbow 4s infinite linear;
    font-size: 30px;
  }
</style>
<div class="rainbow-boi">Arc-en-ciel</div>
```

Idée similaire, mais avec les couleurs. De nombreuses propriétés peuvent être animées, comme la taille et la position.
`from est un alias pour 0% et to est un alias pour 100%. Vous pouvez également définir des pourcentages comme nous l'avons fait ici.
Ces exemples illustrent quelques-unes des possibilités offertes par les animations CSS. Vous pouvez créer des animations fascinantes et des effets visuels impressionnants en utilisant uniquement les capacités du CSS. Que ce soit pour faire tourner des éléments, créer des effets de rebondissement, ou animer des propriétés comme les couleurs, les animations CSS offrent une vaste gamme d'opportunités créatives pour dynamiser vos pages web.

Rappelez-vous que ces exemples sont simplement une introduction et qu'il existe bien plus de fonctionnalités et d'approfondissements à explorer dans le domaine des animations CSS. Vous pouvez vous référer à la documentation de MDN et à d'autres ressources en ligne pour en savoir plus et perfectionner vos compétences en matière d'animations CSS.

[solar-system]: https://codepen.io/juliangarnier/pen/krNqZO
[mdn]: https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function
