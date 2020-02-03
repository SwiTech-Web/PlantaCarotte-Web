import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../resources/authentication.service';
import {StateService} from "../resources/state.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isMobile: boolean;

  constructor(public authService: AuthenticationService,
              private stateService: StateService) { }

  ngOnInit() {
    this.isMobile = this.stateService.getSate();
  }

}
