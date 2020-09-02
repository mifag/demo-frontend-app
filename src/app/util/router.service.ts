import { Injectable } from '@angular/core';

@Injectable()
export class RouterService {
  midiKeyboardId: number;
  specificationId: number;

  getMidiKeyboardId() {
    return this.midiKeyboardId;
  }

  setMidiKeyboardId(midiKeyboardId) {
    this.midiKeyboardId = midiKeyboardId;
  }

  getSpecificationId() {
    return this.specificationId;
  }

  setSpecificationId(specificationId) {
    this.specificationId = specificationId;
  }
}