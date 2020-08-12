import { PropertyType, IProperty } from './types';
import { v4 } from 'uuid';

class StrengthProperty implements IProperty {
  id: string;
  value: number;
  type = PropertyType.StrengthProperty;
  constructor(value: number) {
    this.id = v4();
    this.value = value;
  }
}

export default StrengthProperty;
