import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { url } from 'inspector';

@Component({
  selector: 'app-tabla2',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './tabla2.component.html',
  styleUrl: './tabla2.component.css'
})
export class Tabla2Component {
  series = [
    {
      id:1,
      nombre: 'The Simpsons',
      anio: '1900',
      genero: 'Animado',
      url:'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4D2862466468107185C7B763815ABC608AE56ECCACF5C0DB11F15919A072F569/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp',
    },
    {
      id:1,
      nombre: 'Futurama',
      anio: '2010',
      genero: 'Animado',
      url: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/47FCE4F29DC1D7C1FC72071B226D58E2FC345B4C258E88683E5250F7A4BA96B4/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp'
    },
    {
      id:1,
      nombre: 'The 100',
      anio: '2014',
      genero: 'Apocalipsis',
      url: 'https://es.web.img3.acsta.net/pictures/14/02/16/23/53/181925.jpg?coixp=50&coiyp=39'
    },
  ]
  anio: any= 1800;

  ocultar = true;
  
   cambiarVisibilidad(item: any){
    this.ocultar = !this.ocultar
   }
}
