/// <reference path="../typings/node/node.d.ts" />
/// <reference path="m26_constants.d.ts" />
/// <reference path="m26_age.d.ts" />
import a = require('./m26_age');
export declare class M26AgeCalculator {
    constructor();
    milliseconds_per_year(): number;
    calculate(birth_yyyy_mm_dd: string, as_of_yyyy_mm_dd: string): a.M26Age;
    private populated(obj);
}
