# Angular Anime Gallery

Ce projet est une **galerie d'images d'anime** créée avec Angular. Il affiche une collection d'images issues de célèbres séries d'anime et permet à l'utilisateur d'ajouter ou de retirer des titres de sa liste de favoris.

## 📋 Table des matières

1. [Aperçu du projet](#aperçu-du-projet)
2. [Technologies utilisées](#technologies-utilisées)
3. [Installation](#installation)
4. [Utilisation](#utilisation)
5. [Code du composant principal](#code-du-composant-principal)
6. [Contribuer](#contribuer)

---

## 📖 Aperçu du projet

Le projet **Anime Gallery** propose une interface simple pour afficher des images d'anime populaires et gérer une liste de favoris.

```
anime-gallery/
├── src/
│   ├── app/
│   │   ├── gallery/
│   │   │   ├── gallery.component.ts
│   │   │   ├── gallery.component.html
│   │   │   ├── gallery.component.css
│   │   └── app.module.ts
├── assets/
│   └── images/      # Dossier contenant les images de l'anime
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
├── angular.json     # Configuration de Angular
└── package.json     # Dépendances du projet
```


### Fonctionnalités principales :
- Afficher une galerie d'anime avec leurs titres et images.
- Ajouter des titres à une liste de favoris.
- Retirer des titres de la liste de favoris.

---

## 🛠️ Technologies utilisées

- **Framework** : Angular (v15 ou supérieur recommandé)
- **Langage** : TypeScript, HTML, CSS
- **Autres outils** : Node.js et npm pour la gestion des dépendances.

---

## 🚀 Installation

1. **Cloner le projet :**
   ```bash
   git clone https://github.com/votre-utilisateur/anime-gallery.git
   cd anime-gallery
```

import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  animeImages = [
    { title: 'Naruto', url: 'https://manga-imperial.fr/cdn/shop/articles/minato_namikaze_01345b9f-4d7c-4616-a896-701a41232304_640x.jpg?v=1671887676' },
    { title: 'One Piece', url: 'https://gear5world.com/cdn/shop/articles/luffy_mugiwara_chapeau_paille_one_piece.jpg?v=1698943111' },
    { title: 'Demon Slayer', url: 'https://www.superherotoystore.com/cdn/shop/articles/demon-slayer-season-3-mitsuri-kanroji_600x.jpg?v=1713184673' },
    { title: 'Attack on Titan', url: 'https://fr.web.img2.acsta.net/r_654_368/newsv7/21/03/04/18/00/2866708.jpg' },
    // Ajouter d'autres titres ici
  ];

  favorites: string[] = [];

  addToFavorites(title: string) {
    if (!this.favorites.includes(title)) {
      this.favorites.push(title);
    }
  }

  removeFromFavorites(title: string) {
    this.favorites = this.favorites.filter(favorite => favorite !== title);
  }
}
```
## 📝 Licence

Le projet **Anime Gallery** est sous la **Licence MIT**. Cela signifie que vous pouvez librement utiliser, copier, modifier, fusionner, publier, distribuer, sous-licencier et/ou vendre des copies du logiciel, sous réserve des conditions suivantes :

### Conditions de la Licence MIT :

1. **Droits d'auteur** : La licence vous permet d'utiliser, de copier, de modifier et de distribuer le logiciel, à condition de préserver l'avis de copyright et l'avertissement de licence dans toutes les copies du logiciel ou dans toute documentation associée.

2. **Aucune garantie** : Le logiciel est fourni "tel quel", sans aucune garantie d'aucune sorte, expresse ou implicite, y compris mais sans s'y limiter les garanties implicites de qualité marchande, d'adéquation à un usage particulier ou de non-contrefaçon. En aucun cas, les auteurs ou détenteurs des droits d'auteur ne pourront être tenus responsables de toute réclamation, dommage ou autre responsabilité, que ce soit dans le cadre d'une action en contrat, tort ou autre, découlant de, ou en relation avec, le logiciel ou l'utilisation ou autres transactions dans le logiciel.

### Ce que vous pouvez faire avec ce projet :

- **Utilisation personnelle** : Vous pouvez utiliser ce projet pour vos propres projets personnels ou professionnels sans aucune restriction.
- **Modification** : Vous pouvez modifier ce projet pour l’adapter à vos besoins. N'oubliez pas de respecter les droits d'auteur et de maintenir les informations de licence dans vos versions modifiées.
- **Distribution** : Vous pouvez redistribuer ce projet ou toute version modifiée sous les mêmes termes de la licence MIT.

### Ce que vous ne pouvez pas faire :

- **Utilisation des marques déposées** : Vous ne pouvez pas utiliser les marques déposées, logos ou noms de ce projet dans vos produits dérivés sans autorisation explicite.

---

### Comment inclure cette licence dans vos projets :

Si vous redistribuez le logiciel (soit dans son état original, soit modifié), vous devez inclure dans la documentation ou les fichiers de votre projet le texte complet de la licence MIT, incluant l'avis de copyright et la déclaration de non-responsabilité.

