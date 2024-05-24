import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  navItems = [
    { name: 'Inicio', route: '/home' },
    { name: '¿Quienes Somos?', route: '/home' },
    { name: 'Plantilla', route: '/home' },
    { name: 'Pálmares', route: '/home' },
    { name: 'Contáctanos', route: '/home' },
  ]

}
