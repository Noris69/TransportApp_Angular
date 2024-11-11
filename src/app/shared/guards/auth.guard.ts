import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isSessionStorageAvailable = typeof sessionStorage !== 'undefined';

  if (isSessionStorageAvailable) {
    const token = sessionStorage.getItem('user');
    if (token) {
      try {
        return true;
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al verificar la sesión.',
        });
        router.navigate(['/login']);
        return false;
      }
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Iniciar Sesión',
        text: 'Debes iniciar sesión para acceder a esta página.',
        showCancelButton: false,
        confirmButtonText: 'Ir a iniciar sesión',
      }).then((result) => {
        if (result.isConfirmed) {
          router.navigate(['/login']);
        }
      });
      return false;
    }
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'El almacenamiento de la sesión no está disponible.',
    });
    router.navigate(['/login']);
    return false;
  }
};
