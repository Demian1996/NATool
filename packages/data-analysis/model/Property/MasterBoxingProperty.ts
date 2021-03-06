import { PropertyType, IProperty } from './types';
import { v4 } from 'uuid';

class MasterBoxingProperty implements IProperty {
  id: string;
  value: number;
  type = PropertyType.MasterBoxingProperty;
  constructor(value: number) {
    this.id = v4();
    this.value = value;
  }
}

export default MasterBoxingProperty;
