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
  StrengthProperty = 'strengthProperty', // 臂力
  HardnessProperty = 'hardnessProperty', // 根骨
  AgilityProperty = 'agilityProperty', // 身法
  IntelligenceProperty = 'intelligenceProperty', // 悟性
  ConcentrationProperty = 'concentrationProperty', // 定力
  LuckProperty = 'luckProperty', // 福源
  MasterBoxingProperty = 'masterBoxingProperty', // 拳法
  MasterSwordProperty = 'masterSwordProperty', // 剑法
  MasterKnifeProperty = 'masterKnifeProperty', // 刀法
  MasterMagicProperty = 'masterMagicProperty', // 奇门
}
