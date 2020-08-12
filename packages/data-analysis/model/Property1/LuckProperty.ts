import { PropertyType, IProperty } from './types';
import { v4 } from 'uuid';

class LuckProperty implements IProperty {
  id: string;
  value: number;
  type = PropertyType.LuckProperty;
  constructor(value: number) {
    this.id = v4();
    this.value = value;
  }
}

export default LuckProperty;
