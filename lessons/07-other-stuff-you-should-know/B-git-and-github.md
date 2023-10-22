---
title: "Git and GitHub"
description: ""
---

Git est un outil qui vous permet de stocker, versionner et partager votre code. Imaginez que vous écrivez un livre avec une centaine d'autres personnes. Comment partageriez-vous les éditions en cours du livre ? Par e-mail ? Par chat ? Via un document Google chaotique ? Toutes ces options semblent assez mauvaises, n'est-ce pas ?

Imaginez une entreprise comme Facebook avec des milliers d'ingénieurs. Ils travaillent tous sur la même base de code et il n'est pas faisable pour eux d'éditer la même copie (une personne pourrait casser le code et le casser pour tout le monde). C'est pourquoi nous avons un outil comme Git. Git permet à chacun de créer sa propre copie du code, d'apporter des modifications et de faire des demandes de modification que quelqu'un d'autre peut examiner avant de les fusionner. C'est ce que fait Git.

Git lui-même est un outil en ligne de commande et il vaut la peine de l'apprendre. [Nina Zakharenko][nina] propose un excellent cours à ce sujet sur Frontend Masters. Mais nous allons faire une version rapide. Créez un nouveau dossier sur votre bureau et ouvrez-le avec Visual Studio Code. Sur la barre latérale gauche, il y a un logo qui devrait ressembler à ceci :

logo Git dans VS Code

Cliquez dessus. Cliquez sur "Initialize Repo" (initialiser le dépôt).

Un dépôt (abrégé en "repo") est un projet dans le jargon de Git. Chaque projet que vous réalisez sera un dépôt. Actuellement, c'est un dépôt vide.

Créez un nouveau fichier appelé mon-fichier.txt et mettez-y "Salut, je m'appelle Brian". Dans votre onglet Git, vous verrez un nouveau fichier apparaître sous "Changes" (modifications). Ce sont des modifications qui ont eu lieu depuis votre dernière "sauvegarde".

Vous pourriez voir un fichier appelé .DS_Store si vous êtes sur macOS. Il s'agit d'un fichier que macOS crée pour organiser vos fichiers dans vos dossiers. Vous ne devriez pas le valider. Allez-y et supprimez-le si vous le voyez.

Cliquez sur le + à côté du fichier. Ce fichier est maintenant staged (prêt à être sauvegardé). Cela signifie qu'il n'a pas encore été sauvegardé, mais qu'il est prêt à l'être. Pourquoi ? Parce que nous pouvons vouloir regrouper plusieurs fichiers en une seule sauvegarde plus importante. Nous mettons donc en scène tous les fichiers que nous voulons sauvegarder, puis nous effectuons une seule action de sauvegarde. Gardez à l'esprit que si vous mettez un fichier en scène, puis que vous le modifiez, vous devez le "stager" à nouveau. Lorsque vous mettez quelque chose en scène, cela capture l'état dans lequel il se trouve à ce moment-là. Vous pouvez mettre en scène et désélectionner des éléments librement.

D'accord, vous avez maintenant mis plusieurs choses en scène et vous voulez les sauvegarder. Nous allons commettre vos modifications mises en scène. Lorsque je disais "sauvegarder" précédemment, je voulais vraiment dire "commit" (valider), car c'est le terme que Git utilise. Un commit crée une nouvelle entrée dans votre dépôt avec toutes vos nouvelles modifications. Écrivez un petit message sur ce que vous avez fait dans la barre de message (comme "ajouté mon nom dans le fichier texte", suffisant pour vous rappeler plus tard ce que vous avez fait) et cliquez sur la coche ✓ en haut du panneau Git dans VS Code.

logo Git dans VS Code

C'est tout le processus : apportez vos modifications, puis committez-les. Les gens ont des opinions différentes sur quand, comment et à quelle fréquence committer, mais je vous laisse décider vous-même. C'est un outil que vous pouvez apprendre et sur lequel vous pouvez vous faire votre propre opinion.

Il y a beaucoup plus à apprendre sur Git. Ceci n'est que le flux le plus basique. [Regardez le cours de Nina][nina] pour en savoir plus.

GitHub
Si vous n'avez pas de compte, [cliquez ici pour vous inscrire][github]. C'est un endroit public pour stocker votre code, le partager et apprendre des autres, et c'est en général l'endroit où les gens stockent leur code. Cela devient un peu un curriculum vitae pour vous. Les employeurs regarderont certainement si vous avez un compte GitHub et comment vous écrivez du code. Cela deviendra un profil professionnel pour vous. [Voyez le mien ici][mon-gh].

Une fois que vous vous êtes inscrit, cliquez sur le plus en haut à droite et créez un nouveau dépôt.

logo Git dans VS Code

Appelez-le "mon-premier-repo" ou comme vous le souhaitez. Vous pouvez ignorer les autres options. Super. À partir de là, copiez l'URL de la page. Ce sera quelque chose comme https://github.com/<votre nom d'utilisateur>/mon-premier-repo.git. Copiez cela. Ajoutez-le à VS Code via le sous-menu.

logo Git dans VS Code

Appelez la source "origin". C'est une pratique courante d'appeler la copie du dépôt la "source" à partir de laquelle vous travaillez. 99,9999 % du temps, vous n'aurez besoin que d'une seule source. Étant donné que Git est distribué, en théorie, vous pourriez tous avoir votre propre copie de Git et pousser dans les dépôts des autres, mais personne ne travaille de cette façon. Alors oui, appelez-la simplement "origin".

Il se peut qu'il vous demande si vous souhaitez faire git fetch périodiquement. Allez-y et dites oui. Cela signifie que VS Code se tiendra à jour avec votre dépôt GitHub. C'est une fonctionnalité agréable.

D'accord, maintenant cliquez sur "publish branch" (publier la branche) ! Il peut y avoir plusieurs invites concernant l'authentification avec GitHub et permettant à VSCode d'ouvrir des URL. Il suffit de cliquer sur "Yes" (Oui) à travers celles-ci

Nous n'abordons pas les branches, mais Git a un concept de branches. Vous pouvez faire beaucoup de commits dans une branche pour regrouper toutes ces modifications, puis fusionner ces modifications dans la branche principale (ou "master"). Nous n'allons pas en parler, mais c'est de cela qu'il s'agit. Vous venez de publier votre branche principale ("master") pour la première fois.

Maintenant, vérifiez GitHub et constatez que votre dépôt y est ! C'est tout ! C'est ainsi que vous partagez du code !

Maintenant, créez un nouveau fichier ou modifiez un fichier existant. Mettez les modifications en scène. Faites un commit. Et cliquez sur "sync changes" (synchroniser les modifications) pour pousser vers GitHub. C'est tout ! Félicitations ! C'est l'essentiel de ce qu'il y a d'utile à savoir sur Git.

logo Git dans VS Code

Vous pourriez voir une erreur comme celle ci-dessus. Dans ce cas, copiez et collez simplement la première ligne dans votre ligne de commande. Il a besoin d'une stratégie pour la fusion lorsque des conflits surviennent.

[github]: https://github.com/signup
[nina]: https://frontendmasters.com/courses/git-in-depth/
[my-gh]: https://github.com/btholt
