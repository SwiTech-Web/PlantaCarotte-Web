import {Component, Input, OnInit} from '@angular/core';
import { AuthenticationService } from 'src/app/resources/authentication.service';
import {StateService} from "../../resources/state.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isMobile: boolean;

  constructor(public authService: AuthenticationService,
              private stateService: StateService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.isMobile = this.stateService.getSate();
  }
  close() {
    this.modalService.dismissAll();
  }
}
