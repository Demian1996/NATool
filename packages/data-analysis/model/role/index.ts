import { IRole, Sex } from './types';
import { v4 } from 'uuid';
import { ITalent } from '../Talent/types';
import { PropertyType, IProperty } from '../Property/types';

class Role implements IRole {
  id: string;
  name: string;
  sex: Sex;
  propertyMap: Map<PropertyType, IProperty>;
  talentMap: Map<string, ITalent>;
  constructor(name: string, sex: Sex, propertyMap: Map<PropertyType, IProperty>, talentMap: Map<string, ITalent>) {
    this.id = v4();
    this.name = name;
    this.sex = sex;
    this.propertyMap = propertyMap;
    this.talentMap = talentMap;
  }
  getProperty(k: PropertyType) {
    return this.propertyMap.get(k);
  }
}

export default Role;
