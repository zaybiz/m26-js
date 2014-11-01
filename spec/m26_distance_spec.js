(function() {
  beforeEach(function() {
    return jasmine.Expectation.addMatchers({
      isWithin: function(tolerance, expected) {
        return {
          compare: function(actual, tolerance, expected) {
            var max, min;
            this.pass = true;
            this.msg = 'Ok';
            min = expected - tolerance;
            max = expected + tolerance;
            this.data = {
              'actual': actual,
              'expected': expected,
              'tolerance': tolerance,
              'min': min,
              'max': max
            };
            if (false) {
              console.log('data: ' + JSON.stringify(this.data));
            }
            if (actual > max) {
              this.pass = false;
              this.msg = 'value is too large; expected ' + expected + ' but got ' + actual;
            }
            if (actual < min) {
              this.pass = false;
              this.msg = 'value is too small; expected ' + expected + ' but got ' + actual;
            }
            if (!pass) {
              console.log('failed: ' + JSON.stringify(this.data));
            }
            return {
              pass: this.pass,
              message: this.msg
            };
          }
        };
      }
    });
  });

  describe('Distance', function() {
    beforeEach(function() {
      var x;
      return x = 0;
    });
    it("should assume miles as UOM, and convert to other units", function() {
      var d;
      d = new Distance(26.2);
      expect(d.uom()).toBe(M26.UOM_MILES);
      expect(d.as_miles()).isWithin(0.0000000001, 26.2);
      expect(d.as_kilometers()).isWithin(0.0000000001, 42.258064516222);
      return expect(d.as_yards()).isWithin(0.000001, 46112.0);
    });
    it("should calculate a 10K, and convert to other units", function() {
      var d;
      d = new Distance(10.0, 'k');
      expect(d.uom()).toBe(M26.UOM_KILOMETERS);
      expect(d.as_miles()).isWithin(0.0000000001, 6.2);
      expect(d.as_kilometers()).isWithin(0.0000000001, 10.0);
      return expect(d.as_yards()).isWithin(0.000001, 10912.0);
    });
    it("should calculate an 1800y, and convert to other units", function() {
      var d;
      d = new Distance(1800.0, 'y');
      expect(d.uom()).toBe(M26.UOM_YARDS);
      expect(d.as_miles()).isWithin(0.0000000001, 1.0227272727272727);
      expect(d.as_kilometers()).isWithin(0.0000000001, 1.6495601173056818);
      return expect(d.as_yards()).isWithin(0.000001, 1800);
    });
    return it("should subtract", function() {
      var d1, d2, d3;
      d1 = new Distance(26.2);
      d2 = new Distance(10.0, 'k');
      d3 = d1.subtract(d2);
      expect(d3.uom()).toBe(M26.UOM_MILES);
      return expect(d3.as_miles()).isWithin(0.0000000001, 20.0);
    });
  });

}).call(this);
