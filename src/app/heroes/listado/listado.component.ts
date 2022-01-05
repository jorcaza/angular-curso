import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent implements OnInit {

  heroeBorrado: string = '';
  constructor() { }

  heroes: string[] = ['Spiderman', 'Ironman', 'Batman'];

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }

  ngOnInit(): void {
  }

}
