/**
 * @description 武学
 * @interface IMartialArt
 */
interface IMartialArt {
  id: string;
  name: string;
  movementList: IMovement[];
}

/**
 * @description 招式
 * @interface IMovement
 */
interface IMovement {
  id: string;
  name: string;
  description: string;
  isActive: boolean; // 是否是主动技能
}
