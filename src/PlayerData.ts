import { LingeringEffect, LingeringEffectKey } from "./PlayerEffect";
import { PlayerStats } from "./PlayerStats";

export type PlayerData = {
  user: string;
  name: string;
  description: string;
  health: number;
  score: number;
  stats: PlayerStats;
  effects: Record<LingeringEffectKey, LingeringEffect[]>;
};

type _LegacyPlayerData = {
  user: string;
  name: string;
  description: string;
  health: number;
  score: number;
  stats: PlayerStats;
}

export function validatePlayerData(wildData: any) {
  // Assume playerData and then catch the exception if it isn't.
  const data = wildData as PlayerData;
  try {
    const { user, name, description, health, score, stats } = data;
    [user, name, description].forEach(supposedString => {
      if (typeof supposedString !== 'string') return new Error(`${supposedString} is not of type string`);
    });
    [health, score, ...Object.values(stats)].forEach(supposedNumber => {
      if (typeof supposedNumber !== 'number') return new Error(`${supposedNumber} is not of type number`);
    })
    if (!('effects' in data)) {
      const emptyEffects: any = {};
      Object.values(LingeringEffectKey).forEach(key => emptyEffects[key] = []);
      // @ts-ignore Can happen is input data is not playerdata
      data.effects = emptyEffects as Record<LingeringEffectKey, LingeringEffect[]>;
    }
    return data;
  } catch (e) {
    console.error(e);
    return new Error('Not valid player data')
  }
}