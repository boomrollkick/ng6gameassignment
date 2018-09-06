import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartStopComponent } from './start-stop/start-stop.component';
import { EvenMarkComponent } from './even-mark/even-mark.component';
import { OddMarkComponent } from './odd-mark/odd-mark.component';

@NgModule({
  declarations: [
    AppComponent,
    StartStopComponent,
    EvenMarkComponent,
    OddMarkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
