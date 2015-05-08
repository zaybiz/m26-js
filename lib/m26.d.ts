/// <reference path="../typings/node/node.d.ts" />
export declare class M26Age {
    value: number;
    constructor(n: string);
    val(): number;
    max_pulse(): number;
    add(another_instance: M26Age): void;
    subtract(another_instance: M26Age): void;
    private populated(obj);
}

/// <reference path="../typings/node/node.d.ts" />
export declare class M26Constants {
    static VERSION: string;
    static UOM_MILES: string;
    static UOM_KILOMETERS: string;
    static UOM_YARDS: string;
    static UNITS_OF_MEASURE: string[];
    static KILOMETERS_PER_MILE: number;
    static MILES_PER_KILOMETER: number;
    static YARDS_PER_KILOMETER: number;
    static FEET_PER_KILOMETER: number;
    static FEET_PER_METER: number;
    static YARDS_PER_MILE: number;
    static SECONDS_PER_HOUR: number;
}

/// <reference path="../typings/node/node.d.ts" />
/// <reference path="m26_constants.d.ts" />
export declare class M26Distance {
    value: number;
    uom: string;
    constructor(num: string, unit?: string);
    as_miles(): number;
    as_kilometers(): number;
    as_yards(): number;
    add(another_instance: M26Distance): M26Distance;
    subtract(another_instance: M26Distance): M26Distance;
    private populated(obj);
}

/// <reference path="../typings/node/node.d.ts" />
export declare class M26ElapsedTime {
}

/// <reference path="../typings/node/node.d.ts" />
export declare class M26Speed {
}
