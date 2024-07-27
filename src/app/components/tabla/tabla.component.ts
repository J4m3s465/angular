import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  peliculas = [
    {
      nombre: 'Matrix',
      anio: '2012',
      genero: 'Accion',
      id:1
    },
    {
      nombre: 'Kung fu Panda',
      anio: '2020',
      genero: 'Accion',
      id:2

    },
    {
      nombre: 'Megamente',
      anio: '2022',
      genero: 'Accion',
      id:3

    },
    {
      nombre: 'Doraemon',
      anio: '2002',
      genero: 'Infantil',
      id:4

    },
    {
      nombre: 'DeadPool',
      anio: '2024',
      genero: 'Accion',
      id:5

    }
  ]

  anio:any=2000;
}
