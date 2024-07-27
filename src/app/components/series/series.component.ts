import { Component } from '@angular/core';
import { url } from 'inspector';
import { Tabla2Component } from "../tabla2/tabla2.component";

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [Tabla2Component],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
series =[
  {
    id:1,
    nombre: 'The Simpsons',
    anio: '1990',
    genero: 'Animado',
    url: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4D2862466468107185C7B763815ABC608AE56ECCACF5C0DB11F15919A072F569/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp'
  },
  {
    id:1,
    nombre: 'Futurama',
    anio: '2000',
    genero: 'Animado',
    url: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/47FCE4F29DC1D7C1FC72071B226D58E2FC345B4C258E88683E5250F7A4BA96B4/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp'
  },
  {
    id:1,
    nombre: 'Los 100',
    anio: '2014',
    genero: 'Apocalipsis',
    url: 'https://es.web.img3.acsta.net/pictures/14/02/16/23/53/181925.jpg?coixp=50&coiyp=39'
  },
]
}
