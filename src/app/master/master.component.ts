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

  public agregarMasterProducto(productoAgregar: Producto): void {
    const productoExiste = this.productos.includes(productoAgregar);

    if (!productoExiste) {
      this.productos.push(productoAgregar);
    } else {
      alert('Producto ya existe');
    }
  }

  public eliminarMasterProducto(productoEliminar: Producto): void {
    this.productos = this.productos.filter((productoItem) => {
      return productoItem.nombre !== productoEliminar.nombre;
    });
  }
}

/*
//original
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

//filtrado
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

  //final=filtrado
*/

interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
}
