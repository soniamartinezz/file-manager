import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-files',
  templateUrl: './review-files.component.html',
  styleUrls: ['./review-files.component.css']
})
export class ReviewFilesComponent implements OnInit {

  constructor() { }

  // Título de la sección
  title = 'Archivos recientes';

  ngOnInit(): void {
  }

}
