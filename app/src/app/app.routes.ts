import { RouterModule, Routes } from '@angular/router';
import { DeleteFilesComponent } from './components/delete-files/delete-files.component';
import { ReviewFilesComponent } from './components/review-files/review-files.component';

const appRoutes: Routes = [
    { path: 'home', component: ReviewFilesComponent},
    { path: 'delete', component: DeleteFilesComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const appRouting = RouterModule.forRoot(appRoutes);
