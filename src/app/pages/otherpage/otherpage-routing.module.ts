import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherpageComponent } from './otherpage.component';

const routes: Routes = [
  {
    path: '',
    component: OtherpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherpageRoutingModule {}
