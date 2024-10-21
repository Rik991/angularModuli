import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './pages/home/home-routing.module';
import { ChiSiamoRoutingModule } from './pages/chi-siamo/app-chi-siamo-routing.module';
import { OtherpageRoutingModule } from './pages/otherpage/otherpage-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomeRoutingModule,
    ChiSiamoRoutingModule,
    OtherpageRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
