import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent {
  user = {
    email: '',
  };

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router
  ) {}

  reset() {
    this.afAuth
      .sendPasswordResetEmail(this.user.email)
      .then(() => {
        this.toastr.info(
          'Le enviamos un correo para restablecer su password',
          'Recuperar Password'
        );
        this.router.navigate(['/login']);
      })
      .catch((error) => {});
  }
}
