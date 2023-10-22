# Introduction

## Description

J'ai créé ce cours pour enseigner aux gens comment passer de ne pas savoir coder à écrire leurs premières applications web. Je pense que c'est le meilleur moment de l'histoire pour entrer dans le monde de la programmation, car nos outils sont bien meilleurs qu'auparavant, ce qui signifie que vous pouvez créer des applications puissantes aujourd'hui avec seulement quelques outils. Je code depuis des décennies maintenant, et il me fallait beaucoup de code pour créer une petite application de quiz médiocre. À la fin de ce cours, vous serez capable de coder un clone de Wordle, une application qui vient de se vendre pour des millions de dollars au New York Times.

## Public cible et prérequis

En espérant que ce soit vous !

Ce cours a pour objectif de vous apprendre à coder. Vous n'avez pas besoin de connaissances préalables en programmation avant de suivre ce cours.

Vous devriez avoir une certaine familiarité avec les ordinateurs et Internet. Veuillez consulter [Les Fondamentaux d'Internet][internet-fundamentals] pour vous assurer que vous êtes à l'aise avec les concepts abordés dans ce cours. Beaucoup d'entre vous n'auront pas besoin de cela si vous avez déjà utilisé des ordinateurs avant ce cours.

Ce cours vous enseignera HTML, CSS et JavaScript. Ces trois éléments sont indispensables pour commencer à créer des applications web modernes. Si vous avez besoin d'aide dans l'une de ces catégories, ce cours devrait vous être utile. Si vous savez déjà coder (en C++ ou Java, par exemple) et que vous souhaitez vous orienter davantage vers le développement front-end, ce cours vous sera également utile.

<!-- ## Configuration

Ce cours fonctionne et a été testé à la fois sur macOS et Windows 10. Il fonctionnera également très bien sur Linux (il vous suffit de suivre les instructions pour macOS). Vous n'avez pas besoin d'un ordinateur particulièrement puissant pour suivre ce cours. 8 Go de RAM suffiront amplement, et vous pourrez probablement vous en sortir avec moins.

- Bien que vous ne soyez pas obligé d'utiliser [Visual Studio Code][vsc], c'est l'outil que j'utiliserai, et je vous donnerai des astuces amusantes tout au long du parcours. J'ai travaillé dans l'équipe de VS Code, alors je suis un peu partial !
- Les gens me demandent souvent quelle est ma configuration de codage, alors permettez-moi de vous la présenter rapidement !
  - Police d'écriture : [MonoLisa][monolisa]. N'oubliez pas d'activer les ligatures dans VS Code ! Si vous souhaitez avoir des ligatures sans Dank, jetez un œil à [Cascadia Code][cascadia] de Microsoft.
  - Thème : J'aime simplement Dark+, le thème par défaut de VS Code. Bien que j'aime aussi [Night Owl][night-owl] de Sarah Drasner.
  - Terminal : Je suis récemment revenu à l'utilisation du terminal intégré de macOS. [iTerm2][iterm] est également excellent. Sous Windows, j'apprécie [Windows Terminal][terminal].
  - Icônes VS Code : l'extension [vscode-icons][icons]. -->

<!-- ## Où signaler les problèmes

J'écris ces cours en veillant à ne pas commettre d'erreurs. Cependant, lorsqu'il s'agit d'enseigner plus de dix heures de contenu, les erreurs sont inévitables, que ce soit en matière de grammaire ou de contenu. Cependant, moi (ainsi que l'équipe fantastique de Frontend Masters) corrigeons constamment les erreurs pour que ceux d'entre vous qui suivent après puissent profiter du meilleur produit possible. Si vous repérez une erreur, nous serions ravis de la corriger. La meilleure façon de le faire est de [soumettre une demande d'extraction ou de signaler un problème sur le dépôt GitHub][issues]. Bien que je sois toujours ravi de discuter et de donner des conseils sur les réseaux sociaux, je ne peux pas fournir une assistance technique à tout le monde. De plus, si vous signalez un problème sur GitHub, d'autres personnes pourront trouver la même réponse que celle que vous avez reçue.

Nous parlerons de GitHub à la fin de ce cours si vous n'êtes pas familier avec cet outil. -->

<!-- ## Qui suis-je

Je m'appelle Brian Holt et je suis chef de produit chez Stripe. Je travaille sur toutes sortes d'outils pour les développeurs, tels que l'extension Stripe pour Visual Studio Code, le CLI Stripe, les SDK Stripe et d'autres outils que les développeurs utilisent pour écrire du code pour Stripe. Avant cela, j'ai travaillé sur Azure et Visual Studio Code chez Microsoft en tant que chef de produit, et avant cela, j'étais développeur JavaScript pendant une décennie, travaillant pour des entreprises comme LinkedIn, Netflix, Reddit et quelques autres start-ups. J'ai écrit _énormément_ de code.

