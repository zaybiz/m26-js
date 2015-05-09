/// <reference path="../typings/node/node.d.ts" />
/// <reference path="m26_constants.d.ts" />
/// <reference path="m26_age.d.ts" />
/// <reference path="m26_distance.d.ts" />
/// <reference path="m26_elapsed_time.d.ts" />
import a = require('./m26_age');
import d = require('./m26_distance');
import t = require('./m26_elapsed_time');
export declare class M26Speed {
    dist: d.M26Distance;
    etime: t.M26ElapsedTime;
    constructor(dist: d.M26Distance, etime: t.M26ElapsedTime);
    mph(): number;
    kph(): number;
    yph(): number;
    seconds_per_mile(): number;
    pace_per_mile(): string;
    age_graded(event_age: a.M26Age, graded_age: a.M26Age): M26Speed;
    projected_time(another_distance: d.M26Distance, algorithm?: string): string;
}
