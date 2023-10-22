---
description: ""
---

L'une des beautés de la programmation à l'ère moderne est que de nombreuses personnes partagent leur code pour que nous puissions bénéficier de leur travail gratuitement. C'est un mélange de bienveillance, de volonté de faire avancer le monde, d'essayer de se faire un nom, d'ajouter à son propre CV, et d'espérer que vous ouvrirez également votre code source pour qu'ils puissent l'utiliser. L'une des choses les plus importantes que nous faisons en tant que développeurs JavaScript est d'intégrer ces modules de code. Nous verrons aujourd'hui deux façons de le faire.

Il y a tellement de choses que nous pourrions intégrer. Il existe littéralement des centaines de milliers de bibliothèques pour JavaScript. Mais aujourd'hui, nous allons en utiliser une appelée [Popmotion][pop]. Popmotion est une bibliothèque incroyable qui vous permet de créer des animations super cool. Je ne suis pas très doué pour créer des animations moi-même et je ne suis certainement pas très artistique. Mais ces personnes intelligentes ont pris ces concepts difficiles et les ont rendus accessibles. Nous avons l'opportunité de nous appuyer sur le travail de génies.

Ouvrez un nouveau projet, mettez ceci dans le fichier index.html :

```display-html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Animation</title>
    <link href="./animation.css" rel="stylesheet" type="text/css" />
  </head>

  <body>
    <h1>Animation</h1>
    <div class="ball"></div>

    <script src="https://unpkg.com/popmotion@11.0.3/dist/popmotion.global.min.js"></script>
    <script src="./animation.js"></script>
  </body>
</html>
```

L'ordre des balises script est important. La première balise est une version compressée de la bibliothèque qui la rend disponible pour nous dans animation.js (que nous allons écrire). Si vous ne la placez pas en premier, elle ne sera pas disponible pour nous.

Créez un nouveau fichier CSS, mettez-y ceci :

```css
.ball {
width: 100px;
height: 100px;
background-color: #0074d9;
border-radius: 50%;
}

body {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 400px;
}

<style>
  .ball {
    width: 100px;
    height: 100px;
    background-color: #0074d9;
    border-radius: 50%;
    position: relative;
  }
</style>
```

Lorsque vous mettez border-radius: 50%;, cela arrondit tellement les coins que la div finit par être un cercle.

Créez un nouveau fichier appelé animation.js, mettez-y ceci :

```javascript
const ball = document.querySelector(".ball");
popmotion.animate({
  from: "0px",
  to: "100px",
  repeat: Infinity,
  repeatType: "mirror",
  type: "spring",
  onUpdate(update) {
    ball.style.left = update;
  },
});
```

<div class="ball"></div>
Ici, il est moins important que vous compreniez réellement comment fonctionne Popmotion et il est plus important que vous compreniez comment nous l'avons intégré à la page pour qu'il puisse être interagi avec. Remarquez que nous utilisons cet objet popmotion. Celui-ci est injecté dans la page par le script que nous avons chargé avant le nôtre dans le HTML. Cela nous permet d'utiliser l'objet.

Le code que nous avons ajouté utilise la bibliothèque Popmotion pour faire en sorte que la balle bleue rebondisse d'avant en arrière en utilisant une physique réaliste. Vraiment cool, non ? Ce n'est pas quelque chose que le navigateur sait faire nativement, mais en utilisant JavaScript, il le peut ! Si vous voulez en savoir plus sur Popmotion, [consultez leur documentation][pop].

C'est donc la manière rapide et facile d'intégrer une bibliothèque. Un site web moyen aura au moins une dizaine et autant que des centaines de ces dépendances. Il n'est pas faisable de mettre tous ces tags script dans votre HTML. Il existe une meilleure solution !

Construction de votre code
Si ce n'est pas déjà fait, [installez Node.js][node]. J'ai Node.js 16 installé, mais n'importe quelle version supérieure à 10 devrait fonctionner correctement. Node.js est un programme qui vous permet d'exécuter JavaScript à partir du terminal. Vous pouvez exécuter des serveurs web avec (ce que nous ferons à la fin) ou créer des outils vraiment cool. Nous allons construire notre projet en utilisant l'un de ces outils sympas.

Une fois que vous avez installé Node.js, accédez à votre terminal. Lorsque vous avez installé Node.js, vous avez également obtenu un outil appelé npm. npm ne signifie pas Node.js Package Manager, du moins c'est ce qu'ils disent... mais ouais, je pense qu'il s'agit totalement de ça. Quoi qu'il en soit, c'est ce qu'il fait. Il gère les packages JavaScript. Ce qu'il vous permet de faire, c'est d'installer des choses depuis le registre npm. Essayons. Exécutez la commande suivante :

bash
Copy code
npm install --global parcel
Cela va installer plusieurs choses pour vous afin que vous puissiez ensuite utiliser l'outil [parcel][parcel]. Parcel est un outil qui rend super simple l'emballage de tout votre code dans un seul petit paquet soigné. Vous pouvez également installer ce que vous voulez depuis npm et l'inclure aussi ! Ensuite :

