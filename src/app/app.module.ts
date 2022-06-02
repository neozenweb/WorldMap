import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { SharedComponent } from './shared/shared.component';
import { DemoButtonComponent } from './shared/demo-button/demo-button.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapImageComponent } from './map-image/map-image.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    SharedComponent,
    DemoButtonComponent,
    MapImageComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // SvgMapModule.forRoot(<ICustomConfig>{
    //   country : ["USA"],
    //   countryColors:["lightgray"],
    //   googleAPIKey : "YOUR-API-KEY"
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
