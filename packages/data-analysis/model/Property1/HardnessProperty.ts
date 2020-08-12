import { IProperty, PropertyType } from './types';
import { v4 } from 'uuid';

class HardnessProperty implements IProperty {
  id: string;
  value: number;
  type = PropertyType.HardnessProperty;
  constructor(value: number) {
    this.id = v4();
    this.value = value;
  }
}

export default HardnessProperty;
