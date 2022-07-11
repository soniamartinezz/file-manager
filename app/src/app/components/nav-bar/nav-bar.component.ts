import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  // Nombres de las opciones de menú
  folder = 'Carpeta';
  imagen = 'Imágenes';
  all = 'Ver todos';
  trash = 'Ver eliminados';
  text1 = 'Texto plano';
  text2 = 'Texto rico';

  // Nombre para el botón añadir
  upload = 'Añadir';

  // Variables para controlar el funcionamiento del botón de archivos eliminador
  activeTrash = false;

  types: string[] = ['Carpetas', 'Texto plano', 'Texto rico', 'Imágenes'];

  ngOnInit(): void {
  }

  // Función para controlar el funcionamiento del botón ver eliminados
  isActiveTrash(): boolean {
    if (!this.activeTrash) {
      this.activeTrash = true;
      return true;
    } else {
      this.activeTrash = false;
      return false;
    }
  }

}
