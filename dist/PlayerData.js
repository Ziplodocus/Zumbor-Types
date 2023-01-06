import { LingeringEffectKey } from "./PlayerEffect.js";
export function validatePlayerData(wildData) {
    // Assume playerData and then catch the exception if it isn't.
    const data = wildData;
    try {
        const { user, name, description, health, score, stats } = data;
        [user, name, description].forEach(supposedString => {
            if (typeof supposedString !== 'string')
                return new Error(`${supposedString} is not of type string`);
        });
        [health, score, ...Object.values(stats)].forEach(supposedNumber => {
            if (typeof supposedNumber !== 'number')
                return new Error(`${supposedNumber} is not of type number`);
        });
        if (!('effects' in data)) {
            const emptyEffects = {};
            Object.values(LingeringEffectKey).forEach(key => emptyEffects[key] = []);
            // @ts-ignore Can happen is input data is not playerdata
            data.effects = emptyEffects;
        }
        return data;
    }
    catch (e) {
        console.error(e);
        return new Error('Not valid player data');
    }
}
