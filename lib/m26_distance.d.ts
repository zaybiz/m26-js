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
