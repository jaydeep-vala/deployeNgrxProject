import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AipShowComponent } from './aip-show/aip-show.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'app-user-add', component: UserAddComponent },
  { path: 'app-user-list', component: UserListComponent },
  { path: 'app-aip-show', component: AipShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
