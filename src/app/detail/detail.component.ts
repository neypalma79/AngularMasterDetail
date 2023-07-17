import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
})
export class DetailComponent {
  @Output()
  public onNuevoProducto: EventEmitter<Producto> = new EventEmitter();

  public productoAgregar: Producto = { nombre: '', descripcion: '', precio: 0 };

  public grabarProducto(): void {
    console.info(this.productoAgregar);
    this.onNuevoProducto.emit(this.productoAgregar);
  }
}

interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
}
