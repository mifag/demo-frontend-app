import { SkillLevelEnum } from '../../enums/skill.level.enum';
import { SexEnum } from '../../enums/sex.enum';

export class OwnerDto {
  id: number;
  name: string;
  sex: SexEnum;
  age: number;
  skillLevel: SkillLevelEnum;
}