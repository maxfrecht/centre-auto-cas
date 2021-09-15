import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed=true;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {

  }

  ngOnInit(): void {
  }

  logout(): void {
    // Remove JWT from local storage.
    localStorage.removeItem('access_token');

    // Redirect to login page.
    this.router.navigate(['login']);
  }

  canLogout(): boolean {
    return this.authenticationService.hasToken();
  }
}
