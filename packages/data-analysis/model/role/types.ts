import { ITalent } from '../talent/types';

/**
 * @description 角色
 * @interface IRole
 */
export interface IRole {
  id: symbol;
  name: string;
  sex: ISex;
  talentList: ITalent[];
}

export enum ISex {
  Male,
  Female,
  All, // 性别不限制武学的选择，如巫锦
}
