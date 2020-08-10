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

export enum PropertyType {
  StrengthProperty, // 臂力
  HardnessProperty, // 根骨
  AgilityProperty, // 身法
  IntelligenceProperty, // 悟性
  ConcentrationProperty, // 定力
  LuckProperty, // 福源
  MasterBoxingProperty, // 拳法
  MasterSwordProperty, // 剑法
  MasterKnifeProperty, // 刀法
  MasterMagicProperty, // 奇门
}
