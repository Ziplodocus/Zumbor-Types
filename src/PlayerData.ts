import { PlayerStats } from "./PlayerStats";

export type PlayerData = {
  user: string;
  name: string;
  description: string;
  health: number;
  score: number;
  stats: PlayerStats;
  flags: Map<Flags, PlayerFlag>;
};

export type PlayerFlag = {
  name: Flags;
  duration: number;
  potency: number;
};

export enum Flags {
  POISONED = 'Poisoned',
  STRENGTH_BUFF = 'Strength Buff',
  CHARISMA_BUFF = 'Charisma Buff',
  AGILITY_BUFF = 'Agility Buff',
  WISDOM_BUFF = 'Wisdom Buff',
}