import Role from '../model/Role';
import { Sex } from '../model/Role/types';
import PropertyFactory from '../factory/PropertyFactory';
import { PropertyType } from '../model/Property/types';

const propertyFactory = new PropertyFactory();

const talentMap = new Map();
const propertyValueMap = new Map()
  .set(PropertyType.StrengthProperty, 91)
  .set(PropertyType.HardnessProperty, 91)
  .set(PropertyType.AgilityProperty, 91)
  .set(PropertyType.ConcentrationProperty, 91)
  .set(PropertyType.IntelligenceProperty, 74)
  .set(PropertyType.LuckProperty, 100);
const propertyMap = propertyFactory.create(propertyValueMap);

const lingXue = new Role('凌雪', Sex.Female, propertyMap, talentMap);

console.log(lingXue.getProperty(PropertyType.StrengthProperty));
