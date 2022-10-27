import { EncounterOptionResult, EncounterResult } from "./EncounterResult.js";
import { Attribute } from "./PlayerStats.js";
export declare type EncounterOption = {
    threshold: number;
    stat: Attribute;
} & Record<EncounterResult, EncounterOptionResult>;
