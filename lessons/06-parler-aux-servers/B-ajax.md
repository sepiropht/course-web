---
description: ""
title: "AJAX"
---

Qu'est-ce qu'une API ? Une interface de programmation d'application est une URL à laquelle vous pouvez faire des requêtes pour obtenir des informations en retour. C'est comme un site web, mais seulement pour les machines. C'est une méthode qu'un ordinateur peut utiliser pour demander des informations à un autre.

> Notez que le terme API est également utilisé pour décrire comment quelque chose est utilisé. Si j'écrivais un objet chien en JavaScript et que je lui donnais deux méthodes : manger() et aboie(), vous pourriez appeler ces deux méthodes son "API". Cela a une signification légèrement différente du terme, mais je le mentionne car cela peut prêter à confusion. Dans le reste de ce cours, nous parlons des points d'accès que nous pouvons appeler pour obtenir des données.

Maintenant que nous parlons le langage des API, plongeons dans la réalisation de certaines requêtes serveur. Examinons le processus hypothétique.

Supposons que vous créiez une page météo où l'utilisateur entre son code postal et reçoit la prévision de la journée.

1. L'utilisateur accède à votre page et la page se charge.
1. L'utilisateur tape 98109 dans la barre de recherche et appuie sur Entrée.
1. Votre application envoie une requête à api.example.com/weather?zip=98109.
1. La réponse de l'API est { "temperature": 75, "unités": "F" }.
1. Votre application décode la chaîne en un objet en utilisant JSON.parse.
1. Votre application met à jour la page pour afficher "La température actuelle est de 75ºF".
   Alors, plongeons dans quelques points :

Qui crée l'API ? Cela dépend. Cela pourrait être vous ; votre frontend pourrait faire des requêtes vers un serveur que vous avez écrit vous-même (un sujet pour un autre cours). Ou cela pourrait être contre une multitude d'API publiques et gratuites. Ou cela pourrait être un service que vous payez.
[Consultez ces API disponibles publiquement][apis]. [dog.ceo][dog] est l'une de mes préférées.
Dans notre cas, nous allons effectuer des requêtes sur une API que Frontend Masters gère pour nous. [Voir ici][pets] pour voir une requête d'exemple.
Quelle est la partie ?zip=98109 de la requête ? Cela s'appelle une chaîne de requête. Cela nous permet d'envoyer des paramètres à une requête (comme envoyer des paramètres à une fonction) qu'elle peut utiliser. Dans ce cas, nous envoyons le code postal pour lequel nous voulons la météo. Si vous souhaitez plusieurs requêtes, elles sont séparées par un &, par exemple example.com/weather?zip=98109&day=tomorrow.
Les variables que vous envoyez via la chaîne de requête seront déterminées par l'API.
D'accord, alors faisons notre première requête à l'API de chiens. Je vais l'associer à un bouton pour ne pas surcharger nos pauvres API amies. Utiliser constamment ces API n'est pas gratuit.

Je ne prends pas la responsabilité des images renvoyées. Elles devraient toutes être de mignons chiots.

```display-html
<button id="dog-btn">Donne-moi un chien !</button>

<div id="dog-target"></div>
<button id="dog-btn">Donne-moi un chien !</button>

<div id="dog-target"></div>
```

```javascript
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.getElementById("dog-target");

function ajouterNouveauChien() {
  const promesse = fetch(DOG_URL);
  promesse
    .then(function (response) {
      const promesseDeTraitement = response.text();
      return promesseDeTraitement;
    })
    .then(function (reponseTraitee) {
      const objetChien = JSON.parse(reponseTraitee);
      const img = document.createElement("img");
      img.src = objetChien.message;
      img.alt = "Mignon chien";
      doggos.appendChild(img);
    });
}

document
  .getElementById("dog-btn")
  .addEventListener("click", ajouterNouveauChien);
```

Analysons cela.

Les requêtes prennent du temps. Le processus d'appeler Internet, d'atteindre le serveur, de traiter la réponse et de la renvoyer prend du temps. Cela peut être très rapide. Cela peut prendre une minute. Vous ne le saurez pas avant que cela se produise. Vous devez avoir la capacité d'attendre dans votre code. Cela s'appelle du code asynchrone, le A dans AJAX.

JavaScript a plusieurs façons de gérer cela. Nous utilisons une méthode appelée les promesses. Une promesse représente une valeur future. Avec une promesse, vous pouvez lui donner une fonction avec sa fonction then à exécuter lorsque vous obtenez sa réponse. Dans ce cas, nous disons "hé, tu vas obtenir un texte de cette API, nous avons donc besoin de ce texte.

fetch est une fonction (intégrée au navigateur) qui vous permet de lui donner une URL comme https://dog.ceo/api/breeds/image/random et elle essaiera d'obtenir des informations à partir de cette API. Dans notre cas, nous demandons une image aléatoire d'un chien.

fetch vous renvoie une promesse. Ensuite, nous devons lui dire ce que nous pensons que l'API va nous renvoyer. Dans notre cas, nous disons que ce sera le texte() de l'API. Il en existe d'autres (et je vous en montrerai un dans un instant).

Vous pouvez utiliser ce qui s'appelle l'enchaînement des promesses. Cela vous permet de faire une action asynchrone après une autre. Dans notre cas, nous ne savons pas combien de temps il faudra pour transformer notre réponse en texte (c'est généralement instantané, mais cela pourrait ne pas l'être). En tout cas, en retournant la promesse à la fin du premier then, nous pouvons ensuite utiliser ses données dans le deuxième then. C'est pourquoi c'est étrange de cette manière.

Dans le deuxième then, nous lisons le message qui contient l'URL, nous créons une balise img, et nous l'ajoutons au DOM. Le résultat est que nous obtenons une superbe photo de chien !

D'accord, modifions légèrement cela.

```display-html
<button id="dog-btn">Donne-moi un chien !</button>

<div id="dog-target"></div>
<button id="dog-btn2">Donne-moi un chien !</button>

<div id="dog-target2"></div>
```

```javascript
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.getElementById("dog-target2");

function ajouterNouveauChien() {
  const promesse = fetch(DOG_URL);
  promesse
    .then(function (response) {
      const promesseDeTraitement = response.json(); // json au lieu de text
      return promesseDeTraitement;
    })
    .then(function (reponseTraitee) {
      // nous pouvons ignorer cette ligne car ce sera déjà un objet
      // const objetChien = JSON.parse(reponseTraitee);

      const img = document.createElement("img");
      img.src = reponseTraitee.message;
      img.alt = "Mignon chien";
      doggos.appendChild(img);
    });
}

document
  .getElementById("dog-btn2")
  .addEventListener("click", ajouterNouveauChien);
```

Une légère différence, mais si nous savons que nous allons obtenir du JSON de l'API, fetch peut faire l'analyse directement pour vous avec la fonction json().

[apis]: https://github.com/toddmotto/public-apis
[dog]: https://dog.ceo/dog-api/
[pets]: http://pets-v2.dev-apis.com/pets
