import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiSiamoComponent } from './chi-siamo.component';
import { ChiSiamoRoutingModule } from './app-chi-siamo-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ChiSiamoComponent],
  imports: [CommonModule, ChiSiamoRoutingModule, SharedModule],
})
export class ChiSiamoModule {}
