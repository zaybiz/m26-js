/// <reference path="../typings/node/node.d.ts" />
/// <reference path="m26_constants.d.ts" />
/// <reference path="m26_enums.d.ts" />
import e = require('./m26_enums');
export declare class M26Distance {
    value: number;
    uom: e.M26UOM;
    constructor(n: string, u?: e.M26UOM);
    as_miles(): number;
    as_kilometers(): number;
    as_yards(): number;
    add(another_instance: M26Distance): M26Distance;
    subtract(another_instance: M26Distance): M26Distance;
    private populated(obj);
}
