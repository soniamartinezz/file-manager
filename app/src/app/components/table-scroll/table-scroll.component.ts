import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-scroll',
  templateUrl: './table-scroll.component.html',
  styleUrls: ['./table-scroll.component.css']
})
export class TableScrollComponent implements OnInit {

  constructor() { }

  // Valores del encabezado de la tabla
  name = 'Nombre';
  type = 'Tipo';
  size = 'Tamaño';
  detail = 'Detalle';

  // Valores del contenido de la tabla
  items = [
    {id: 1, name: 'Photo6', type: 'jpg' , size: '2,1 MB'},
    {id: 2, name: 'Old Documents', type: 'folder' , size: '600 MB'},
    {id: 3, name: 'Biology_activity', type: 'pdf' , size: '100 KB'},
    {id: 4, name: 'resume', type: 'doc' , size: '92 MB'},
    {id: 5, name: 'Video', type: 'folder' , size: '107 KB'},
    {id: 6, name: 'list4', type: 'txt' , size: '91 MB'},
    {id: 7, name: 'photo dog', type: 'folder' , size: '107 KB'},
    {id: 8, name: 'photo dog 2', type: 'doc' , size: '92 MB'},
    {id: 9, name: 'list_old', type: 'txt' , size: '90 KB'},
    {id: 10, name: 'list_3', type: 'txt' , size: '88 KB'},
    {id: 11, name: 'Downloads', type: 'folder' , size: '107 KB'}
  ];

  ngOnInit(): void {
  }

}
