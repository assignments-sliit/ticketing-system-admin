import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManageDirectRoutesPage } from './manage-direct-routes.page';

const routes: Routes = [
  {
    path: '',
    component: ManageDirectRoutesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManageDirectRoutesPage]
})
export class ManageDirectRoutesPageModule {}
