import { IProperty, PropertyType } from './types';
import { v4 } from 'uuid';

class ConcentrationProperty implements IProperty {
  id: string;
  value: number;
  type = PropertyType.ConcentrationProperty;
  constructor(value: number) {
    this.id = v4();
    this.value = value;
  }
}

export default ConcentrationProperty;
