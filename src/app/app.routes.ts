import { Routes } from '@angular/router';
import { InicioComponent } from './UI/components/inicio/inicio.component';
import { PlantillaComponent } from './UI/components/plantilla/plantilla.component';
import { PalmaresComponent } from './UI/components/palmares/palmares.component';
import { ContactanosComponent } from './UI/components/contactanos/contactanos.component';
import { QuienesSomosComponent } from './UI/components/quienes-somos/quienes-somos.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'quienes-somos', component: QuienesSomosComponent },
    { path: 'plantilla', component: PlantillaComponent },
    { path: 'palmares', component: PalmaresComponent },
    { path: 'contactanos', component: ContactanosComponent },
    { path: '**', redirectTo: '' }
];
