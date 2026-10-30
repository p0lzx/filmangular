import { Component, inject } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {environment} from '../../environments/environment.development';
import { getApps, getApp } from 'firebase/app';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean; // présent uniquement pour signInWithPassword
}

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-login-films',
  styleUrl: './login-films.css',
  templateUrl: './login-films.html',
})


export class LoginFilms {
  private http = inject(HttpClient)
  private apikey = environment.firebaseapikey

  user = {
    email: '',
    password: '',
  };

  fourm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl('')
  })

  register(form: NgForm) {
    const email = form.value['email'];
    const password = form.value['password'];
  }
  onSubmit() {
    console.log(this.user);
  }
  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apikey}`,
      { email, password, returnSecureToken: true },
    );
  }
}
