---
description: "Brian enseigne ce que sont les balises, l'unité de base du HTML"
---

# Les Balises

Nous allons commencer à construire notre tout premier site web. Au début, notre site va être assez moche, mais il va quand même être fonctionnel ! Nous allons utiliser le langage HTML, ou langage de balisage hypertexte. Ce n'est pas un langage de programmation car il ne fait en réalité rien. C'est comme l'anglais, qui n'est pas non plus un langage de programmation : vous ne pouvez pas "exécuter" l'anglais. Même idée avec HTML : vous ne pouvez pas "exécuter" HTML. HTML est simplement le langage et les images sur la page. C'est le contenu statique (un autre mot pour dire non modifié).

## Balises

Le bloc de construction de base d'HTML est la **balise**. Une balise est un élément de construction. Elle décrit ce qu'il y a à l'intérieur. Chaque balise a une balise d'ouverture et une balise de fermeture (certaines balises s'ouvrent et se ferment au même endroit.) Je pense que la façon la plus simple de l'apprendre est de montrer quelques exemples.

```html
<h1>Ceci est le titre de mon document</h1>
```

Vous pouvez voir les balises <h1> et </h1> entourant le texte "Ceci est le titre de mon document". C'est ainsi qu'HTML fonctionne. Vous pouvez avoir une balise d'ouverture qui contient des informations ou d'autres balises à l'intérieur. Dans ce cas, nous avons une balise h1 qui est une balise de titre : elle est utilisée pour le plus grand titre de la page, généralement un titre. Si vous l'affichez dans le navigateur, cela ressemblerait à ceci :

```html
<h1>Ceci est le titre de mon document</h1>
```

C'est plus grand et en gras car c'est ainsi que les navigateurs traitent les balises h1, ils les rendent importantes sur la page. Cependant, cela va plus loin que ça. Les navigateurs ne sont pas les seuls à lire les sites web. Les personnes aveugles ou malvoyantes utiliseront des lecteurs d'écran pour lire à haute voix les pages web ; ils utilisent des éléments comme les en-têtes pour comprendre quelles informations sont importantes à lire pour les utilisateurs. C'est aussi la façon dont Google et Bing comprennent les détails importants de votre site web. En d'autres termes, il est important de savoir quel type de balise utiliser. Plus que l'esthétique visuelle, c'est l'utilisation de ces balises qui compte.

Une balise, qu'il s'agisse d'une balise d'ouverture ou de fermeture, est entourée de chevrons, < et >. Les balises de fermeture ont toujours un slash, /, après le chevron d'ouverture, de sorte qu'elles ressemblent à </h1>. Il existe des balises dites "auto-fermantes" ou "balises vides" qui s'ouvrent et se ferment d'elles-mêmes. Elles ressembleront à ceci : <input /> (je vous expliquerai dans un instant ce qu'est un élément input). Le slash à la fin signifie qu'elle se ferme automatiquement. Pour ajouter à la confusion, ce dernier slash est facultatif, donc <input> (sans balise de fermeture) est également valide car les balises input sont toujours auto-fermantes.

Les balises sont également ouvertes et fermées dans un ordre spécifique. La balise ouverte la plus récente doit être la prochaine à être fermée. Par exemple, si j'ai un h1 au lieu d'une div, le h1 doit être fermé en premier.
