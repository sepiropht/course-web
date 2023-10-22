---
title: "JSON"
description: ""
---

Parfois, vous souhaitez demander des données supplémentaires au serveur après que votre page soit chargée. Imaginez le fait de faire défiler votre fil d'actualité Facebook ou Twitter : lorsque vous atteignez le bas, il demande plus de données au serveur pour continuer à faire défiler indéfiniment.

Demander des données au serveur après que la page ait été chargée s'appelle AJAX. AJAX est un ancien acronyme qui existe depuis un moment et qui n'a en réalité plus de sens, mais nous l'utilisons toujours. Il signifie Asynchronous JavaScript and XML (JavaScript et XML asynchrones, bien que nous n'utilisions généralement plus XML). Cependant, le nom AJAX est resté, c'est donc ce qu'il signifie.

Avant de plonger plus profondément dans la partie AJAX, passons un peu de temps avec JSON. Nous avons besoin d'un langage standard que votre site web côté client peut utiliser pour communiquer avec votre côté serveur, une manière d'encoder les messages. Pensez-y comme au code morse : nous avons besoin d'un moyen pour que l'expéditeur et le destinataire des messages puissent encoder leurs messages de manière à ce qu'ils soient compris par les deux parties.

C'est là que JSON entre en jeu. JSON signifie JavaScript Object Notation et il ressemble beaucoup, sans surprise, aux objets JavaScript.

```JSON
{
  "name": "Luna",
  "age": 10,
  "breed": "Havanese",
  "location": {
    "city": "Seattle",
    "state": "WA"
  }
}

```

Cela ressemble à du JavaScript valide, n'est-ce pas ? C'est parce que c'en est ! Nous pourrions littéralement copier-coller ce code directement dans notre code JavaScript et cela fonctionnerait. C'est parce que 99,999999 % de tout le JSON est du JavaScript valide (il y a [quelques cas particuliers][json], mais je parie que la plupart des développeurs ne le savaient même pas).

Essayons. Faisons semblant que nous avons soumis une demande à un serveur et que nous avons reçu une réponse. La réponse reviendra toujours sous forme de chaîne de caractères, nous devons donc la convertir en objet. Heureusement, JavaScript peut le faire pour nous.

```javascript
// faisons comme si cela venait d'un serveur au lieu de simplement le déclarer ici.
const reponseDuServeur = `{"name": "Luna","age": 10,"breed": "Havanese","location": {"city":"Seattle","state": "WA"}}`;

console.log(reponseDuServeur); // une chaîne de caractères

const objetReponse = JSON.parse(reponseDuServeur);

console.log(objetReponse.name); // seulement le nom
console.log(objetReponse.location.city); // seulement la ville
console.log(objetReponse); // l'objet entier
```

C'est à cela que sert l'objet JSON intégré, pour gérer les données depuis et vers le JSON.

Caractères d'échappement
Vous voyez probablement beaucoup de \ ajoutés. Ce sont ce qu'on appelle les caractères d'échappement. Remarquez que cela montre la chaîne entre " mais le JSON utilise aussi " à l'intérieur. La façon d'empêcher que " ne termine la chaîne est d'utiliser \" pour indiquer que vous souhaitez utiliser le " à l'intérieur de la chaîne. Ainsi, si vous vouliez avoir une chaîne contenant un seul " vous devriez faire const guillemets = "\"". Ou vous pourriez simplement faire '"' aussi !

Et si vous souhaitez avoir un \ dans la chaîne ? Vous devriez utiliser \\ pour indiquer un \.

JSON.stringify
Utilisons-le pour faire l'inverse :

```javascript
const chien = {
  name: "Luna",
  age: 10,
  breed: "Havanese",
  location: {
    city: "Seattle",
    state: "WA",
  },
};

const chaineObjet = JSON.stringify(chien);
console.log(chaineObjet);
```

Oui, le nom de la fonction est stringify. Elle prend un objet et l'encode en JSON valide. Très utile.

Une dernière chose à faire. Disons que vous avez un gros objet et que vous voulez l'afficher d'une manière utile. Laissez-moi vous montrer comment faire.

Nous utiliserons ce HTML.

```display-html

<pre>
  <code id="code-block"></code>
</pre>
<pre>
  <code id="code-block"></code>
</pre>
```

```javascript
const chien = {
  name: "Luna",
  age: 10,
  breed: "Havanese",
  location: {
    city: "Seattle",
    state: "WA",
  },
};

const el = document.getElementById("code-block");
el.innerText = JSON.stringify(chien, null, 4);
```

- `<pre>` signifie pré-formaté. Cela signifie de respecter les espaces et de ne pas perturber la mise en forme.
- `<code>` signifie un bloc de code.
  Les deux balises ensemble signifient que vous pouvez avoir un bloc de code joliment formaté. Utile pour le débogage rapide lorsque vous ne pouvez pas utiliser console.log.
  JSON.stringify(chien, null, 4)
  Le null peut être ignoré. Vous pouvez lui donner une fonction qui va remplacer des choses dans votre objet. Je ne sais même pas comment cela fonctionne.
  Le 4 est l'indentation que vous souhaitez. Si vous lui donnez 0, il n'insérera pas d'espace. Si vous mettez 8, vous obtiendrez beaucoup d'espaces.

[json]: https://stackoverflow.com/questions/23752156/are-all-json-objects-also-valid-javascript-objects
[dog]: https://dog.ceo/dog-api/
[api]: https://github.com/toddmotto/public-apis
[breeds]: https://dog.ceo/dog-api/documentation/
[docs]: https://dog.ceo/dog-api/documentation/random
[pic]: https://dog.ceo/dog-api/documentation/breed

```

```
