import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'chi-siamo',
    loadChildren: () =>
      import('./pages/chi-siamo/chi-siamo.module').then(
        (m) => m.ChiSiamoModule
      ),
  },
  {
    path: 'otherpage',
    loadChildren: () =>
      import('./pages/otherpage/otherpage.module').then(
        (m) => m.OtherpageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
