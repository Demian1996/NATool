import { IProperty } from '../property/types';
import { ITalent } from '../talent/types';

/**
 * @description 技能
 * @interface ISkill
 */
interface ISkill {
  id: string;
  name: string;
  description: string;
}

/**
 * @description 主动技能
 * @interface IActiveSkill
 * @extends {ISkill}
 */
interface IActiveSkill extends ISkill {
  isActive: true;
  execute: (inputPropertyMap: Map<string, IProperty>) => Map<string, IProperty>;
}

interface IActiveBuffSkill extends IActiveSkill {
  isActive: true;
  execute: (inputPropertyMap: Map<string, IProperty>) => Map
}

// 被动技能和天赋等价
type IPassiveSkill = ITalent;
