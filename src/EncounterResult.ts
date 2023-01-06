import { Effect, LingeringEffect } from "./PlayerEffect";

export enum EncounterResult {
  SUCCESS = "Success",
  FAIL = "Fail",
}

export type EncounterOptionResult = {
  type: EncounterResult;
  title: string;
  text: string;
  baseEffect?: Effect;
  additionalEffect?: LingeringEffect;
};
