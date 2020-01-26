import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/resources/authentication.service';
import {StateService} from '../../resources/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobile: boolean;

  constructor(public authService: AuthenticationService,
              private stateService: StateService) { }

  ngOnInit() {
    this.isMobile = this.stateService.getSate();
  }
  openMenu() {
    document.getElementById("sideMenu").style.width = "85%";
  }
  closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
  }
}
