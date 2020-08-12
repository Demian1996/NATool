import { IProperty, PropertyType } from './types';
import { v4 } from 'uuid';

class IntelligenceProperty implements IProperty {
  id: string;
  value: number;
  type = PropertyType.IntelligenceProperty;
  constructor(value: number) {
    this.id = v4();
    this.value = value;
  }
}

export default IntelligenceProperty;
