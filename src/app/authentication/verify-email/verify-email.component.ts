import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/resources/authentication.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  isSend: Boolean = false;

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  clicked(){
    this.isSend = true;
  }

}
