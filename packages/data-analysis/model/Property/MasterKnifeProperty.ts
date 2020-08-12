import { PropertyType, IProperty } from './types';
import { v4 } from 'uuid';

class MasterKnifeProperty implements IProperty {
  id: string;
  value: number;
  type = PropertyType.MasterKnifeProperty;
  constructor(value: number) {
    this.id = v4();
    this.value = value;
  }
}

export default MasterKnifeProperty;
