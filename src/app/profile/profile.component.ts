import { Component, OnInit } from '@angular/core';
import {StateService} from '../resources/state.service';
import {UserService} from '../resources/user.service';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isMobile: boolean;
  user: User;

  constructor(private stateService: StateService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.isMobile = this.stateService.getSate();
    this.getUserDetails();
  }
  getUserDetails() {
    const id = this.router.url.split('/', 4).pop();
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }
}
