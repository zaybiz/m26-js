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

export declare class M26Distance {
    value: number;
    uom: string;
    constructor(num: number, unit?: string);
    as_miles(): number;
    as_kilometers(): number;
    as_yards(): number;
    add(another_instance: M26Distance): M26Distance;
    subtract(another_instance: M26Distance): M26Distance;
    private populated(obj);
}

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

export declare class M26Speed {
    dist: M26Distance;
    etime: M26ElapsedTime;
    constructor(dist: M26Distance, etime: M26ElapsedTime);
    mph(): number;
    kph(): number;
    yph(): number;
    seconds_per_mile(): number;
    pace_per_mile(): string;
    age_graded(event_age: M26Age, graded_age: M26Age): M26Speed;
    projected_time(another_distance: M26Distance, algorithm?: string): string;
}
