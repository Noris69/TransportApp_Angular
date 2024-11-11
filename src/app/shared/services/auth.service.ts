import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;

  constructor(
    private router: Router,
    private auth: Auth,
    private toastr: ToastrService
  ) {}

  signUp(email: string, password: string) {}

  logIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((user) => {
        if (user.user?.emailVerified) {
          sessionStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/home']);
          this.toastr.success('Nos alegra que hayas regresado!', 'Bienvenido');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hemos enviado un correo electrónico. Por favor, verifica tu cuenta.',
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        });
      });
  }

  logInWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((user) => {
        sessionStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/home']);
        this.toastr.success('Nos alegra que hayas regresado!', 'Bienvenido');
      })
      .catch((error) => {});
  }

  logOut() {
    sessionStorage.removeItem('user');
    return signOut(this.auth);
  }
}
