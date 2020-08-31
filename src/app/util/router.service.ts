import { Injectable } from '@angular/core';

@Injectable()
export class RouterService {
  midiKeyboardId: number;


  getMidiKeyboardId() {
    return this.midiKeyboardId;
  }

  setMidiKeyboardId(midiKeyboardId) {
    this.midiKeyboardId = midiKeyboardId;
  }

}