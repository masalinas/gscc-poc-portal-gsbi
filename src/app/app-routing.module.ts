import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/src/dashboard.module').then(m => m.DashboardModule) },
  { path: 'gsbi', loadChildren: () => import('./modules/gsbi/src/gsbi.module').then(m => m.GsbiModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {   
}