J'ai appris à coder quand j'avais environ 10 ans. Mon frère me faisait écrire du code en C++ avant de me laisser jouer à des jeux vidéo. Cela m'a certainement bien préparé lorsque j'ai commencé à apprendre à coder à l'université, mais laissez-moi vous dire qu'il n'est jamais trop tard pour apprendre à coder. Les compétences nécessaires sont tout à fait accessibles à quiconque a suffisamment de motivation -->

## Attentes

D'accord, fixons quelques attentes.

Ce cours est difficile. C'est frustrant. Vous allez vous heurter à des obstacles, à plusieurs reprises. C'est normal. C'est attendu. Ne vous découragez pas.

Surtout, **NE VOUS COMPAREZ PAS AUX AUTRES**. Vous connaissez parfaitement vos propres lacunes et avez une compréhension imparfaite de leurs réalisations. Vous sous-estimerez toujours vos propres compétences et surestimerez les progrès des autres. Vous suivez un parcours personnel, et la clé pour réussir est d'avancer pas à pas, de surveiller vos propres progrès, et de faire preuve de patience et de persévérance.

Ne tombez pas dans le piège du jeu des "devrais". "Je devrais comprendre ceci", "Je devrais maîtriser cela à présent", "Je ne devrais pas avoir autant de difficultés", etc. sont tous des pièges dangereux. Il n'y a pas de place pour les "devrais" ici, seulement l'endroit où vous en êtes actuellement. C'est un écueil dans lequel tombent tous les nouveaux codeurs.

L'expérience la plus comparable à l'apprentissage du code est l'apprentissage d'une langue étrangère. Je suis américain et j'ai grandi en parlant anglais. Lorsque j'ai obtenu mon diplôme d'études secondaires, je suis allé vivre en Italie. Il m'a fallu des mois de travail acharné et de pratique avant de pouvoir commander une boisson dans un café. Il m'a fallu des mois supplémentaires avant de me sentir à l'aise pour tenir une conversation fluide sur la météo ou sur ma provenance. Il m'a fallu encore des mois pour pouvoir discuter de sujets politiques ou d'autres sujets spécialisés. On n'apprend pas une langue du jour au lendemain. Cela demande des mois de travail et de pratique. Mais les résultats en valent la peine !

Waouh, donc vous voulez dire que je ne vais pas écrire des sonnets en pentamètres iambiques en JavaScript à la fin de ce cours ? Non, ce n'est pas ça. Vous apprendrez à lire et à écrire des instructions complètes, c'est certain, mais ce qui compte le plus, c'est que vous apprendrez à apprendre à coder. Vous apprendrez à apprendre. C'est le point de départ de votre voyage pour apprendre à coder. Certains d'entre vous apprendront tout ce dont vous avez besoin pour coder ; vous pourrez certainement créer la page d'accueil de votre entreprise locale à partir de ce cours, voire même apprendre à connecter quelque chose comme Stripe pour gérer les commandes. Mais si vous voulez décrocher un emploi chez Microsoft, Netflix, Google, et des entreprises similaires, il reste encore beaucoup de travail. C'est possible. Il suffit de persévérer !

---

## Conclusion

C'était une brève introduction pour vous préparer à ce voyage d'apprentissage passionnant. Ne soyez pas intimidé par les défis qui se présentent. L'apprentissage de la programmation est une aventure gratifiante qui demande du temps et de la détermination. Alors, préparez-vous à plonger dans le monde du développement web et à maîtriser les langages et les outils nécessaires pour créer des applications modernes. Bonne chance et amusez-vous à coder !

[//]: # "Liens"
[twitter]: lien_vers_le_compte_twitter
[internet-fundamentals]: lien_vers_les_fondamentaux_d_internet
[fem]: lien_vers_frontend_masters
[vsc]: lien_vers_visual_studio_code
[monolisa]: lien_vers_monolisa
[cascadia]: lien_vers_cascadia_code
[night-owl]: lien_vers_night_owl
[iterm]: lien_vers_iterm
[terminal]: lien_vers_windows_terminal
[icons]: lien_vers_vscode_icons
[github]: lien_vers_compte_github
[pelo]: lien_vers_peloton
[site]: lien_vers_repo_github
[issues]: lien_vers_repo_github/issues
