import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherpageComponent } from './otherpage.component';
import { OtherpageRoutingModule } from './otherpage-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [OtherpageComponent],
  imports: [CommonModule, OtherpageRoutingModule, SharedModule],
})
export class OtherpageModule {}
