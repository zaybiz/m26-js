var e = require('./m26_enums');
var c = require('./m26_constants');
var M26Distance = (function () {
    function M26Distance(n, u) {
        if (u === void 0) { u = 0 /* MILES */; }
        this.value = 0;
        this.uom = 0 /* MILES */;
        this.value = parseFloat(n);
        this.uom = u;
    }
    M26Distance.prototype.as_miles = function () {
        switch (this.uom) {
            case 0 /* MILES */:
                return this.value;
            case 1 /* KILOMETERS */:
                return this.value / c.M26Constants.KILOMETERS_PER_MILE;
            case 2 /* YARDS */:
                return this.value / c.M26Constants.YARDS_PER_MILE;
            default:
                return 0;
        }
    };
    M26Distance.prototype.as_kilometers = function () {
        switch (this.uom) {
            case 0 /* MILES */:
                return this.value * c.M26Constants.KILOMETERS_PER_MILE;
            case 1 /* KILOMETERS */:
                return this.value;
            case 2 /* YARDS */:
                return (this.value / c.M26Constants.YARDS_PER_MILE) * c.M26Constants.MILES_PER_KILOMETER;
            default:
                return 0;
        }
    };
    M26Distance.prototype.as_yards = function () {
        switch (this.uom) {
            case 0 /* MILES */:
                return this.value * c.M26Constants.YARDS_PER_MILE;
            case 1 /* KILOMETERS */:
                return (this.value / c.M26Constants.MILES_PER_KILOMETER) * c.M26Constants.YARDS_PER_MILE;
            case 2 /* YARDS */:
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
exports.M26Distance = M26Distance;
//# sourceMappingURL=m26_distance.js.map