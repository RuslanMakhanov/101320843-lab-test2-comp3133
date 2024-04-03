import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    // Add other component declarations here
  ],
  imports: [
    BrowserModule
    // Add other module imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
