---
description: ""
---

Nous avons pu modifier le HTML et le CSS à l'aide de JavaScript en utilisant document. Génial ! Nous allons maintenant aller un peu plus loin et commencer à impliquer l'utilisateur. Les sites Web sont censés réagir aux utilisateurs. Pour être réactifs à eux, nous devons attendre qu'ils fassent quelque chose, comme cliquer sur un bouton ou saisir quelque chose dans un champ de saisie. La manière dont nous faisons cela est d'attendre que des événements se produisent. Un événement est créé chaque fois que certains événements se produisent, comme lorsqu'un utilisateur clique sur quelque chose ou tape quelque chose. Nous répondons à ces événements en ajoutant ce qu'on appelle des écouteurs d'événements. Nous attribuons à un écouteur d'événements une fonction à exécuter chaque fois qu'un événement se produit. Voyons comment répondre à un clic lorsque l'utilisateur clique sur un bouton.

REMARQUE : Étant donné qu'il est possible qu'une balise unique ait plusieurs écouteurs, à chaque fois que vous tapez dans la boîte de code, vous ajoutez plus d'écouteurs d'événements au même bouton. Par conséquent, vous obtiendrez plusieurs alertes.

```html
<button class="event-button">Cliquez ici !</button>
```

```javascript
const bouton = document.querySelector(".event-button");
bouton.addEventListener("click", function () {
  alert("Salut !");
});
```

Décortiquons cela :

Nous récupérons le bouton à l'aide de querySelector et le stockons dans la variable JavaScript bouton.
Ensuite, nous appelons la méthode addEventListener sur le bouton. Cela prend deux paramètres (inutile de mémoriser cela, vous pouvez toujours le rechercher) : le nom de l'événement auquel vous souhaitez répondre, qui dans ce cas est l'événement click, et une fonction qui est appelée chaque fois que cet événement se produit. Cette fonction est souvent appelée un rappel car elle est rappelée à chaque fois que l'événement se produit.
Nous appelons ensuite une fonction appelée alert. alert est une fonction très, très agaçante qui ouvre une boîte de dialogue avec le message que vous lui fournissez.
Les gens sont souvent confus de voir }); à la dernière ligne. Le premier } ferme la fonction, le deuxième ) ferme l'appel de fonction de addEventListener, et ; termine l'instruction.
alert provient du DOM. Techniquement, il s'agit de window.alert, mais lorsque vous travaillez dans un navigateur, vous pouvez toujours omettre window car il est implicite. Cela se produit principalement avec window, donc ne vous en préoccupez pas trop. Cela ne pose problème que lorsque vous commencez à écrire du code pour Node.js, ce qui dépasse le cadre de cette leçon.

Faisons un autre exemple avec une balise input.

```html
<input placeholder="tapez ici !" class="input-to-copy" />

<p class="p-to-copy-to">Rien ne s'est encore produit.</p>
```

```javascript
const champInput = document.querySelector(".input-to-copy");
const paragraphe = document.querySelector(".p-to-copy-to");

champInput.addEventListener("keyup", function () {
  paragraphe.innerText = champInput.value;
});
```

Essayez de taper dans le champ de saisie. Vous verrez que tout ce que vous tapez dans le champ de saisie sera instantanément reflété dans la balise p. Plutôt cool, n'est-ce pas ?

Nous utilisons maintenant l'événement keyup. Cet événement se produit chaque fois que vous relâchez une touche après l'avoir enfoncée. Comme vous pouvez le deviner, il existe également un événement keydown qui se déclenche lorsque vous appuyez sur une touche. Nous utilisons keyup car keydown se produit avant qu'une touche soit réellement enregistrée, ce qui signifie que nous serions toujours en retard d'une touche.
Nous faisons référence à champInput.value. La propriété value d'une balise input reflète tout ce que l'utilisateur a saisi dans le champ de saisie.
Nous prenons ce qui se trouve dans champInput.value et le passons directement à paragraphe.innerText. Comme cette fonction est appelée à chaque fois qu'un utilisateur tape dans le champ de saisie, les deux restent synchronisés !
Un dernier exemple, puis nous passerons à autre chose.

```css
.color-box {
  background-color: limegreen;
  width: 100px;
  height: 100px;
}
```

```html
<div class="color-box"></div>
<input class="color-input" placeholder="Tapez une couleur ici !" />
```

```javascript
const champInput = document.querySelector(".color-input");
const paragraphe = document.querySelector(".color-box");

champInput.addEventListener("change", function () {
  paragraphe.style.backgroundColor = champInput.value;
});
```

Similaire à ci-dessus. La principale différence ici est que nous écoutons les événements change. Les événements change se produisent chaque fois qu'un utilisateur saisit quelque chose dans le champ de saisie, puis retire le focus du champ en cliquant ailleurs ou en appuyant sur la touche Tab pour changer le focus. Essayez de taper "red" puis cliquez ailleurs. Essayez aussi quelque chose qui n'est pas une couleur. Remarquez que si vous entrez une couleur invalide, cela ne change rien.

Délégation d'événements
Si vous avez plusieurs éléments sur lesquels vous devez écouter des événements, vous pourriez attacher un écouteur d'événements à chaque élément, mais cela peut être un peu fastidieux à faire. À la place, il est parfois plus facile d'utiliser ce qu'on appelle le bouillonnement des événements. Lorsqu'un événement se déclenche sur un élément, il "remonte" jusqu'à son parent, puis à son parent, et ainsi de suite jusqu'à l'élément racine.

```html
<div class="button-container">
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>4</button>
  <button>5</button>
</div>
```

```javascript
document
  .querySelector(".button-container")
  .addEventListener("click", function (event) {
    alert(`Vous avez cliqué sur le bouton ${event.target.innerText}`);
  });
```

Vous pouvez voir que nous avons ajouté un seul écouteur d'événements, et c'était sur la balise div au-dessus des boutons. Ensuite, lorsque nous cliquons sur un bouton, nous utilisons le paramètre event qui est passé dans le rappel. Vous vous demandez peut-être d'où il vient. Il a toujours été là, nous l'ignorons simplement. Le premier paramètre d'un écouteur d'événements est toujours un objet d'événement. Il y a beaucoup d'informations dans l'objet d'événement, mais nous sommes surtout intéressés par event.target. target est la balise à partir de laquelle l'événement a été déclenché. Dans ce cas, ce sera le bouton qui a déclenché l'événement. Et nous savons qu'avec les balises, vous pouvez utiliser la propriété innerText pour obtenir le texte à l'intérieur d'elles. C'est ainsi que nous sommes en mesure d'afficher le bon numéro.