D'accord, allez dans votre fichier index.html et supprimez la ligne <script src="https://unpkg.com/popmotion@11.0.3/dist/popmotion.global.min.js"></script>.
Allez dans votre fichier animation.js et ajoutez en haut du fichier, comme toute première ligne : const popmotion = require("popmotion");. Cela indiquera au bundleur d'apporter Popmotion pour vous.
Naviguez dans votre terminal jusqu'à la racine de votre projet d'animation. Exécutez la commande npm init -y. Cela générera un fichier package.json pour vous, qui est la manière dont les projets Node gèrent leur configuration. Nous devons pouvoir suivre les dépendances, et cela le fera.
Exécutez npm install popmotion@11.0.3. Cela installera Popmotion localement sur votre ordinateur au lieu de le charger depuis un

endroit externe. Désormais, vos utilisateurs ne téléchargeront qu'un seul fichier de votre part au lieu d'un fichier de vous et un fichier depuis un autre serveur. Remarquez qu'il y a maintenant un répertoire node_modules dans votre projet d'animation : c'est là que vont toutes vos dépendances installées (c'est ainsi que vous appelez les bibliothèques que vous installez depuis npm).

Exécutez parcel index.html. Il devrait vous indiquer qu'un serveur est en cours d'exécution à l'adresse http://localhost:1234 et il vous dira qu'il a fallu environ 8 secondes pour tout regrouper.

Vous aurez maintenant un serveur de développement local qui fonctionne pour vous ! Ouvrez ce lien localhost et voyez votre site s'exécuter de la même manière. Localhost est un alias de votre propre ordinateur que le navigateur comprend. Le :1234 est le port sur lequel il s'exécute. Pensez-y comme la sélection de la bonne entrée sur votre télévision. Si vous branchez votre Xbox sur HDMI3, vous avez réglé votre téléviseur sur HDMI3 pour voir l'image et entendre le son. C'est la même chose avec les ports. Votre ordinateur en a des milliers, vous devez simplement régler le bon pour vous y connecter.

Vous vous demandez peut-être comment Parcel sait comment assembler le tout. Nous avons indiqué à Parcel le point d'entrée, notre fichier HTML. Notre HTML pointe à la fois vers le fichier CSS et le fichier JS via les balises link et script respectivement. Il les suit ensuite et les rassemble pour vous. Il les divise ensuite en éléments que votre navigateur peut comprendre. Si vous le souhaitez, vous pouvez créer un autre fichier et l'exiger également. Si vous avez créé un fichier appelé "rotate-animation.js", vous pourriez utiliser la fonction require en haut de votre fichier et l'intégrer également. Il vous suffirait de mettre const rotateAnimation = require('./rotate-animation'); et cela l'intégrerait également. Vous avez besoin de ./ sinon Parcel suppose que vous voulez parler d'un module Node (comme Popmotion) au lieu d'un fichier que vous avez écrit. De plus, Node suppose que vous parlez de .js, donc vous pouvez l'omettre (vous pouvez également l'inclure si vous le souhaitez).

require('nom-du-module') est l'ancienne méthode d'importation des modules. La nouvelle méthode utilise import à la place (il y a toute une série de raisons pour lesquelles nous n'entrerons pas dans les détails maintenant). Le nouveau code orienté navigateur doit être écrit de cette manière.

```display-javascript
import { animate } from "popmotion";

const ball = document.querySelector(".ball");
animate({
from: "0px",
to: "100px",
repeat: Infinity,
repeatType: "mirror",
type: "spring",
onUpdate(update) {
ball.style.left = update;
},
});
```

Ceci sera la syntaxe de JavaScript à l'avenir, donc je vous conseillerais de l'adopter. Node.js n'est pas tout à fait prêt pour cela encore, donc nous travaillerons avec CommonJS pour cela, mais à terme, Node y arrivera aussi.

Remarquez que votre processus Parcel n'est pas encore arrêté. Le serveur de développement fonctionne toujours. Si vous souhaitez l'arrêter, appuyez sur CTRL+C. C'est la méthode universelle pour arrêter n'importe quel programme que vous exécutez dans la ligne de commande.

Prochaines étapes
À partir de là, vous avez une bonne base pour vous lancer dans d'autres choses comme les frameworks et les bibliothèques. Heureusement, Frontend Masters regorge de vidéos incroyables sur ces sujets. Jetez un œil à :

[pop]: https://popmotion.io/
[gh]: https://github.com/popmotion/popmotion
[node]: https://nodejs.org/
[parcel]: https://parceljs.org/
[react]: https://frontendmasters.com/courses/complete-react-v7/
[vue]: https://frontendmasters.com/courses/vue-3/
[angular]: https://frontendmasters.com/courses/angular-13/
[svelte]: https://frontendmasters.com/courses/svelte/
[d3]: https://frontendmasters.com/courses/d3/
