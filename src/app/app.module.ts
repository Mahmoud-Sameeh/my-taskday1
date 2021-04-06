import { threeComponent } from './Components/second/Component/three/three.component';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondComponent } from './Components/second/second.component';
import { FourthComponent } from './Components/fourth/fourth.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { SiblingComponent } from './Components/sibling/sibling.component';
import { FComponentComponent } from './ItiDay2/fcomponent/fcomponent.component';
import { AllInOneComponent } from './ItiDay2/all-in-one/all-in-one.component';
import { ScomponentComponent } from './ItiDay2/scomponent/scomponent.component';
import { FatherComComponent } from './ItiDay2/father-com/father-com.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    threeComponent,
    FourthComponent,
    ParentComponent,
    ChildComponent,
    SiblingComponent,
    FComponentComponent,
    AllInOneComponent,
    ScomponentComponent,
    FatherComComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
