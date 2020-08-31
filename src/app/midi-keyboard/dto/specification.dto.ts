import { TypeOfKeyEnum } from "./../../enums/type.of.key.enum";

export class SpecificationDto {
  specificationId: number;
  weight: number;
  length: number;
  width: number;
  velocity: boolean;
  typeOfKey: TypeOfKeyEnum;
}