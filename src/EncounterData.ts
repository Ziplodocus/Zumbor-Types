import { EncounterOption } from "./EncounterOption.js";
import { ColorResolvable } from "discord.js";
import { EncounterResult } from "./EncounterResult.js";
import { PlayerEffect } from "./PlayerEffect.js";
import { Attribute } from "./PlayerStats.js";

export type EncounterData = {
  title: string;
  text: string;
  color?: ColorResolvable;
  options: { [label: string]: EncounterOption; };
};

export function validate(data: Record<string, unknown>): EncounterData | Error {
  /*
    Assume data is correctly typed then try and desturcture
  */
  const eData = data as EncounterData;
  try {
    /*
      If property cannot be destructured then it doesn't
      exist and will throw an exception

      Type check the primitives and also check if
      non required properties are valid
    */
    const { title, text, options } = eData;
    if (eData.color && typeof eData.color !== 'string') return new Error('Color is not a string');
    for (let prop in [title, text]) {
      if (typeof prop !== 'string') return new Error(prop + ' is not a string');
    }
    for (const option in options) {
      const { threshold, stat, success, fail } = options[option];
      if (typeof threshold !== 'number') return new Error(threshold + ' is not a string');
      if (!Object.values(Attribute).includes(stat)) return new Error(stat + ' is not a valid Attribute');

      for (const result of [success, fail]) {
        const { type, title, text, effect, value } = result;
        for (let prop in [title, text]) {
          if (typeof prop !== 'string') return new Error(prop + ' is not a string');
        }
        if (!Object.values(EncounterResult).includes(type)) return new Error(type + ' is not a valid EncounterResult');
        if (!Object.values(PlayerEffect).includes(effect)) return new Error(effect + ' is not a valid PlayerEffect');
        if (typeof value !== 'number') return new Error(value + ' is not a number');
        return new Error();
      };
    }

    return eData;
  } catch (e) {
    if (e instanceof Error) return e;
    else if (typeof e === 'string') return new Error(e);
    console.error(e);
    return new Error('Unkown Error');
  }
}