---
description: ""
---

Jusqu'à présent, nous avons discuté de fragments de code HTML, en utilisant des éléments tels que les balises <div> pour construire des "composants" (ou un groupe de balises qui représente un concept de niveau supérieur comme un article ou une barre de navigation). Mais parlons maintenant de la structure globale d'un document HTML.

Ouvrez Visual Studio Code, créez un nouveau document et enregistrez-le dans un nouveau dossier que nous allons utiliser pour notre projet.

Dans ce dossier, créez un fichier appelé index.html. Pourquoi "index" ? Par convention, c'est le fichier principal d'un site web. Si vous construisiez example.com, alors index.html serait la page d'accueil. Si vous créiez une page about.html, elle serait accessible via example.com/about.html. Si vous créiez un répertoire appelé dogs à l'intérieur de votre dossier et ajoutiez un fichier luna.html dans ce répertoire, l'adresse serait example.com/dogs/luna.html.

Maintenant que vous avez un fichier index.html, ajoutez ceci à l'intérieur (ceci sera le début de votre projet dans la prochaine leçon) :

```display-html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mon Blog</title>
  </head>
  <body>
    <!-- tout votre contenu ira ici -->
  </body>
</html>
```

Décortiquons ces balises une par une :

- `<!DOCTYPE html>` - Il y a eu plusieurs révisions d'HTML. Vous verrez fréquemment parler d'HTML5. Comme vous pouvez le deviner, c'est la cinquième révision majeure d'HTML. HTML5 a été publié en 2008 et il n'y a pas de HTML6 en préparation, donc pas de soucis à propos de cette balise initiale qui change. Dans tous les cas, étant donné que votre navigateur peut comprendre plusieurs versions d'HTML, placez ceci en haut pour signaler au navigateur que nous utilisons la dernière version.
- `<html lang="fr"></html>` - Cette balise est la balise racine absolue d'un document HTML. Techniquement, HTML est juste un type spécifique de XML, cette balise est nécessaire pour signaler à tout lecteur que c'est réellement un document HTML (vous n'avez jamais besoin de vous en préoccuper, juste pour information). Tout ce qui se trouve à l'intérieur sera interprété comme du HTML. Le `lang="fr"` est la langue dans laquelle vous rédigez votre HTML. Étant donné que cette classe est en anglais, nous l'écrivons en anglais. C'est spécifiquement important pour les moteurs de recherche afin qu'ils sachent où indexer votre contenu. Pour notre contenu, nous voulons que les lecteurs anglophones le voient.
- `<head></head>` - Toutes vos pages web auront besoin de métadonnées importantes. Elles doivent indiquer aux navigateurs comment gérer les redimensionnements de fenêtre, quels jeux de caractères votre page utilise, quel est le titre, quel est le favicon (le petit logo dans l'onglet du navigateur), où se trouve la feuille de style CSS, etc. La balise `<head>` (qui précède la balise `body`, évidemment) contient toutes les métadonnées importantes. Rien de ce qui est _affiché_ à l'utilisateur (comme une div ou un h1) ne sera _jamais_ placé dans la balise `<head>`. C'est _juste_ des métadonnées.
- `<meta>` - Bon, donc toutes ces balises meta fournissent au navigateur des informations sur la manière de traiter vos documents :
  - La partie `charset="UTF-8"` indique que votre document est rédigé en utilisant l'ensemble de caractères UTF-8. Cela signifie essentiellement que vous pouvez utiliser tous les caractères/lettres/chiffres/émoticônes/etc. que vous vous attendez à pouvoir utiliser. Un autre exemple (que vous n'utiliseriez jamais) est ASCII (comme dans l'art ASCII). ASCII est un ensemble de caractères beaucoup plus restreint qui ne prendrait pas en charge les émoticônes, par exemple. ASCII ne peut même pas afficher bon nombre des caractères que vous vous attendez à pouvoir utiliser, comme les accents non anglophones. En d'autres termes, incluez toujours cette ligne et ne vous en souciez plus. C'est toujours UTF-8.
  - `name="viewport" content="width=device-width, initial-scale=1.0"` - Cela indique au navigateur comment gérer spécifiquement les appareils mobiles tels que les téléphones et les petites tablettes. Si vous n'incluez pas cela, le navigateur pourrait simplement afficher une vue très zoomée de votre site web et il serait très difficile à lire. Cela vous permet d'améliorer le traitement du contenu par les navigateurs mobiles et de le rendre plus conforme à vos attentes. Incluez toujours cela également.
- `<title></title>` : vous permet de définir le titre qui s'affiche dans l'onglet du navigateur. Il sera également le titre du résultat de recherche lorsque les gens le rechercheront sur Google.
- `<body></body>` : Tout votre HTML visible ira ici. Vos divs, spans, tables, h1s, etc., tout cela est ici.

C'est le squelette de base d'un document HTML. Vous pouvez littéralement copier/coller cela d'un projet à l'autre. Vous pouvez laisser de côté certaines de ces choses, mais je ne le recommande pas. Cela oblige le navigateur à deviner ce que vous avez voulu dire, et cette interprétation peut varier entre Safari, Edge, Chrome, Firefox, etc. Il vaut mieux être explicite.

Parlons maintenant du fait d'avoir plusieurs documents HTML dans un seul projet. Ajoutez cette balise dans le fichier index.html que nous avons créé :

```display-html
<a href="about.html">À propos</a>

```

Ensuite, créez un nouveau fichier appelé about.html (doit être dans le même répertoire) et ajoutez ceci à l'intérieur :

display

```display-html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>À propos</title>
  </head>
  <body>
    <h1>À propos de moi</h1>
    <a href="index
  </body>
</html>

```

Maintenant, ouvrez index.html dans votre navigateur. Vous pouvez soit faire glisser le fichier dans votre navigateur, soit utiliser le raccourci CMD+O (ou CTRL+O) pour ouvrir la boîte de dialogue d'ouverture. Une fois cela fait, essayez de cliquer sur les liens. Vous devriez pouvoir naviguer entre les deux pages (s'ils sont dans le même répertoire). Nous allons exploiter cela dans le projet.

N'hésitez pas si vous avez d'autres questions !
