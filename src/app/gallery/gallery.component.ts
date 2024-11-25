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
    { title: 'Akame Ga Kill', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAnaxzGrfA5SmkJ4A-Y2f3Nu8iHZ5m_u7LA&s' },
    { title: 'Bunny Girl Senpai', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJNlUFJOsnt5UWUsLBwhj-TGNIM22FHxUuw&s' },
    { title: 'My Hero Academia', url: 'https://mahousseetmoi.com/cdn/shop/articles/izuku-midoriya_1491x.jpg?v=1655283142'},
    { title: 'Jujustsu Kaisen', url: 'https://www.dexerto.fr/cdn-image/wp-content/uploads/sites/2/2024/05/10/gojo-violet-anime-jjk.jpg'},
    { title: 'The Eminence in Shadow', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorpJkxHgU28Iw9Fw-XW26ePVN92DTc-o0ag&s'},
    { title: 'Oshi no Ko', url: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/05/akane-kurokawa-is-looking-timid.jpg'},
    { title: 'Sword Art Online', url: 'https://images-ng.pixai.art/images/orig/6e1111ac-b11c-411d-9687-7095ec136b11'},
    { title: 'My Dress up Darling', url: 'https://cdn.anisearch.fr/images/character/cover/104/104000_400.webp'},
    { title: 'Overlord', url: 'https://pm1.aminoapps.com/7047/a865853e1c86f90733f51df6e18036fb47db8b9fr1-400-432v2_00.jpg'},
    { title: 'Darling in the Franxx', url: 'https://ih1.redbubble.net/image.842625284.6372/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg'},
    { title: 'Re:Zero', url: 'https://i.pinimg.com/550x/f3/d7/6d/f3d76d27bce5eacf2c6c83c02b863c67.jpg'},
    { title: 'Fairy Tail', url: 'https://www.nautiljon.com/images/perso/00/86/erza_scarlett_6068.webp'},
    { title: 'Tokyo Ghoul', url: 'https://i.pinimg.com/236x/99/97/02/9997026b51f4438aa121a750c2d09408.jpg'},
    { title: 'Death Note', url: 'https://pbs.twimg.com/media/EXv_0RsXsAEAYgU.jpg'},
    { title: 'Another', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1dBlZwOviQeijFbncAj84FVXj8MyfyxG9Q&s'},
    { title: 'Date a Live', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdAJrJyqYR76CL_VIggBahxww9jcUvUxWvTavTiSAO-7lS3hmkIZ5dhl8EsBc5bhmKWWg&usqp=CAU'},
    { title: 'Genshin Impact', url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7e332c82-2b12-4eda-9222-7860ac5e0abc/dg87boy-155de188-8c85-4b14-87fc-df44e347d2dd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdlMzMyYzgyLTJiMTItNGVkYS05MjIyLTc4NjBhYzVlMGFiY1wvZGc4N2JveS0xNTVkZTE4OC04Yzg1LTRiMTQtODdmYy1kZjQ0ZTM0N2QyZGQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9qk9CdyR_yZCDabZW6jr_z4cKSKNnrEgsUejqwbhgIw'}

        // Add New Character and for the image always search for the link on google //

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
