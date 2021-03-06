import {Component, Input, OnInit} from '@angular/core';
import {LikedService} from '../../resources/liked.service';
import {AuthenticationService} from '../../resources/authentication.service';
import {Liked} from '../../models/liked.model';
import {Product} from '../../models/product.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-liked-product',
  templateUrl: './liked-product.component.html',
  styleUrls: ['./liked-product.component.css']
})
export class LikedProductComponent implements OnInit {
  likes: Liked[] = [];
  @Input() product: Product;

  constructor( private likedService: LikedService,
               public authService: AuthenticationService,
               private modalService: NgbModal) { }

  ngOnInit() {
    if (this.authService.isLoggedIn && this.authService.userData){
      this.listOfLikes();
    }
  }

  listOfLikes() {
    this.likedService.getLikesByUser(this.authService.userData.uid).subscribe(like => this.likes = like);
  }

  like(pid) {
    const like: any = {
      uid: this.authService.userData.uid,
      pid
    };
    this.likedService.addALike(like).then();
  }

  dislike(pid) {
    for (const like of this.likes) {
      if (like.pid === pid) {
        this.likedService.deleteLike(like.id);
      }
    }

  }

  isLiked(productId: string) {
    if (this.authService.isLoggedIn === true) {
      for (const like of this.likes) {
        if (like.pid === productId && like.uid === this.authService.userData.uid) {
          return true;
        }
      }
    }
    return false;
  }

  show(content) {
    this.modalService.open(content);
  }
}
