## Types de balises

Explorons donc quelques-uns des types de balises essentiels.

`h1`, `h2`, `h3`, `h4`, `h5`, et `h6` - Titres. Il s'agit des six niveaux de titres et de sous-titres que vous pouvez avoir. Vous pouvez voir en haut de cette page que nous avons `HTML` qui est un h1 et en dessous nous avons `Types de balises` qui est un h2. Un h2 est un sous-titre d'un h1. Un h3 est un sous-titre d'un h2. Certaines écoles de pensée affirment que chaque page ne devrait avoir qu'un seul h1. Je suis d'avis qu'il suffit d'utiliser les h1 comme il convient. Comme pour le formatage d'un document Microsoft Word, il n'y a pas de "bonne" façon de faire, mais des façons différentes qui ont plus ou moins de sens. Exemple `<h1>Titre du document</h1>`.

```html
<h1>Ceci est un h1!</h1>
<h2>Ceci est un h2!</h2>
<h3>Ceci est un h3!</h3>
<h4>Ceci est un h4!</h4>
<h5>Ceci est un h5!</h5>
<h6>Ceci est un h6!</h6>
```

`p` - Paragraph. You'll put a paragraph of text together inside of a `p` tag. Only text goes in `p` tags. Each one of these paragraphs is a `p` tag. Example: `<p>A paragraph of text</p>`.

```html
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt modi est
  sapiente in optio quia inventore quis maxime ullam tenetur?
</p>
<p>
  Maxime quibusdam, dolorum quaerat ducimus inventore sunt pariatur et ea dolore
  ipsam. Distinctio eum nobis officiis quam quasi exercitationem eaque?
</p>
```

`a` – Anchor. An `a` tag is a link to somewhere else. <a href="#">This is a link that goes nowhere</a>. Every `a` tag needs a destination of where the link should take you. We'll talk about that in the **Attributes** section. Example: `<a href="https://www.frontendmasters.com">Frontend Masters</a>`.

```html
<a href="https://www.frontendmasters.com">Frontend Masters</a>
<a href="https://aka.ms/visual-studio-code">Visual Studio Code</a>
<a href="https://www.codepen.io">CodePen</a>
```

`div` - Abréviation de division. Une div est un peu comme une boîte en carton. Elle n'est pas vraiment quelque chose en soi ; elle est plus définie par ce qu'elle contient. Il s'agit d'une balise conteneur générique permettant de regrouper d'autres éléments. Vous utiliserez beaucoup de divs. Très utile avec CSS. En général, vous souhaitez regrouper des éléments "similaires" dans une balise de contenu (comme une div) afin de les maintenir ensemble. Si vous avez un site web avec une liste d'articles de blog qui ont chacun des paragraphes, des titres, des images, etc., vous regrouperez chaque article dans une balise div ou une autre balise de type conteneur.

```html
<div style="width: 100px; height: 100px; background-color: red;"></div>
```

`span` – A container for small pieces of text. If a div is like a cardboard box, a span is like a Ziploc bag. It doesn't change the styling of anything by itself but it allows you use CSS and JavaScript later to make that text different in some way. Example: `<p>Here is some text. <span>This text is in a span</span> but it doesn't look any different.</p>`

```html
<p>This is <span style="text-decoration: underline">important</span> text</p>
```

`ol`, `ul`, et `li` - `ol` et `ul` représentent tous deux des listes. En fait, cette liste de différents tags est un `ul` ! Un `ul` est une liste non ordonnée : c'est une liste de choses qui peuvent être mélangées et qui signifient toujours la même chose. Si je vous demandais de lister toutes les équipes d'une ligue sportive, ou tous les personnages d'une série télévisée, vous pourriez les présenter dans n'importe quel ordre. Un `ol` est une liste organisée : ce qui vient en premier a de l'importance. Si je vous demande d'énumérer les dix villes les plus peuplées du monde, il y a un ordre à respecter et le fait de changer l'ordre rend la liste incorrecte. Dans les deux cas, chaque élément de la liste est un `li`. Exemple :`<ul><li>Bob</li><li>Eve</li><li>Alice</li></ul>`

```html
<ol>
  <li>The First One</li>
  <li>The Second One</li>
  <li>The Third One</li>
</ol>

<ul>
  <li>An Item in the List</li>
  <li>Another Item in the List</li>
  <li>A Yet Different Item in the List</li>
