import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'inventory', loadChildren: './inventory/inventory.module#InventoryPageModule' },
  { path: 'new-inventory-item', loadChildren: './inventory/new-inventory-item/new-inventory-item.module#NewInventoryItemPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
