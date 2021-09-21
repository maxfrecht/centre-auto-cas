import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Token} from './token';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../services/authentication.service';
import {Credentials} from './credentials';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * Build a new FormControl using Angular's FormBuilder.
   * Add 2 attributes (email and password), both with an empty string as default values and with
   */
  public form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // If the JWT already exist, redirect to home (prevent display login form).
    if (this.authenticationService.hasToken()) {
      this.router.navigate(['']);
    }
  }

  submit(): void {
    // Set all inputs as touched (display errors of email and password when direct click on submit button).
    this.form.markAllAsTouched();

    // If the form is valid (all inputs valids).
    if (this.form.valid) {
      // Forge HTTP request to send to the API to retrieve JWT.
      this.httpClient.post<Token>('http://78.241.28.199:8090/authentication_token', this.form.value as Credentials).subscribe(
        (data) => {
          // When success. Save the JWT in local storage.
          this.authenticationService.saveToken(data.token);

          // Then redirect Angular page to home.
          this.router.navigate(['']);
        },
        (e: {error: {code: number, message: string}}) => {
          // When error.
          alert(e.error.message);
        },
      );
    }
  }
}

