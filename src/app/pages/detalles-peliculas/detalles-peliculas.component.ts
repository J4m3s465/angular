import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './detalles-peliculas.component.html',
  styleUrl: './detalles-peliculas.component.css'
})
export class DetallesPeliculasComponent {

  peliculas = [
    {
      nombre: 'Matrix',
      anio: '2012',
      genero: 'Accion',
      id: 1

    },
    {
      nombre: 'Kung fu Panda',
      anio: '2020',
      genero: 'Accion',
      id: 2

    },
    {
      nombre: 'Megamente',
      anio: '2022',
      genero: 'Accion',
      id: 3

    },
    {
      nombre: 'Doraemon',
      anio: '2002',
      genero: 'Infantil',
      id: 4

    },
    {
      nombre: 'DeadPool',
      anio: '2024',
      genero: 'Accion',
      id: 5

    }
  ]

  pelicula: any
  ruta = inject(ActivatedRoute)
  ngOnInit() {
    this.ruta.params.subscribe(p => {
      // console.log(p)
      for (let item of this.peliculas){
        if (item.id == p['idPelicula']) {
          console.log(item);
          this.pelicula = item
        }
      }
  })
}
}

