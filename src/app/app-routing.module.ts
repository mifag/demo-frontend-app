import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMenuComponent } from './main-menu/main.menu.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'midi-keyboard',
    pathMatch: 'full'
  },
  {
    path: 'midi-keyboard',
    component: MainMenuComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
