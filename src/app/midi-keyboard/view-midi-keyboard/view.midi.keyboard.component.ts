import { Component } from '@angular/core';

import { ViewMidiKeyboardService } from './view.midi.keyboard.service';
import { MidiKeyboardDto } from './../dto/midi.keyboard.dto';
import { SpecificationDto } from './../dto/specification.dto';
import { SpecificationService } from './../specification/specification.service';
import { EnumService } from './../../util/enum.service';
import { RouterService } from './../../util/router.service';
import { Router } from '@angular/router';

@Component({
  selector: 'view-midi-keyboard',
  templateUrl: './view.midi.keyboard.component.html',
  styleUrls: ['./view.midi.keyboard.component.scss']
})
export class ViewMidiKeyboardComponent {

  midiKeyboardId = null;
  specificationId = null;
  midiKeyboardDto: MidiKeyboardDto = new MidiKeyboardDto();
  specificationDto: SpecificationDto = new SpecificationDto();

  constructor(private viewMidiKeyboardService: ViewMidiKeyboardService,
              private specificationService: SpecificationService,
              public enumService: EnumService,
              private routerService: RouterService,
              private router: Router) {
      this.midiKeyboardId = routerService.getMidiKeyboardId();
      this.getMidiKeyboardById();
  }

  getMidiKeyboardById() {
    this.viewMidiKeyboardService.getMidiById(this.midiKeyboardId).subscribe(midiKeyboard =>  {
      this.midiKeyboardDto = midiKeyboard;
    });
  }
}