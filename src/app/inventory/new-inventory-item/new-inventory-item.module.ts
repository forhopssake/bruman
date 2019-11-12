import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewInventoryItemPage } from './new-inventory-item.page';

const routes: Routes = [
  {
    path: '',
    component: NewInventoryItemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewInventoryItemPage]
})
export class NewInventoryItemPageModule {}