</ul>
```

`button` – Un ... bouton. Un bouton peut être utilisé par JavaScript pour répondre à un clic de l'utilisateur, ou il peut être utilisé par un formulaire pour signaler que l'utilisateur a fini de le remplir et qu'il doit soumettre les données. Pensez-y comme à la sonnette de votre maison : vous pouvez placer le bouton de la sonnette à cet endroit, mais il ne servira pas à grand-chose si vous ne le reliez pas à la sonnerie. Exemple :`<button>Click me!!</button>`

```html
<button>Cliquez sur moi ! Je ne fais rien</button>
```

`img` – Une image. Vous l'utilisez pour charger des images sur la page. Cela peut prêter à confusion, car il est également possible d'utiliser des feuilles de style CSS pour insérer des images. La principale différence est que lorsque l'image fait partie du contenu, comme un diagramme qui montre les données dont vous parlez ou une image qui montre quelque chose de l'article, elle doit être une balise `img`. S'il s'agit d'une belle image de fond ou d'une décoration de votre site web, utilisez CSS. Une balise `img` a besoin d'un `src` pour indiquer d'où vient l'image et d'un `alt` pour indiquer ce que contient l'image pour les lecteurs d'écran afin que l'image soit toujours utile aux personnes aveugles, aux personnes malvoyantes et aux moteurs de recherche Google et Bing. Les balises `img` se ferment toujours d'elles-mêmes. Exemple : `img` est toujours une balise qui se ferme d'elle-même :`<img src="http://pets-images.dev-apis.com/pets/dog25.jpg" alt="an adorable dog" />`

```html
<img
  src="http://pets-images.dev-apis.com/pets/dog25.jpg"
  alt="an adorable puppy"
/>
<img
  src="http://pets-images.dev-apis.com/pets/dog26.jpg"
  alt="an adorable puppy"
/>
<img
  src="http://pets-images.dev-apis.com/pets/dog27.jpg"
  alt="an adorable puppy"
/>
```

`input` – Entrées du navigateur. Il est parfois nécessaire de recueillir des informations auprès de l'utilisateur. Heureusement pour nous, le navigateur est déjà très doué pour cela. Il nous offre plusieurs types d'entrées que vous pouvez utiliser. L'un des plus courants est l'entrée de texte, que l'on voit ici : <input value="you can type in me" />. Vous pouvez également utiliser ces balises `input` pour les nombres, les dates, les couleurs, les cases à cocher, les boutons radio, et d'autres encore. Nous les explorerons plus en détail plus tard lorsque nous parlerons des formulaires. Les entrées sont toujours des balises qui se ferment d'elles-mêmes. Exemple : `img` est toujours une balise qui se ferme d'elle-même :

```html
<!-- these are the same, type="text" is the default -->
<input />
<input type="text" />

<input type="color" />
<input type="file" />
<input type="number" />
<input type="datetime-local" />
<input type="radio" />
<input type="checkbox" />
```

`textarea` – Similaire à une entrée, mais pour beaucoup plus de texte. On y tape des réponses longues qui peuvent comporter des sauts de ligne (un saut de ligne se produit lorsque vous appuyez sur "return" ou "enter" sur votre clavier.) Bien qu'il n'y ait jamais rien à l'intérieur d'une `textarea`, ce n'est pas une balise qui se ferme d'elle-même. Le HTML est un très vieux langage et nous devons donc vivre avec quelques vieilles bizarreries. Exemple :`<textarea></textarea>`

```html
<textarea></textarea>
```

`select` and `option` — Il arrive que l'on veuille limiter un utilisateur à un certain groupe d'options. Quel est votre pays d'origine, quel est votre mois de naissance, etc. Une `sélection` est une entrée interactive permettant à l'utilisateur de sélectionner une option dans un menu déroulant. Une `option` est une des options disponibles. Chaque `option` a besoin d'une valeur qui sera renvoyée au serveur si l'utilisateur sélectionne cette `option`. Ce qui se trouve à l'intérieur de l'option est ce qui est affiché à l'utilisateur. `<select><option value="seattle">Seattle</option><option value="portland">Portland</option><option value="san-francisco">San Francisco</option></select>`

```html
<select>
  <option value="seattle">Seattle</option>
  <option value="portland">Portland</option>
  <option value="san-francisco">San Francisco</option>
</select>
```

`form` –Groupe de balises html permettant de recueillir des données auprès d'un utilisateur. Il s'agit d'une combinaison de balises `input`, `textarea` et `select`. Vous pouvez ensuite utiliser cet élément `form` pour envoyer ces données à votre serveur. La balise `form` elle-même n'affiche rien, c'est juste un conteneur pour les autres balises. Nous les utiliserons plus tard. Pour l'instant, il suffit de savoir qu'elles existent. Exemple :`<form><input /><textarea></textarea></form>`

```html
<form>
  <input placeholder="First Name" />
  <input placeholder="Last Name" />
