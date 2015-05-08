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
