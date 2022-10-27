import { PlayerEffect } from "./PlayerEffect";
export declare enum EncounterResult {
    SUCCESS = "success",
    FAIL = "fail"
}
export declare type EncounterOptionResult = {
    type: EncounterResult;
    title: string;
    text: string;
    effect: PlayerEffect;
    value: any;
};
