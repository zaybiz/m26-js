/// <reference path="../typings/node/node.d.ts" />
/// <reference path="m26_constants.d.ts" />
export declare class M26ElapsedTime {
    hh: number;
    mm: number;
    ss: number;
    secs: number;
    constructor(n: string);
    constructor(n: number);
    seconds(): number;
    hours(): number;
    as_hhmmss(): string;
    private initialize_from_number(n);
    private initialize_from_string(n);
    private zero_pad(n);
}
