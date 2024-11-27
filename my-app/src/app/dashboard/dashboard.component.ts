import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  logout() {
    // Eliminar el token JWT del almacenamiento local
    localStorage.removeItem('token'); // Ajusta si usas otro nombre para el token

    // Redirigir al usuario a la página de login
    this.router.navigate(['/login']);
  }
}
