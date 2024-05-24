import { Component } from '@angular/core';
import { MaterialModule } from '../../../../material/material/material.module';
import { Equipo } from '../../../../interfaces/equipo';

const EQUIPO_DATA: Equipo[] = [

  { id: 1, nombre: 'Tuberias FC', posicion: 1, victorias: 23, empates: 4, derrotas: 1, partidos: 28, golesFavor: 78, golesContra: 23, puntos: 73, imagen: '../../../../../assets/images/logo-tuberias.png' },
  { id: 2, nombre: 'Real Madrid', posicion: 2, victorias: 21, empates: 7, derrotas: 0, partidos: 28, golesFavor: 63, golesContra: 23, puntos: 70, imagen: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
  { id: 3, nombre: 'Atletico de Madrid', posicion: 3, victorias: 18, empates: 9, derrotas: 1, partidos: 28, golesFavor: 58, golesContra: 22, puntos: 63, imagen: 'https://upload.wikimedia.org/wikipedia/en/9/93/Club_Atletico_de_Madrid_2017_logo.svg' },
  { id: 4, nombre: 'Sevilla', posicion: 4, victorias: 17, empates: 7, derrotas: 4, partidos: 28, golesFavor: 47, golesContra: 29, puntos: 58, imagen: 'https://upload.wikimedia.org/wikipedia/en/8/86/Sevilla_FC_logo.svg' },
  { id: 5, nombre: 'Villarreal', posicion: 5, victorias: 16, empates: 6, derrotas: 6, partidos: 28, golesFavor: 48, golesContra: 34, puntos: 54, imagen: 'https://upload.wikimedia.org/wikipedia/en/7/70/Villarreal_CF_logo.svg' },
  { id: 6, nombre: 'Inter Movistar', posicion: 6, victorias: 15, empates: 5, derrotas: 6, partidos: 28, golesFavor: 50, golesContra: 40, puntos: 50, imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Inter_Movistar_logo.png' },
  { id: 7, nombre: 'ElPozo Murcia', posicion: 7, victorias: 14, empates: 7, derrotas: 5, partidos: 28, golesFavor: 45, golesContra: 35, puntos: 49, imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/ElPozo_Murcia_FS_logo.png' },
  { id: 8, nombre: 'FC Barcelona', posicion: 8, victorias: 13, empates: 8, derrotas: 5, partidos: 28, golesFavor: 42, golesContra: 32, puntos: 47, imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/67/FC_Barcelona_%28crest%29.svg' },
  { id: 9, nombre: 'Jaén Paraíso Interior', posicion: 9, victorias: 12, empates: 9, derrotas: 5, partidos: 28, golesFavor: 40, golesContra: 30, puntos: 45, imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Ja%C3%A9n_Para%C3%ADso_Interior_logo.png' },
  { id: 10, nombre: 'Levante UD', posicion: 10, victorias: 11, empates: 10, derrotas: 5, partidos: 28, golesFavor: 38, golesContra: 28, puntos: 43, imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Levante_UD_logo.png' },
  { id: 11, nombre: 'Palma Futsal', posicion: 11, victorias: 10, empates: 11, derrotas: 5, partidos: 28, golesFavor: 36, golesContra: 26, puntos: 41, imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Palma_Futsal_logo.png' },
  { id: 12, nombre: 'Osasuna Magna', posicion: 12, victorias: 9, empates: 12, derrotas: 5, partidos: 28, golesFavor: 34, golesContra: 24, puntos: 39, imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Osasuna_Magna_logo.png' },
  { id: 13, nombre: 'Peñíscola Globeenergy', posicion: 13, victorias: 8, empates: 13, derrotas: 5, partidos: 28, golesFavor: 32, golesContra: 22, puntos: 37, imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Pe%C3%B1%C3%ADscola_Globeenergy_logo.png' },
  { id: 14, nombre: 'Ribera Navarra', posicion: 14, victorias: 7, empates: 14, derrotas: 5, partidos: 28, golesFavor: 30, golesContra: 20, puntos: 35, imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Ribera_Navarra_logo.png' },
  { id: 15, nombre: 'Valdepeñas', posicion: 15, victorias: 6, empates: 15, derrotas: 5, partidos: 28, golesFavor: 28, golesContra: 18, puntos: 33, imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Valdepe%C3%B1as_logo.png' },
];

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  displayedColumns: string[] = ['posicion', 'imagen', 'puntos', 'nombre', 'partidos', 'victorias', 'empates', 'derrotas', 'golesFavor', 'golesContra'];
  dataSource = EQUIPO_DATA;
}
