import { EncounterOption } from "./EncounterOption.js";
import { ColorResolvable } from "discord.js";
export declare type EncounterData = {
    title: string;
    text: string;
    color?: ColorResolvable;
    options: {
        [label: string]: EncounterOption;
    };
};
