import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../shared/services/auth.service';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  showPassword: boolean = false;
  mostrarFormularioVerificacion = false;
  ocultarLogin = true;

  enablePassword: boolean = false;
  password: string = '';

  user = {
    email: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,

    private auth: Auth
  ) {}

  logIn() {
    this.authService.logIn(this.user.email, this.user.password);
  }

  logInWithGoogle() {
    this.authService.logInWithGoogle();
  }

  // Metodo para cambiar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Metodo para manejar el checkbox y el campo de contraseña
  togglePassword() {
    this.enablePassword = !this.enablePassword;
    this.password = '';
  }
}
