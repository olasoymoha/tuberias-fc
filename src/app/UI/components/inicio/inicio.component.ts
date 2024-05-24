import { Component } from '@angular/core';
import { NoticiasComponent } from './noticias/noticias.component';
import { TablaComponent } from './tabla/tabla.component';
import { PartidosComponent } from './partidos/partidos.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NoticiasComponent, TablaComponent, PartidosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
