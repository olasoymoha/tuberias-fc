import { Component } from '@angular/core';
import { NoticiasComponent } from './noticias/noticias.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NoticiasComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
