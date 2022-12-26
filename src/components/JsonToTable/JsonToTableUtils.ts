import {upperFirst} from 'lodash';
export enum JSONObjectType {
    Array,
    ObjectWithNonNumericKeys,
    Object,
    Primitive
}

export interface JSONObjectKeys {
    labels: string[];
    type: JSONObjectType;
}

export default class JsonToTableUtils {
    /**
     * Get object type
     */
    public static getObjectType(obj: any): JSONObjectType {
        if (obj !== null && typeof obj === "object") {
            if (Array.isArray(obj)) {
                return JSONObjectType.Array;
            } else {
                if (Object.keys(obj).length) {
                    return JSONObjectType.ObjectWithNonNumericKeys;
                } else {
                    return JSONObjectType.Object;
                }
            }
        } else {
            return JSONObjectType.Primitive;
        }
    }

    public static checkLabelTypes(labels: any[]) {
        const reduced = labels.reduce(
            (accumulator, value) =>
                accumulator + (isNaN(Number(value)) ? value : Number(value)),
            0
        );
        return typeof reduced === "number" ? "number" : "string";
    }

    public static getUniqueObjectKeys(anArray: any[]): JSONObjectKeys {
        let labels: string[] = [];
        const objectType: JSONObjectType = JSONObjectType.Object;
        anArray.forEach(item => {
            labels = labels.concat(Object.keys(item)).filter((elem, pos, arr) => {
                return arr.indexOf(elem) === pos;
            });
        });

        return { labels, type: objectType };
    }
}
const SplitRegex=/(?<!^)([A-Z][a-z]|(?<=[a-z])[A-Z])|(?=[A-Z])|[.\-_]/;
export const capitalizeLabel=(label:string)=>{
    return  `${label.split(SplitRegex).map(text=>upperFirst(text)
    ).join(' ') }`;
   }