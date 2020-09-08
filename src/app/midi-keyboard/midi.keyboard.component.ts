import { Component } from '@angular/core';

import { MidiKeyboardService } from './midi.keyboard.service';
import { MidiKeyboardDto } from './dto/midi.keyboard.dto';
import { Router } from "@angular/router";


@Component({
  selector: 'midi-keyboard',
  templateUrl: './midi.keyboard.component.html',
  styleUrls: ['./midi.keyboard.component.scss']
})
export class MidiKeyboardComponent {

  midiKeyboardList: MidiKeyboardDto[] = [];
  imageUrl: string;

  constructor(private midiKeyboardService: MidiKeyboardService,
              private router: Router) {
    this.getAllMidiKeyboards();
  }

  getAllMidiKeyboards() {
    this.midiKeyboardService.getMidiKeyboards().subscribe(midiKeyboards => {
      this.midiKeyboardList = midiKeyboards;
    });
  }

  viewMidiKeyboard(midiKeyboardId) {
    this.router.navigate(['midi-keyboard/view/', midiKeyboardId]);
  }
}
