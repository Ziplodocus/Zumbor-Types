import { PlayerStats } from "./PlayerStats";
export declare type PlayerData = {
    user: string;
    name: string;
    description: string;
    health: number;
    score: number;
    stats: PlayerStats;
    flags: Map<Flags, PlayerFlag>;
};
export declare type PlayerFlag = {
    name: Flags;
    duration: number;
    potency: number;
};
export declare enum Flags {
    POISONED = "Poisoned",
    STRENGTH_BUFF = "Strength Buff",
    CHARISMA_BUFF = "Charisma Buff",
    AGILITY_BUFF = "Agility Buff",
    WISDOM_BUFF = "Wisdom Buff"
}
