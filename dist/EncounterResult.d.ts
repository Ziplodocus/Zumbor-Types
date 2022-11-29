import { PlayerEffect } from "./PlayerEffect";
export declare enum EncounterResult {
    SUCCESS = "Success",
    FAIL = "Fail"
}
export declare type EncounterOptionResult = {
    type: EncounterResult;
    title: string;
    text: string;
    effect: PlayerEffect;
    potency: number;
};
