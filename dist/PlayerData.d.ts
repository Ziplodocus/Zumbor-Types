import { LingeringEffect, LingeringEffectKey } from "./PlayerEffect.js";
import { PlayerStats } from "./PlayerStats.js";
export declare type PlayerData = {
    user: string;
    name: string;
    description: string;
    health: number;
    score: number;
    stats: PlayerStats;
    effects: Record<LingeringEffectKey, LingeringEffect[]>;
};
export declare function validatePlayerData(wildData: any): Error | PlayerData;
