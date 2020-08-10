import StrengthProperty from '../model/Property/StrengthProperty';
import HardnessProperty from '../model/Property/HardnessProperty';
import AgilityProperty from '../model/Property/AgilityProperty';
import ConcentrationProperty from '../model/Property/ConcentrationProperty';
import IntelligenceProperty from '../model/Property/IntelligenceProperty';
import LuckProperty from '../model/Property/LuckProperty';
import MasterBoxingProperty from '../model/Property/MasterBoxingProperty';
import { PropertyType, IProperty } from '../model/Property/types';
import MasterKnifeProperty from '../model/Property/MasterKnifeProperty';
import MasterSwordProperty from '../model/Property/MasterSwordProperty';
import MasterMagicProperty from '../model/Property/MasterMagicProperty';

type PropertyCreator = (v: number) => IProperty;

class PropertyFactory {
  propertyCreatorMap: Map<PropertyType, PropertyCreator> = new Map();

  constructor() {
    this.propertyCreatorMap
      .set(PropertyType.StrengthProperty, this.createStrengthProperty)
      .set(PropertyType.HardnessProperty, this.createHardnessProperty)
      .set(PropertyType.AgilityProperty, this.createAgilityProperty)
      .set(PropertyType.IntelligenceProperty, this.createHardnessProperty)
      .set(PropertyType.ConcentrationProperty, this.createConcentrationProperty)
      .set(PropertyType.LuckProperty, this.createLuckProperty)
      .set(PropertyType.MasterBoxingProperty, this.createMasterBoxingProperty)
      .set(PropertyType.MasterKnifeProperty, this.createMasterKnifeProperty)
      .set(PropertyType.MasterSwordProperty, this.createMasterSwordProperty)
      .set(PropertyType.MasterMagicProperty, this.createMasterBoxingProperty);
  }

  create(propertyValueMap: Map<PropertyType, number>) {
    const propertyMap = new Map();
    propertyValueMap.forEach((value, key) => {
      const propertyCreator = this.propertyCreatorMap.get(key);
      if (!propertyCreator) {
        throw new Error(`没有属性${key}的创造器，请检查传入的配置是否正确`);
      }
      propertyMap.set(key, propertyCreator(value));
    });
    return propertyMap;
  }

  createStrengthProperty(v: number) {
    return new StrengthProperty(v);
  }
  createHardnessProperty(v: number) {
    return new HardnessProperty(v);
  }
  createAgilityProperty(v: number) {
    return new AgilityProperty(v);
  }
  createConcentrationProperty(v: number) {
    return new ConcentrationProperty(v);
  }
  createIntelligenceProperty(v: number) {
    return new IntelligenceProperty(v);
  }
  createLuckProperty(v: number) {
    return new LuckProperty(v);
  }
  createMasterBoxingProperty(v: number) {
    return new MasterBoxingProperty(v);
  }
  createMasterKnifeProperty(v: number) {
    return new MasterKnifeProperty(v);
  }
  createMasterSwordProperty(v: number) {
    return new MasterSwordProperty(v);
  }
  createMasterMagicProperty(v: number) {
    return new MasterMagicProperty(v);
  }
}

export default PropertyFactory;
