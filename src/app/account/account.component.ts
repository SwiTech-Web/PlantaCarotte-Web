import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../resources/authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

}
