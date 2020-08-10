/**
 * @description 属性
 * @export
 * @interface IProperty
 */
export interface IProperty {
  id: string;
  name: string;
  description: string;
  value: number;
}

/**
 * @description 臂力
 * @interface IStrengthProperty
 * @extends {IProperty}
 */
export interface IStrengthProperty extends IProperty {}

/**
 * @description 根骨
 * @interface IHardnessProperty
 * @extends {IProperty}
 */
export interface IHardnessProperty extends IProperty {}

/**
 * @description 身法
 * @interface IAgilityProperty
 * @extends {IProperty}
 */
export interface IAgilityProperty extends IProperty {}

/**
 * @description 定力
 * @interface IConcentrationProperty
 * @extends {IProperty}
 */
export interface IConcentrationProperty extends IProperty {}

/**
 * @description 悟性
 * @interface IIntelligenceProperty
 * @extends {IProperty}
 */
export interface IIntelligenceProperty extends IProperty {}

/**
 * @description 福源
 * @interface ILuckProperty
 * @extends {IProperty}
 */
export interface ILuckProperty extends IProperty {}

/**
 * @description 拳法
 * @interface IMasterBoxingProperty
 * @extends {IProperty}
 */
export interface IMasterBoxingProperty extends IProperty {}

/**
 * @description 剑法
 * @interface IMasterSwordProperty
 * @extends {IProperty}
 */
export interface IMasterSwordProperty extends IProperty {}

/**
 * @description 刀法
 * @interface IMasterKnifeProperty
 * @extends {IProperty}
 */
export interface IMasterKnifeProperty extends IProperty {}

/**
 * @description 奇门
 * @interface IMasterMagicProperty
 * @extends {IProperty}
 */
export interface IMasterMagicProperty extends IProperty {}
