import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoidG9zZWt0b3NlayIsImEiOiJjam9wdnJmenAwZWR3M3BucnVseWxhZ25jIn0.jjIvvTQ_ICGR6_HT7YQH8A',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
