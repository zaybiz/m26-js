// Copyright 2015, Christopher Joakim <christopher.joakim  static gmail.com>
/// <reference path="../typings/node/node.d.ts" />
var M26Constants = (function () {
    function M26Constants() {
    }
    // class variables
    M26Constants.VERSION = '0.3.2';
    M26Constants.UOM_MILES = 'm';
    M26Constants.UOM_KILOMETERS = 'k';
    M26Constants.UOM_YARDS = 'y';
    M26Constants.UNITS_OF_MEASURE = [M26Constants.UOM_MILES, M26Constants.UOM_KILOMETERS, M26Constants.UOM_YARDS];
    M26Constants.KILOMETERS_PER_MILE = 1.609344;
    M26Constants.MILES_PER_KILOMETER = 0.621371192237334;
    M26Constants.YARDS_PER_KILOMETER = 1093.6132983377076;
    M26Constants.FEET_PER_KILOMETER = 3280.839895013123;
    M26Constants.FEET_PER_METER = 3.280839895013123;
    M26Constants.YARDS_PER_MILE = 1760.0;
    M26Constants.SECONDS_PER_HOUR = 3600.0;
    return M26Constants;
})();
exports.M26Constants = M26Constants;
