/// <reference path="../typings/node/node.d.ts" />
export declare class M26Age {
    value: number;
    constructor(n: string);
    constructor(n: number);
    val(): number;
    max_pulse(): number;
    add(another_instance: M26Age): number;
    subtract(another_instance: M26Age): number;
    private populated(obj);
}
