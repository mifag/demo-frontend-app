import { Injectable } from '@angular/core';
import { TypeOfKeyEnum } from './../enums/type.of.key.enum';

@Injectable()
export class EnumService {

  getTypeOfKeyEnumValue(typeOfKeyEnum: TypeOfKeyEnum) {
    return TypeOfKeyEnum[typeOfKeyEnum];
  }
}
