/// <reference path="../typings/node/node.d.ts" />
export interface M26TrainingZone {
    zone: number;
    age: number;
    max: number;
    pct_max: number;
    pulse: number;
}
export declare class M26Age {
    value: number;
    constructor(n: string);
    constructor(n: number);
    val(): number;
    max_pulse(): number;
    add(another_instance: M26Age): number;
    subtract(another_instance: M26Age): number;
    training_zones(): M26TrainingZone[];
    private populated(obj);
}
