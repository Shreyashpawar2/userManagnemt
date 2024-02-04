import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserUpsertComponent } from './user/user-upsert/user-upsert.component';

export const routes: Routes = [
  // Other routes
  { path: 'upsert', component: UserUpsertComponent },
  { path: 'list', component: UserListComponent },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
