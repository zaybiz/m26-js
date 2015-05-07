/// <reference path="../typings/node/node.d.ts" />
export declare class Age {
    value: number;
    constructor(n: string);
    val(): number;
    max_pulse(): number;
    add(another_instance: Age): void;
    subtract(another_instance: Age): void;
    private populated(obj);
}
