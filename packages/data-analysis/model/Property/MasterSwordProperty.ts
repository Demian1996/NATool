import { PropertyType, IProperty } from './types';
import { v4 } from 'uuid';

class MasterSwordProperty implements IProperty {
  id: string;
  value: number;
  type = PropertyType.MasterSwordProperty;
  constructor(value: number) {
    this.id = v4();
    this.value = value;
  }
}

export default MasterSwordProperty;
