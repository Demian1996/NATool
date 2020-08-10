import { IProperty, PropertyType } from './types';
import { v4 } from 'uuid';

class AgilityProperty implements IProperty {
  id: string;
  value: number;
  type = PropertyType.AgilityProperty;
  constructor(value: number) {
    this.id = v4();
    this.value = value;
  }
}

export default AgilityProperty;
