import { PropertyType, IProperty } from './types';
import { v4 } from 'uuid';

class MasterMagicProperty implements IProperty {
  id: string;
  value: number;
  type = PropertyType.MasterMagicProperty;
  constructor(value: number) {
    this.id = v4();
    this.value = value;
  }
}

export default MasterMagicProperty;
