// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routes
import { appRouting } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ReviewFilesComponent } from './components/review-files/review-files.component';
import { DeleteFilesComponent } from './components/delete-files/delete-files.component';
import { ButtonDeleteComponent } from './components/buttons/button-delete/button-delete.component';
import { TableScrollComponent } from './components/table-scroll/table-scroll.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    NavBarComponent,
    ReviewFilesComponent,
    DeleteFilesComponent,
    ButtonDeleteComponent,
    TableComponent,
    TableScrollComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