</form>
```

`table`, `tr`, and `td` – Comme la création d'un tableau dans Word ou Excel. Si vous avez un tableau de données, c'est la meilleure façon de l'afficher. Juste pour vous mettre en contexte, nous avions l'habitude de faire des choses terribles, horribles avec des `tableaux` pour faire des sites web, il y a bien longtemps. Pour cette raison, certains tutoriels vous diront de ne jamais utiliser de `table`. Ce n'est pas bon non plus parce que quand vous avez des données tabulaires (quelque chose que vous mettriez dans Excel) alors les `tablets` sont très utiles. Le `table` est le conteneur pour le tableau entier, `tr` représente une ligne, et `td` représente une cellule dans le tableau. Exemple :`<table><tr><td>(0,0)</td><td>(1,0)</td></tr><tr><td>(0,1)</td><td>(1,1)</td></tr></table>`

```html
<table>
  <tbody>
    <tr>
      <td>(0,0)</td>
      <td>(1,0)</td>
    </tr>
    <tr>
      <td>(0,1)</td>
      <td>(1,1)</td>
    </tr>
  </tbody>
</table>
```

Il existe beaucoup, beaucoup, beaucoup d'autres balises. Voici un aperçu des plus utiles et des plus courantes.

```html
<!-- vieille balise obsolète datant de l'époque de MySpace -->
<marquee>
  Il s'agit d'une fonctionnalité très ancienne qui ne fonctionne que dans
  certains navigateurs. Vous ne devriez jamais l'utiliser pour un vrai site web.
</marquee>
```

## Comments

En tant que codeurs, nous oublions ce que font les choses. Nous écrivons des choses très compliquées ou dont nous savons qu'elles seront difficiles à comprendre plus tard. Il faut garder à l'esprit que vous écrivez principalement du code pour vous, que vous lirez plus tard, et non pour l'ordinateur. La partie la plus difficile de l'écriture d'un code est de devoir le maintenir plus tard, et non de l'écrire la première fois. Écrire du code la première fois est la partie la plus facile. Revenir en arrière et essayer de se souvenir de ce à quoi vous pensiez est la partie la plus difficile.

C'est là que les commentaires peuvent être utiles. Vous pouvez laisser de petites notes dans votre code que l'ordinateur ne lira pas, il les ignorera simplement. En HTML, la façon d'écrire un commentaire est `<!-- vos commentaires vont ici -->`. Laissez toutes les notes dont vous avez besoin entre le `<!--` et le `-->` pour que vous puissiez plus tard revenir à votre code et vous souvenir de ce que vous faisiez. Attention à ne pas tomber dans l'excès, car des commentaires comme `<h1>Titre de l'article</h1><!-- le titre -->` ne sont pas utiles, car il est évident qu'il s'agit du titre. Il est préférable d'avoir un code qui se décrit lui-même et qui n'a pas besoin de commentaires ; cependant, lorsque cela ne fonctionne pas, les commentaires peuvent être utiles.

## Une note sur les retours à la ligne forcées

Voici une chose que les novices en HTML ont du mal à comprendre : comment faire pour avoir un retour à la ligne au milieu de mon texte ?

```display-html
<p>
  Voici un peu de texte.

  Voici un peu plus de texte.
</p>
```

^^ Cela ne fonctionne pas. Le rendu sera le suivant :

<p>Voici du texte. Voici un peu plus de texte.

Alors, comment faire pour diviser le texte ? There's the "correct"/"new" way and the "incorrect"/"old" way.

Correcte :

```html
<p>Voici un peu de texte.</p>
<p>Ceci est un peu plus de texte.</p>

<p>Voici encore un peu de texte.</p>
```

C'est ainsi qu'il faut procéder. La balise `p` existe pour que vous puissiez avoir des paragraphes. Si vous voulez un saut de ligne, vous devez utiliser les balises `p` pour y parvenir. Lorsque c'est possible (ce qui devrait être presque toujours le cas), vous devriez procéder de cette manière.

Ce n'est pas correct :

```html
<p>
  This is some text.
  <br />
  This is some more text.
</p>
```

La balise `br` est une balise de retour à la ligne et était très courante auparavant. Cependant, ce n'est plus la manière correcte de le faire (mais vous la verrez encore). Elle peut être utile occasionnellement et vous la verrez parfois dans la documentation, donc je voulais que vous sachiez qu'elle existe, qu'elle fonctionne, et que ce n'est pas la manière préférée de faire des sauts de ligne.
