import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/resources/authentication.service';
import {StateService} from '../../resources/state.service';
import {LikedService} from '../../resources/liked.service';
import {Liked} from "../../models/liked.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobile: boolean;
  enableFavorite: boolean;
  userLikes: Liked[];

  constructor(public authService: AuthenticationService,
              private stateService: StateService,
              private likedService: LikedService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.isMobile = this.stateService.getSate();
    this.enableFavorite = false;
  }

  listOfLikes() {
    this.userLikes = [];
    this.likedService.getLikesByUser(this.authService.userData.uid).subscribe(like => {
      this.userLikes = like;
      if (this.userLikes.length > 0) {
        this.enableFavorite = true;
      } else {
        this.enableFavorite = false;
      }
    });
  }

  showModal(content) {
    if(this.isMobile) {
      this.closeMenu();
    }
    this.modalService.open(content);
  }

  openMenu() {
    if(this.authService.isLoggedIn) {
      this.listOfLikes();
    }
    document.getElementById('sideMenu').style.width = '85%';
  }

  closeMenu() {
    document.getElementById('sideMenu').style.width = '0';
  }
}
