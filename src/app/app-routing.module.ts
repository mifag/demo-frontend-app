import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMenuComponent } from './main-menu/main.menu.component';
import { MidiKeyboardComponent } from './midi-keyboard/midi.keyboard.component';
import { ViewMidiKeyboardComponent } from './midi-keyboard/view-midi-keyboard/view.midi.keyboard.component';
import { SpecificationComponent } from './midi-keyboard/specification/specification.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-menu',
    pathMatch: 'full'
  },
  {
    path: 'main-menu',
    component: MainMenuComponent
  },
  {
    path: 'midi-keyboard',
    component: MidiKeyboardComponent
  },
  {
    path: 'midi-keyboard/view-midi-keyboard/:midiKeyboardId',
    component: ViewMidiKeyboardComponent
  },
  {
    path: 'specification',
    component: SpecificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
