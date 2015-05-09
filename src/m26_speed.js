// Copyright 2015, Christopher Joakim <christopher.joakim  static gmail.com>
/// <reference path="../typings/node/node.d.ts" />
/// <reference path="m26_constants.d.ts" />
/// <reference path="m26_distance.d.ts" />
/// <reference path="m26_elapsed_time.d.ts" />
var c = require('./m26_constants');
var d = require('./m26_distance');
var t = require('./m26_elapsed_time');
var M26Constants = c.M26Constants; // OMIT
var M26Distance = d.M26Distance; // OMIT
var M26ElapsedTime = t.M26ElapsedTime; // OMIT
var M26Speed = (function () {
    // instance variables
    //dist   : M26Distance;
    //time   : M26ElapsedTime;
    function M26Speed(dist, time) {
    }
    return M26Speed;
})();
exports.M26Speed = M26Speed;
