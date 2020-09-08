import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main.menu.component';
import { MidiKeyboardComponent } from './midi-keyboard/midi.keyboard.component';
import { ViewMidiKeyboardComponent } from './midi-keyboard/view-midi-keyboard/view.midi.keyboard.component';
import { SpecificationComponent } from './midi-keyboard/specification/specification.component';
import { MidiKeyboardService } from './midi-keyboard/midi.keyboard.service';
import { ViewMidiKeyboardService } from './midi-keyboard/view-midi-keyboard/view.midi.keyboard.service';
import { SpecificationService } from './midi-keyboard/specification/specification.service';
import { EnumService } from './util/enum.service';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MidiKeyboardComponent,
    ViewMidiKeyboardComponent,
    SpecificationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MidiKeyboardService,
    ViewMidiKeyboardService,
    SpecificationService,
    EnumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
