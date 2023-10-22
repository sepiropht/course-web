Parlons de l'organisation de HTML et de comment en tirer le meilleur parti. Cela vous sera d'une grande aide une fois que vous aborderez la section CSS.

Disons que vous créez un site de médias sociaux et que vous allez créer la section "fil d'actualité" où vous pouvez voir toutes les mises à jour de vos amis. Un utilisateur s'attendrait à voir plusieurs publications. Chaque publication pourrait avoir un auteur, une date de publication, une photo de profil et le message que l'utilisateur a posté. Modélisons cela en HTML :

```html
<div>
  <h2>@sassy_pants_mcgee</h2>
  <h3>Posté il y a 15 minutes</h3>
  <img src="http://pets-images.dev-apis.com/pets/dog25.jpg" alt="un chiot" />
  <p>
    Vous êtes-vous déjà demandé ce que cela ferait d'aboyer par la fenêtre ? Que
    se passerait-il si je ne leur aboyais pas dessus ? Ça me hante la nuit.
  </p>
</div>
```

Remarquez que nous gardons tout ensemble avec une balise <div>. Comme je l'ai dit précédemment, c'est un conteneur, une boîte en carton. Nous avons une publication et nous la gardons entière avec une balise <div> encapsulante. Nous aurions aussi pu utiliser la balise <article></article>. Quelle est la différence entre "article" et "div" ? En ce qui concerne le navigateur, rien. Gardez à l'esprit que vous n'écrivez pas seulement du code une fois, vous devez aussi y revenir plus tard pour le maintenir. Et si un bogue survient plus tard et que vous devez déboguer ce qui ne va pas ? Il est bon d'écrire un code qui rend très évident ce que vous essayez de faire. Dans ce cas, la balise <article> permet à votre futur vous (ou à vos collègues) de savoir qu'il s'agit d'un contenu autonome. Les <div> n'ont pas de signification particulière. Comme une boîte en carton, c'est ce qui est à l'intérieur qui compte. Un article est une boîte en carton avec une étiquette qui dit que c'est un contenu autonome. Les deux sont valides ici, mais continuons avec les <div> (car c'est ce que vous verrez le plus souvent).

Améliorons cela. Ajoutons des classes.

```html
<div class="social-post">
  <h2 class="user-name">@sassy_pants_mcgee</h2>
  <h3 class="posted-date">Posté il y a 15 minutes</h3>
  <img
    class="profile-picture"
    src="http://pets-images.dev-apis.com/pets/dog25.jpg"
    alt="un chiot"
  />
  <p class="social-post-text">
    Vous êtes-vous déjà demandé ce que cela ferait d'aboyer par la fenêtre ? Que
    se passerait-il si je ne leur aboyais pas dessus ? Ça me hante la nuit.
  </p>
</div>
```

Remarquez que l'apparence est exactement la même. Mais maintenant, essayez de lire le code que nous venons d'écrire au lieu de celui d'avant. Tout est bien plus clair. Nous avons pris une étiqueteuse et tout étiqueté. Ce code est bien plus facile à maintenir.

De plus, c'est maintenant réutilisable. Nous pourrions avoir un fil complet de ces éléments.

```html
<div class="social-feed">
  <div class="social-post">
    <h2 class="user-name">@sassy_pants_mcgee</h2>
    <h3 class="posted-date">Posté il y a 15 minutes</h3>
    <img
      class="profile-picture"
      src="http://pets-images.dev-apis.com/pets/dog25.jpg"
      alt="un chiot"
    />
    <p class="social-post-text">
      Vous êtes-vous déjà demandé ce que cela ferait d'aboyer par la fenêtre ?
      Que se passerait-il si je ne leur aboyais pas dessus ? Ça me hante la
      nuit.
    </p>
  </div>
  <div class="social-post">
    <h2 class="user-name">@TailCurious</h2>
    <h3 class="posted-date">Posté il y a 18 minutes</h3>
    <img
      class="profile-picture"
      src="http://pets-images.dev-apis.com/pets/dog26.jpg"
      alt="un autre chiot"
    />
    <p class="social-post-text">
      Avez-vous déjà remarqué ce petit morceau de peluche derrière vous ? C'est
      seulement moi ? J'essaie toujours de le pourchasser mais il s'échappe
      toujours. #QueueEffrayante
    </p>
  </div>
  <div class="social-post">
    <h2 class="user-name">@haveUrCakeAndEatIt2</h2>
    <h3 class="posted-date">Posté il y a 21 minutes</h3>
    <img
      class="profile-picture"
      src="http://pets-images.dev-apis.com/pets/dog27.jpg"
      alt="un chiot"
    />
    <p class="social-post-text">#AnniversaireGrrrrrrrrrrl</p>
  </div>
</div>
```

J'ai utilisé une balise <div> pour envelopper tout le fil social, puis j'ai réutilisé notre structure ci-dessus pour recréer plusieurs fois la même publication. Plutôt sympa, non ? Nous construisons un composant une fois, puis nous le réutilisons à maintes reprises. J'imagine qu'ensuite, nous placerions la balise <div class="social-feed"> à l'intérieur d'un autre composant <div class="news">, puis cela à l'intérieur de notre page <div class="app">. Notre <div class="app"> pourrait contenir une barre de navigation, le contenu des actualités, un pied de page, une barre latérale et d'autres éléments. Mais nous ferions simplement des éléments imbriqués comme nous l'avons fait avec notre <div class="social-feed">.

Construisons maintenant une barre de navigation pour le plaisir.

```html
<nav>
  <ul class="nav-list">
    <li class="nav-list-item">
      <a class="nav-link" href="/">Accueil</a>
    </li>
    <li class="nav-list-item">
      <a class="nav-link" href="/actualites">Fil d'actualité</a>
    </li>
    <li class="nav-list-item">
      <a class="nav-link" href="/a-propos">À propos</a>
    </li>
    <li class="nav-list-item">
      <a class="nav-link" href="/contact">Contact</a>
    </li>
  </ul>
</nav>
```

Quelques points à noter ici :

Il n'est évidemment pas stylisé. Nous nous attendrions à ce qu'il ressemble à la barre de navigation sur ce site : horizontal et fixé en haut. Ne vous inquiétez pas de cela pour le moment, nous corrigeons tout cela avec le CSS. Pour l'instant, nous n'écrivons que du HTML et nous nous préoccupons uniquement du contenu et non du style. (Le CSS peut essentiellement faire en sorte que n'importe quel contenu ait l'apparence que vous souhaitez.)
Ces liens ne vont nulle part si vous cliquez dessus. Ce sont des liens relatifs. Si vous avez un lien absolu comme href="www.google.com", cela vous mènera réellement à Google. Mais si votre site web est www.example.com et que vous avez un lien vers href="/a-propos", cela vous mènera à www.example.com/a-propos. C'est relatif à l'URL de base. Le slash initial signifie que c'est toujours www.example.com/a-propos, peu importe où vous vous trouvez sur le site. Si vous êtes sur www.example.com/blah et qu'il y a un lien vers href="a-propos" sans slash, le lien vous mènera à www.example.com/blah/a-propos, tandis que href="/a-propos" vous mènera à www.example.com/a-propos.
Nous n'avons pas attribué de classe à la balise <nav>. Si vous avez seulement une barre de navigation, cela peut avoir du sens. Si vous en avez plusieurs (peut-être une dans le pied de page et une dans la barre latérale), alors vous voudriez lui attribuer une classe. Tout n'a pas nécessairement besoin d'avoir une classe.
J'ai choisi de le faire avec une liste non ordonnée (<ul>) et des éléments de liste (<li>). Vous auriez pu utiliser des balises <div> à l'intérieur d'autres <div> et simplement utiliser des classes pour les différencier. Les deux façons de faire sont tout à fait valides.
Il n'y a pas de méthode magique pour nommer des classes. J'ai utilisé nav-list, mais cela aurait tout aussi bien pu être menu-navigation. Cela dépend de ce qui a du sens pour vous. Le choix des noms est difficile.
Voilà ! Le HTML, c'est à 95 % ce que je vous ai montré.
