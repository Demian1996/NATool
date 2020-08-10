import { IRole, Sex } from './types';
import { v4 } from 'uuid';
import { ITalent } from '../Talent/types';

class Role implements IRole {
  id: string;
  name: string;
  sex: Sex;
  talentList: ITalent[];
  constructor(name: string, sex: Sex, talentList: ITalent[]) {
    this.id = v4();
    this.name = name;
    this.sex = sex;
    this.talentList = talentList;
  }
}

export default Role;
