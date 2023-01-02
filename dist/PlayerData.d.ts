import { Effect, LingeringEffect } from "./PlayerEffect";
import { PlayerStats } from "./PlayerStats";
export declare type PlayerData = {
    user: string;
    name: string;
    description: string;
    health: number;
    score: number;
    stats: PlayerStats;
    effects: Map<Effect, LingeringEffect[]>;
};
