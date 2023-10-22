---
description: ""
---

Faisons une brève introduction à la grille (grid), la méthode la plus récente et la plus avancée pour créer des mises en page avec CSS. La grille partage quelques similitudes avec Flex, mais elle est davantage orientée vers la création de mises en page sous forme de grilles, contrairement à Flex qui est plus souple en termes de possibilités. En résumé, la grille est utile pour créer des mises en page de page (qui sont souvent de nature grille), tandis que Flex est plus flexible (quoique un peu plus compliqué) et est plus adapté lorsque vous avez des mises en page plus uniques à réaliser.

```html
<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
  }

  .grid-picture {
    margin: 0;
    padding: 0;
  }
</style>

<div class="grid">
  <img
    class="grid-picture"
    src="http://pets-images.dev-apis.com/pets/dog25.jpg"
    alt="un chien"
  />
  <img
    class="grid-picture"
    src="http://pets-images.dev-apis.com/pets/dog26.jpg"
    alt="un chien"
  />
  <img
    class="grid-picture"
    src="http://pets-images.dev-apis.com/pets/dog27.jpg"
    alt="un chien"
  />
  <img
    class="grid-picture"
    src="http://pets-images.dev-apis.com/pets/dog28.jpg"
    alt="un chien"
  />
</div>
```

Il s'agit d'une grille très basique dans laquelle nous créons une grille 2x2.

row-gap et column-gap définissent les marges dans la grille, c'est-à-dire l'espace entre les éléments de la grille.
grid-template-columns vous permet de configurer la manière dont la grille est construite. Vous pouvez utiliser des pourcentages, des pixels ou fr qui signifie fractions. Avec deux 1fr, nous avons fait en sorte que chaque élément occupe 50% de l'espace moins les marges, qui sont calculées automatiquement. Si nous utilisions 1fr 2fr 1fr, la première colonne prendrait 25%, la deuxième 50% et la troisième 25%. Le calcul fonctionne comme flex-grow.
Tout comme les affichages en bloc (block) et en flex (flex), il existe aussi un affichage en grille en ligne (inline-grid).
C'était un exemple basique. Prenons un exemple plus complexe. Disons que vous créez la mise en page complète de votre page web à l'aide d'une grille (un cas d'utilisation courant).

```html
<style>
  .my-page-header {
    grid-area: nav-header;
    background-color: red;
    padding: 10px;
  }

  .my-page-body {
    grid-area: main-body;
    background-color: blue;
    padding: 10px;
  }

  .my-page-sidebar {
    grid-area: nav-side;
    background-color: green;
    padding: 10px;
  }

  .my-page-footer {
    grid-area: footer;
    background-color: yellow;
    padding: 10px;
  }

  .my-page {
    display: grid;
    grid-template-areas:
      "nav-header  nav-header  nav-header  nav-side"
      "main-body   main-body   .           nav-side"
      "footer      footer      footer      footer";
  }
</style>
<div class="my-page">
  <header class="my-page-header">l'en-tête</header>
  <div class="my-page-body">le corps</div>
  <div class="my-page-sidebar">la barre latérale</div>
  <footer class="my-page-footer">le pied de page</footer>
</div>
```

- `grid-area` vous permet de nommer une section et de vous y référer ultérieurement. Il n'est pas nécessaire que le nom corresponde au nom de classe (mais il peut le faire, les deux n'ont rien à voir l'un avec l'autre).
  Nous avons utilisé grid-template-columns précédemment. - - - -`grid-template-areas` vous permet de faire quelque chose de similaire, mais en vous référant aux colonnes par leur nom. Comme vous pouvez le voir ici, cela nous permet également d'avoir des colonnes qui s'étendent sur plusieurs lignes. Assez sympa.
  Le . ici fait référence à une cellule vide.
  Vous n'êtes pas obligé de faire l'espacement aligné comme je l'ai fait (je ne le fais normalement pas), mais je voulais que ce soit clair pour vous.
  Les marges (padding) et les couleurs ici servent à vous aider à visualiser la grille.

[css-tricks]: https://css-tricks.com/snippets/css/complete-guide-grid/
[fem]: https://frontendmasters.com/courses/css-grid-flexbox-v2/
