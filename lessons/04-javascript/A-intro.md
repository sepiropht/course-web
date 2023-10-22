---
description: ""
---

Cette section est difficile à enseigner car les besoins des étudiants varient considérablement ici. Certains d'entre vous sont des programmeurs venant d'autres langages et viennent ici pour apprendre le développement front-end. Certains d'entre vous sont totalement nouveaux dans la programmation et JavaScript sera votre premier langage de programmation. Tout comme si vous connaissez déjà l'espagnol, apprendre l'italien devient beaucoup plus facile car vous utilisez les mêmes concepts et les exprimez avec des variations mineures. Cet atelier est optimisé pour ceux qui sont totalement nouveaux dans la programmation et nous supposons donc aucune connaissance préalable. Si vous connaissez déjà un autre langage de programmation, je vous invite plutôt à survoler cette section pour vous familiariser avec l'apparence de JavaScript. Les prochaines sections seront également destinées à vous.

## Qu'est-ce que le code ?

Une question simple, mais sa réponse peut vous surprendre. Le code est d'abord destiné aux humains, puis aux ordinateurs. Vous pouvez considérer l'écriture de code comme l'écriture de notes sur la manière de résoudre un problème particulier, de manière à ce que l'ordinateur puisse le comprendre.

Attendez, pourquoi ? La raison est que vous ou quelqu'un d'autre devra revenir et relire ce code à un moment donné dans le futur, peut-être demain ou peut-être dans dix ans (j'ai travaillé sur du code vieux de plus de 10 ans, ce n'est pas amusant). En tant que tel, il est important d'écrire le code de manière à ce qu'il puisse être compris aussi rapidement que possible. Pensez-y comme à un manuel scolaire : vous ne voulez pas relire tout le manuel à chaque fois que vous voulez revoir un concept, vous voulez aller directement à la page et apprendre seulement ce que vous cherchez. Il en va de même pour le code : vous voulez aller directement à la partie du code en question et la comprendre en un coup d'œil sans avoir à relire l'ensemble de la base de code.

Vous passerez beaucoup plus de temps à entretenir ce code qu'à l'écrire la première fois. Soyez explicite. Soyez délibéré. L'objectif ici n'est pas d'être intelligent, mais d'être simple et de communiquer clairement. Le code est une forme de communication.

D'accord, maintenant que nous avons établi cela, voyons comment ce code fonctionne. Lorsque vous écrivez du code, l'ordinateur le décompose en morceaux plus petits qu'il peut comprendre, puis exécute ces morceaux un par un. Avec JavaScript, une seule chose se passe à la fois (on dit que c'est une exécution "monotâche", mais ce n'est pas un terme que vous devez connaître). En général, cela signifie qu'il exécute la ligne 1, puis la ligne 2, puis la ligne 3, etc. Voyons cela en action :

```javascript
const loyerMensuel = 500;

const loyerAnnuel = loyerMensuel * 12;
console.log(loyerAnnuel);
```

La première chose qui se produit ci-dessus est que nous déclarons une variable, `loyerMensuel`. Le mot-clé `const` indique à JavaScript que nous déclarons une variable. Les noms de variables ne doivent jamais contenir d'espaces, c'est pourquoi nous attachons les mots "loyer mensuel" ensemble. Pour rendre cela plus lisible, nous utilisons ce qu'on appelle le camel case, ainsi nommé car les lettres majuscules au milieu ressemblent aux bosses d'un chameau. Vous pouvez également utiliser d'autres styles de capitalisation, il n'y a pas de règle disant que vous devez utiliser le camel case en JavaScript ; tout le monde le fait simplement en JavaScript.

Remarquez le ; à la fin de chaque ligne. Ce point-virgule indique à JavaScript que vous avez terminé votre pensée. Pensez-y comme au point final du monde de la programmation.

Les variables peuvent être appelées presque n'importe comment. Vous `ne pouvez pas` utiliser de mots clés. Un exemple serait `const constante = 15`. const est un mot-clé, donc il ne peut pas être utilisé comme nom de variable. Vous voulez donner de bons noms à vos variables, même s'ils finissent par être longs parfois. Imaginez que nous ayons un fichier énorme et que 200 lignes plus bas nous voyions la variable nommée `loyerMensuel` : nous saurons instantanément à quoi sert cette variable et nous n'aurons pas à essayer de lire d'autres parties du code pour le comprendre. Toujours, toujours, toujours utilisez de bons noms de variables. Sérieusement. Accordez-y du temps. Nommer les choses est difficile et c'est une grande partie de votre travail.

D'accord, après la première ligne, j'ai une variable nommée `loyerMensuel` que je peux utiliser autant que je le souhaite. Dans ce cas, il représente le nombre `500`, mais il représente aussi sémantiquement le loyer mensuel. Imaginez si j'avais 1000 lignes entre la déclaration de `loyerMensuel` et le calcul de loyerAnnuel. J'aurais pu mettre directement 500 dans loyerAnnuel, mais je ne l'ai pas fait car je comprends maintenant comment cela est calculé simplement en lisant le code. Utilisez des variables. Utilisez-les partout. Cela rend votre code beaucoup plus facile à lire. De plus, plus tard, si mon loyer mensuel change, je peux le modifier à un seul endroit et partout où je fais référence à loyerMensuel et loyerAnnuel, les mises à jour se font automatiquement. C'est puissant.

D'accord, je veux calculer loyerAnnuel. J'utilise _ pour représenter la multiplication. Je mélange aussi des variables et des nombres, ce qui est tout à fait acceptable. J'aurais aussi pu dire const loyerAnnuel = loyerMensuel _ moisDansUneAnnee; (en supposant que j'ai mis const moisDansUneAnnee = 12; ailleurs) et cela aurait été une bonne idée. Je dirais que les deux sont à peu près les mêmes car il est évident qu'il y a 12 mois dans une année. Mais faites ce que vous pensez être le plus clair. C'est votre travail.

console.log(loyerAnnuel); va afficher ce qui est stocké dans `loyerAnnuel` dans la console JavaScript. La console JavaScript fait partie des outils de développement. Si vous avez besoin d'aide pour les trouver, consultez ce lien. Nous expliquerons comment cela fonctionne un peu plus tard, mais pour l'instant, sachez que tout ce que vous placez entre les parenthèses est affiché dans votre console JavaScript.

Voyons maintenant ce petit extrait de code en action dans notre navigateur. Créez un nouveau dossier (je vais simplement le mettre sur mon bureau) et ajoutez un fichier index.html avec ce qui suit :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <title>Expérimentations JavaScript</title>
  </head>
  <body>
    <h1>Expérimentations JavaScript !</h1>
    <script src="./experiments.js"></script>
  </body>
</html>
```

La balise script va nous permettre de charger du code JavaScript dans notre page HTML. Créez ensuite un autre fichier dans le même dossier appelé experiments.js (il peut vraiment s'appeler n'importe comment, tant que la balise script correspond) puis placez-y notre code précédent :

```javascript
const loyerMensuel = 500;

const loyerAnnuel = loyerMensuel * 12;
console.log(loyerAnnuel);
```

Maintenant, si vous ouvrez votre fichier HTML, pas le fichier JS, dans votre navigateur et ouvrez votre console, vous devriez voir le nombre 6000 s'afficher. Félicitations ! Vous venez d'écrire votre premier code !

[devtools]: https://webmasters.stackexchange.com/questions/8525/how-do-i-open-the-javascript-console-in-different-browsers
