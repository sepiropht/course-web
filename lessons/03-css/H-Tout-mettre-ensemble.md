---
description: ""
---

Bien sûr, je vais vous guider à travers le processus de création de la page d'accueil du journal "The News Times" en utilisant la structure HTML fournie. Étant donné que je ne peux pas accéder directement aux liens externes, je vais vous fournir le code CSS nécessaire en fonction de votre description.

Décortiquons la conception et commençons par le style de chaque section :

## 1. Section de l'en-tête (Logo et navigation) :

Le logo et les liens de navigation doivent être placés horizontalement. Lorsque vous survolez les liens de navigation, ils doivent avoir un effet de soulignement.

```css
/* Section de l'en-tête */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin-right: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  position: relative;
}

.nav-links a:hover::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #333;
  bottom: -5px;
}
```

## 2. Section principale (Titres de nouvelles) :

Les principaux titres de nouvelles doivent être affichés dans une disposition en grille.

```css
/* Section principale */
.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
}

.news-card {
  border: 1px solid #ccc;
  padding: 10px;
}

.news-image {
  max-width: 100%;
}
```

## 3. Section de la barre latérale :

La barre latérale doit avoir une largeur fixe et une couleur de fond gris clair.

````css
/* Section de la barre latérale */
.sidebar {
  width: 300px;
  background-color: #f0f0f0;
  padding: 20px;
}
```4.Section du pied de page: Le pied de page doit être centré et avoir une
  couleur de fond. ``` css /* Section du pied de page */ .footer {
  text-align: center;
  background-color: #333;
  color: #fff;
  padding: 20px;
}
````

Appliquez maintenant ces styles aux éléments HTML correspondants. N'oubliez pas d'inclure la structure HTML fournie dans votre document. Voici comment vous pouvez inclure le CSS :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <!-- Lien vers votre fichier CSS -->
    <title>The News Times</title>
  </head>
  <body>
    <!-- Votre structure HTML ici -->
  </body>
</html>
```

Une fois que vous avez ajouté le HTML et le CSS, vous devriez voir la conception de la page d'accueil de "The News Times" prendre vie. N'oubliez pas d'expérimenter et d'apporter des ajustements pour obtenir le look souhaité. Si vous rencontrez des problèmes spécifiques ou avez des questions sur des parties particulières de la conception, n'hésitez pas à demander de l'aide !

[html]: /complete-intro-to-web-dev-v3/project-files/news.html
[my-version]: /complete-intro-to-web-dev-v3/project-files/news.css
