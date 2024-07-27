import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { Error404Component } from './components/error404/error404.component';
import { DetallesPeliculasComponent } from './pages/detalles-peliculas/detalles-peliculas.component';
import { SeriesComponent } from './components/series/series.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'peliculas', component:PeliculasComponent},
    {path:'contacto', component:ContactoComponent},
    {path:'detalles/:idPelicula', component:DetallesPeliculasComponent},
    {path:'series', component:SeriesComponent},
    // Para que la web no este en blanco, se pone este comando, este al final siempre.
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'**', component:Error404Component}
];
