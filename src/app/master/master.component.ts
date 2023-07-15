import { Component } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.sass'],
})
export class MasterComponent {
  public productos: Producto[] = [
    {
      nombre: 'martillo',
      descripcion: 'marca truper',
      precio: 12,
    },
    {
      nombre: 'martillo',
      descripcion: 'marca bosch',
      precio: 20,
    },
    {
      nombre: 'taladro',
      descripcion: 'marca truper',
      precio: 40,
    },
  ];
}

interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
}
