import StrengthProperty from '../model/Property/StrengthProperty';
import HardnessProperty from '../model/Property/HardnessProperty';
import AgilityProperty from '../model/Property/AgilityProperty';
import ConcentrationProperty from '../model/Property/ConcentrationProperty';
import IntelligenceProperty from '../model/Property/IntelligenceProperty';
import LuckProperty from '../model/Property/LuckProperty';
import MasterBoxingProperty from '../model/Property/MasterBoxingProperty';
import { PropertyType, IProperty } from '../model/Property/types';

type PropertyCreator = (v: number) => IProperty;

class PropertyFactory {
  propertyCreatorMap: Map<PropertyType, PropertyCreator>;

  constructor() {
    this.propertyCreatorMap.set(PropertyType.StrengthProperty, this.createStrengthProperty);
    this.propertyCreatorMap.set(PropertyType.HardnessProperty, this.createHardnessProperty);
    this.propertyCreatorMap.set(PropertyType.AgilityProperty, this.createAgilityProperty);
    this.propertyCreatorMap.set(PropertyType.IntelligenceProperty, this.createHardnessProperty);
    this.propertyCreatorMap.set(PropertyType.ConcentrationProperty, this.createConcentrationProperty);
    this.propertyCreatorMap.set(PropertyType.LuckProperty, this.createLuckProperty);
    this.propertyCreatorMap.set(PropertyType.MasterBoxingProperty, this.createMasterBoxingProperty);
    this.propertyCreatorMap.set(PropertyType.MasterKnifeProperty, this.createMasterKnifeProperty);
    this.propertyCreatorMap.set(PropertyType.MasterSwordProperty, this.createMasterSwordProperty);
    this.propertyCreatorMap.set(PropertyType.MasterMagicProperty, this.createMasterBoxingProperty);
  }

  create(propertyMap: Map<PropertyType, number>) {
    return Object.keys(propertyMap).map((key) => {
      const propertyCreator = this.propertyCreatorMap.get(key);
      if (!propertyCreator) {
        throw new Error(`没有属性${key}的创造器，请检查传入的配置是否正确`);
      }
      return propertyCreator(propertyMap.get(key));
    });
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
