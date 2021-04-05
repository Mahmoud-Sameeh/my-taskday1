import { threeComponent } from './Components/second/Component/three/three.component';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondComponent } from './Components/second/second.component';
import { FourthComponent } from './Components/fourth/fourth.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    threeComponent,
    FourthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
