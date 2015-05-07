/// <reference path="../typedefs/node.d.ts" />
export declare class CounterHash {
    static VERSION: string;
    values: Object;
    constructor();
    value(key: string): number;
    sum(): number;
    increment(key: string): void;
    decrement(key: string): void;
    add(key: string, n: number): void;
    subtract(key: string, n: number): void;
    sorted_keys(): string[];
    sorted_tuples(): Object[];
    private populated(s);
}
