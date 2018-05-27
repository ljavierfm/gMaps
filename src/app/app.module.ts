import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';
import { API_GMAPS } from './config';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AgmCoreModule.forRoot({ apiKey:''})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
