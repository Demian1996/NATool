/**
 * @description 装备
 * @interface IEquipment
 */
export interface IEquipment {
  id: string;
  name: string;
  slot: IEquipStrategy[]; // 装备效果槽，每个槽装备一个效果
}

/**
 * @description 效果
 * @interface IEquipStrategy
 */
export interface IEquipStrategy {
  id: string;
  execute: (inputStream: number) => number;
}
