import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  // Valores del encabezado de la tabla
  name = 'Nombre';
  type = 'Tipo';
  size = 'Tamaño';
  detail = 'Detalle';

  // Valores del contenido de la tabla
  items = [
    {id: 1, name: 'Photo1', type: 'jpg' , size: '2,1 MB'},
    {id: 2, name: 'Documents', type: 'folder' , size: '600 MB'},
    {id: 3, name: 'Biology_examen', type: 'pdf' , size: '100 KB'},
    {id: 4, name: 'list', type: 'doc' , size: '92 MB'},
    {id: 5, name: 'Downloads', type: 'folder' , size: '107 KB'}
  ];

  ngOnInit(): void {
  }

}
