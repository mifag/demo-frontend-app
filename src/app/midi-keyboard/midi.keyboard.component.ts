import { Component } from '@angular/core';

import { MidiKeyboardService } from './midi.keyboard.service';
import { MidiKeyboardDto } from './../dto/midi.keyboard.dto';


@Component({
  selector: 'midi-keyboard',
  templateUrl: './midi.keyboard.component.html',
  styleUrls: ['./midi.keyboard.component.scss']
})
export class MidiKeyboardComponent {

  midiKeyboardList: MidiKeyboardDto[] = [];

  constructor(private midiKeyboardService: MidiKeyboardService) {
    this.getAllMidiKeyboards();
  }

  getAllMidiKeyboards() {
    this.midiKeyboardService.getMidiKeyboards().subscribe(midiKeyboards => {
      this.midiKeyboardList = midiKeyboards;
    });
  }
}
