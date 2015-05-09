/// <reference path="../typings/node/node.d.ts" />
/// <reference path="m26_constants.d.ts" />
/// <reference path="m26_distance.d.ts" />
/// <reference path="m26_elapsed_time.d.ts" />
import d = require('./m26_distance');
import t = require('./m26_elapsed_time');
export declare class M26Speed {
    constructor(dist: d.M26Distance, time: t.M26ElapsedTime);
}
