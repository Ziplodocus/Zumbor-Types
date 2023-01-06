import { EncounterResult } from "./EncounterResult.js";
import { EffectKey, LingeringEffectKey } from "./PlayerEffect.js";
import { Attribute } from "./PlayerStats.js";
export function validate(data) {
    /*
        Assume data is correctly typed then try and desturcture
      */
    const eData = data;
    try {
        /*
          If property cannot be destructured then it doesn't
          exist and will throw an exception
    
          Type check the primitives and also check if
          non required properties are valid
        */
        const { title, text, options } = eData;
        if (eData.color && typeof eData.color !== 'string')
            return new Error('Color is not a string');
        for (let prop in [title, text]) {
            if (typeof prop !== 'string')
                return new Error(prop + ' is not a string');
        }
        if (Object.keys(options).length <= 0)
            return new Error('Please add at least one option!');
        if (Object.keys(options).length > 4)
            return new Error('That\'s too many options!');
        for (const option in options) {
            const { threshold, stat, "Success": success, "Fail": fail } = options[option];
            if (typeof threshold !== 'number')
                return new Error(threshold + ' is not a number');
            if (!Object.values(Attribute).includes(stat))
                return new Error(stat + ' is not a valid Attribute');
            for (const result of [success, fail]) {
                const { type, title, text, baseEffect, additionalEffect } = result;
                for (let prop in [title, text]) {
                    if (typeof prop !== 'string')
                        return new Error(prop + ' is not a string');
                }
                if (baseEffect) {
                    if (!Object.values(EncounterResult).includes(type))
                        return new Error(type + ' is not a valid EncounterResult');
                    if (!Object.values(EffectKey).includes(baseEffect.name))
                        return new Error(baseEffect.name + ' is not a valid effect');
                    if (typeof baseEffect.potency !== 'number')
                        return new Error(baseEffect.potency + ' is not a number');
                }
                if (additionalEffect) {
                    if (!Object.values(LingeringEffectKey).includes(additionalEffect.name))
                        return new Error(additionalEffect.name + ' is not a valid effect');
                    if (typeof additionalEffect.potency !== 'number')
                        return new Error(additionalEffect.potency + ' is not a number');
                    if (typeof additionalEffect.duration !== 'number')
                        return new Error(additionalEffect.duration + ' is not a number');
                }
            }
            ;
        }
        return eData;
    }
    catch (e) {
        if (e instanceof Error)
            return e;
        else if (typeof e === 'string')
            return new Error(e);
        console.error(e);
        return new Error('Unkown Error');
    }
}
