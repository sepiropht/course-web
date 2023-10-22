---
description: ""
---

Les attributs permettent de modifier le comportement d'un attribut HTML. Vous en avez déjà vu quelques-uns, mais nous allons nous pencher sur quelques exemples supplémentaires.

Un très bon exemple que nous avons déjà vu est l'attribut `href` de la balise `<a href="www.frontendmasters.com"></a>`. En modifiant le href, nous modifions ce que fait la balise. C'est également contextuel : `href` ne fonctionne que sur les balises `a`. Vous ne pouvez pas ajouter un `href` à une `div` et vous attendre à ce qu'il fonctionne soudainement comme un lien.

Un autre exemple est l'attribut `type` de l'entrée `input`. En changeant le type, vous changez la nature de l'entrée affichée

```html
<!-- La valeur par défaut, si vous n'indiquez pas le type, vous obtiendrez le type "texte" -->
<input type="text" />

<input type="color" />
<input type="file" />
<input type="number" />
<input type="datetime-local" />
<input type="radio" />
<input type="checkbox" />
```

`href` et `type` sont spécifiques à quelques balises. Il y a d'autres attributs comme `class` et `id` qui sont universels et peuvent être appliqués à (presque) toutes les balises. Ils sont eux-mêmes inertes ; ils ne font rien, mais permettent à d'autres choses de les trouver plus tard (nous les couvrirons largement dans les sections CSS et JS).

```html
<h3 class="the-red-one">Celui-ci est rouge</h3>
<h3 class="the-blue-one">Celui-ci est bleu</h3>

<style>
  /* don't worry about this yet, it's CSS */
  .the-red-one {
    color: red;
  }

  .the-blue-one {
    color: blue;
  }
</style>
```

Les classes sont plus utiles que les identifiants. Vous devriez les utiliser dans 95 % des cas. Une classe est réutilisable. Maintenant, je peux créer une autre balise (pas nécessairement un autre h3) et ce style CSS lui sera réappliqué ! Vous pouvez également attribuer plusieurs classes à une même balise.

```html
<h3 class="the-red-one bolded">C'est rouge et en gras</h3>

<style>
  .bolded {
    font-weight: bold;
  }
</style>
```

## IDs

Les classes sont bien plus utiles. Cependant, il existe des identifiants dont vous pouvez avoir besoin occasionnellement. Une chose essentielle est qu'un \_ID est unique. Alors que j'ai déjà utilisé deux fois la classe `the-red-one`, vous ne pouvez pas faire la même chose avec les ID. Ils sont conçus pour ne pas être réutilisables ; ils sont uniques à la page.

Encore une fois, en général, même si vous n'avez qu'un seul exemplaire de quelque chose, il est préférable d'utiliser des classes pour tout et de faire comme si les IDs n'étaient pas une option. Vous ne devez utiliser les identifiants que lorsque quelque chose est unique et que vous voulez vous assurer qu'il le reste. Par exemple, si vous avez une application JavaScript qui doit placer son HTML dans une div spécifique, vous pouvez utiliser un ID pour cela (vous pouvez toujours utiliser une classe et certaines personnes le font).

```html
<h3 id="brand">La marque de mon site</h3>
```

Pour l'instant, il suffit d'utiliser les classes. Cela facilitera les choses.
