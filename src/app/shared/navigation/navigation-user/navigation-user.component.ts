import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-user',
  templateUrl: './navigation-user.component.html',
  styleUrl: './navigation-user.component.css',
})
export class NavigationUserComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logOut() {
    this.authService
      .logOut()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  }
}
