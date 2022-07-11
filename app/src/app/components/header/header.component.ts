import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  // Título de la sección
  title = 'FileManager';

  // Variables para controlar el estado de los iconos
  activeUser = false;
  activeSetting = false;

  ngOnInit(): void {
  }

  // Función para el botón de usuario
  isActiveUser(): boolean {
    if (!this.activeUser) {
      this.activeUser = true;
      this.activeSetting = false;
      return true;
    } else {
      this.activeUser = false;
      return false;
    }
  }

  // Función para el botón de ajustes
  isActiveSetting(): boolean {
    if (!this.activeSetting) {
      this.activeSetting = true;
      this.activeUser = false;
      return true;
    } else {
      this.activeSetting = false;
      return false;
    }
  }

}
