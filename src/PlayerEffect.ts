export enum LingeringEffectKey {
  CHARISMA = "Charisma",
  STRENGTH = "Strength",
  AGILITY = "Agility",
  WISDOM = "Wisdom",
  POISON = "Poisoned",
  REGENERATE = "Regeneration"
}

export enum EffectKey {
  DAMAGE = "Damage",
  HEAL = "Heal",
  CHARISMA = "Charisma",
  STRENGTH = "Strength",
  AGILITY = "Agility",
  WISDOM = "Wisdom",
}

export interface Effect {
  name: EffectKey;
  potency: number;
}

export enum LingeringEffectType {
  BUFF = 'Buff',
  DEBUFF = 'Debuff'
}

export interface LingeringEffect {
  type: LingeringEffectType;
  name: LingeringEffectKey;
  potency: number;
  duration: number;
}