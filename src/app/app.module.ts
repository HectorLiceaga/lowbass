import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdComponent } from './lista-prod/lista-prod.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormsModule } from '@angular/forms';
import { LowbassComponent } from './lowbass/lowbass.component';
import { LowbassAboutComponent } from './lowbass-about/lowbass-about.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaProdComponent,
    CarritoComponent,
    LowbassComponent,
    LowbassAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
