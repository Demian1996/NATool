import { ITalent } from '../Talent/types';

/**
 * @description 角色
 * @interface IRole
 */
export interface IRole {
  id: string;
  name: string;
  sex: Sex;
  talentList: ITalent[];
}

export enum Sex {
  Male,
  Female,
  All, // 性别不限制武学的选择，如巫锦
}
