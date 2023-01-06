import { Effect, LingeringEffect } from "./PlayerEffect";
export declare enum EncounterResult {
    SUCCESS = "Success",
    FAIL = "Fail"
}
export declare type EncounterOptionResult = {
    type: EncounterResult;
    title: string;
    text: string;
    baseEffect?: Effect;
    additionalEffect?: LingeringEffect;
};
