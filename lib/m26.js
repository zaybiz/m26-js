//# sourceMappingURL=m26.js.map
var m26;
(function (m26) {
    var M26Age = (function () {
        function M26Age(n) {
            this.value = 0;
            this.value = parseFloat(n);
        }
        M26Age.prototype.val = function () {
            return this.value;
        };
        M26Age.prototype.max_pulse = function () {
            if (this.value <= 20) {
                return 200.0;
            }
            else {
                return 220.0 - this.value;
            }
        };
        M26Age.prototype.add = function (another_instance) {
            if (another_instance) {
                this.value = this.value + another_instance.value;
            }
        };
        M26Age.prototype.subtract = function (another_instance) {
            if (another_instance) {
                this.value = this.value - another_instance.value;
            }
        };
        M26Age.prototype.populated = function (obj) {
            if (obj === undefined) {
                return false;
            }
            if (obj === null) {
                return false;
            }
            return true;
        };
        return M26Age;
    })();
    m26.M26Age = M26Age;
})(m26 || (m26 = {}));
//# sourceMappingURL=m26_age.js.map
var M26Constants = (function () {
    function M26Constants() {
    }
    M26Constants.VERSION = '0.3.0';
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
//# sourceMappingURL=m26_constants.js.map
var e = require('./m26_enums');
var c = require('./m26_constants');
var m26;
(function (m26) {
    var M26Distance = (function () {
        function M26Distance(n, u) {
            if (u === void 0) { u = e.M26UOM.MILES; }
            this.value = 0;
            this.uom = m26.M26UOM.MILES;
            this.value = parseFloat(n);
            this.uom = u;
        }
        M26Distance.prototype.as_miles = function () {
            switch (this.uom) {
                case e.M26UOM.MILES:
                    return this.value;
                case e.M26UOM.KILOMETERS:
                    return this.value / c.M26Constants.KILOMETERS_PER_MILE;
                case e.M26UOM.YARDS:
                    return this.value / c.M26Constants.YARDS_PER_MILE;
                default:
                    return 0;
            }
        };
        M26Distance.prototype.as_kilometers = function () {
            switch (this.uom) {
                case e.M26UOM.MILES:
                    return this.value * c.M26Constants.KILOMETERS_PER_MILE;
                case e.M26UOM.KILOMETERS:
                    return this.value;
                case e.M26UOM.YARDS:
                    return (this.value / c.M26Constants.YARDS_PER_MILE) * c.M26Constants.MILES_PER_KILOMETER;
                default:
                    return 0;
            }
        };
        M26Distance.prototype.as_yards = function () {
            switch (this.uom) {
                case e.M26UOM.MILES:
                    return this.value * c.M26Constants.YARDS_PER_MILE;
                case e.M26UOM.KILOMETERS:
                    return (this.value / c.M26Constants.MILES_PER_KILOMETER) * c.M26Constants.YARDS_PER_MILE;
                case e.M26UOM.YARDS:
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
//# sourceMappingURL=m26_distance.js.map
var m26;
(function (m26) {
    var M26ElapsedTime = (function () {
        function M26ElapsedTime() {
        }
        return M26ElapsedTime;
    })();
    m26.M26ElapsedTime = M26ElapsedTime;
})(m26 || (m26 = {}));
//# sourceMappingURL=m26_elapsed_time.js.map
var m26;
(function (m26) {
    (function (M26UOM) {
        M26UOM[M26UOM["MILES"] = 0] = "MILES";
        M26UOM[M26UOM["KILOMETERS"] = 1] = "KILOMETERS";
        M26UOM[M26UOM["YARDS"] = 2] = "YARDS";
    })(m26.M26UOM || (m26.M26UOM = {}));
    var M26UOM = m26.M26UOM;
})(m26 || (m26 = {}));
//# sourceMappingURL=m26_enums.js.map
var m26;
(function (m26) {
    var M26Speed = (function () {
        function M26Speed() {
        }
        return M26Speed;
    })();
    m26.M26Speed = M26Speed;
})(m26 || (m26 = {}));
//# sourceMappingURL=m26_speed.js.map
//# sourceMappingURL=m26_structs.js.map