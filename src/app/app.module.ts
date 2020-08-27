import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main.menu.component';
import { MidiKeyboardComponent } from './midi-keyboard/midi.keyboard.component';
import { MidiKeyboardService } from './midi-keyboard/midi.keyboard.service';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MidiKeyboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MidiKeyboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
