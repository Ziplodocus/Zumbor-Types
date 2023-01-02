import { LingeringEffect } from "./PlayerEffect";
import { PlayerStats } from "./PlayerStats";

export type PlayerData = {
  user: string;
  name: string;
  description: string;
  health: number;
  score: number;
  stats: PlayerStats;
  effects: Map<LingeringEffect, LingeringEffect[]>;
};