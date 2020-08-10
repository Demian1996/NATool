/**
 * @description 属性
 * @export
 * @interface IProperty
 */
export interface IProperty {
  id: string;
  value: number;
  type: PropertyType;
}

/**
 * @description 臂力
 * @interface IStrengthProperty
 * @extends {IProperty}
 */
export interface IStrengthProperty extends IProperty {
  type: PropertyType.StrengthProperty;
}

/**
 * @description 根骨
 * @interface IHardnessProperty
 * @extends {IProperty}
 */
export interface IHardnessProperty extends IProperty {
  type: PropertyType.HardnessProperty;
}

/**
 * @description 身法
 * @interface IAgilityProperty
 * @extends {IProperty}
 */
export interface IAgilityProperty extends IProperty {
  type: PropertyType.AgilityProperty;
}

/**
 * @description 定力
 * @interface IConcentrationProperty
 * @extends {IProperty}
 */
export interface IConcentrationProperty extends IProperty {
  type: PropertyType.ConcentrationProperty;
}

/**
 * @description 悟性
 * @interface IIntelligenceProperty
 * @extends {IProperty}
 */
export interface IIntelligenceProperty extends IProperty {
  type: PropertyType.IntelligenceProperty;
}

/**
 * @description 福源
 * @interface ILuckProperty
 * @extends {IProperty}
 */
export interface ILuckProperty extends IProperty {
  type: PropertyType.LuckProperty;
}

/**
 * @description 拳法
 * @interface IMasterBoxingProperty
 * @extends {IProperty}
 */
export interface IMasterBoxingProperty extends IProperty {
  type: PropertyType.MasterBoxingProperty;
}

/**
 * @description 剑法
 * @interface IMasterSwordProperty
 * @extends {IProperty}
 */
export interface IMasterSwordProperty extends IProperty {
  type: PropertyType.MasterSwordProperty;
}

/**
 * @description 刀法
 * @interface IMasterKnifeProperty
 * @extends {IProperty}
 */
export interface IMasterKnifeProperty extends IProperty {
  type: PropertyType.MasterKnifeProperty;
}

/**
 * @description 奇门
 * @interface IMasterMagicProperty
 * @extends {IProperty}
 */
export interface IMasterMagicProperty extends IProperty {
  type: PropertyType.MasterMagicProperty;
}

enum PropertyType {
  StrengthProperty,
  HardnessProperty,
  AgilityProperty,
  IntelligenceProperty,
  ConcentrationProperty,
  LuckProperty,
  MasterBoxingProperty,
  MasterSwordProperty,
  MasterKnifeProperty,
  MasterMagicProperty,
}
