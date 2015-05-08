// Copyright 2015, Christopher Joakim <christopher.joakim  static gmail.com>
var c = require('./m26_constants');
var m26;
(function (m26) {
    //var expect = chai.expect;
    var M26Constants = c.M26Constants;
    var M26Distance = (function () {
        function M26Distance(num, unit) {
            if (unit === void 0) { unit = M26Constants.UOM_MILES; }
            // instance variables
            this.value = 0;
            this.uom = M26Constants.UOM_MILES;
            this.value = parseFloat(num);
            this.uom = ('' + unit).trim();
        }
        M26Distance.prototype.as_miles = function () {
            switch (this.uom) {
                case M26Constants.UOM_MILES:
                    return this.value;
                case M26Constants.UOM_KILOMETERS:
                    return this.value / c.M26Constants.KILOMETERS_PER_MILE;
                case M26Constants.UOM_YARDS:
                    return this.value / c.M26Constants.YARDS_PER_MILE;
                default:
                    return 0;
            }
        };
        M26Distance.prototype.as_kilometers = function () {
            switch (this.uom) {
                case M26Constants.UOM_MILES:
                    return this.value * c.M26Constants.KILOMETERS_PER_MILE;
                case M26Constants.UOM_KILOMETERS:
                    return this.value;
                case M26Constants.UOM_YARDS:
                    return (this.value / c.M26Constants.YARDS_PER_MILE) * c.M26Constants.MILES_PER_KILOMETER;
                default:
                    return 0;
            }
        };
        M26Distance.prototype.as_yards = function () {
            switch (this.uom) {
                case M26Constants.UOM_MILES:
                    return this.value * c.M26Constants.YARDS_PER_MILE;
                case M26Constants.UOM_KILOMETERS:
                    return (this.value / c.M26Constants.MILES_PER_KILOMETER) * c.M26Constants.YARDS_PER_MILE;
                case M26Constants.UOM_YARDS:
                    return this.value;
                default:
                    return 0;
            }
        };
        M26Distance.prototype.add = function (another_instance) {
            if (this.populated(another_instance)) {
                var m1 = this.as_miles();
                var m2 = another_instance.as_miles();
                return new M26Distance('' + (m1 + m2));
            }
            else {
                return new M26Distance('' + this.as_miles());
            }
        };
        M26Distance.prototype.subtract = function (another_instance) {
            if (this.populated(another_instance)) {
                var m1 = this.as_miles();
                var m2 = another_instance.as_miles();
                return new M26Distance('' + (m1 - m2));
            }
            else {
                return new M26Distance('' + this.as_miles());
            }
        };
        M26Distance.prototype.populated = function (obj) {
            if (obj === undefined) {
                return false;
            }
            if (obj === null) {
                return false;
            }
            return true;
        };
        return M26Distance;
    })();
    m26.M26Distance = M26Distance;
})(m26 || (m26 = {}));
