import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  showPassword: boolean = false;
  mostrarFormularioVerificacion = false;
  ocultarLogin = true;

  enablePassword: boolean = false;
  password: string = '';

  user = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private auth: Auth
  ) {}

  signUp() {
    if (this.user.password != this.user.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden',
      });
    }

    return createUserWithEmailAndPassword(
      this.auth,
      this.user.email,
      this.user.password
    )
      .then(() => {
        this.verificarCorreo();
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        });
      });
  }

  verificarCorreo() {
    this.afAuth.currentUser
      .then((user) => user?.sendEmailVerification())
      .then(() => {
        Swal.fire({
          icon: 'question',
          title: 'Verificar Correo',
          text: 'Le enviamos un correo electronico para su verificacion',
        });
        this.router.navigate(['/login']);
      });
  }

  logInWithGoogle() {}
}
