import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
})
export class DetailComponent {
  public productoAgregar: Producto = { nombre: '', descripcion: '', precio: 0 };
}

interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
}
