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

  describe('M26', function() {
    it('defines UOM_MILES', function() {
      return expect(M26.UOM_MILES).toBe('m');
    });
    it('defines UOM_KILOMETERS', function() {
      return expect(M26.UOM_KILOMETERS).toBe('k');
    });
    it('defines UOM_YARDS', function() {
      return expect(M26.UOM_YARDS).toBe('y');
    });
    it('defines UNITS_OF_MEASURE', function() {
      return expect(M26.UNITS_OF_MEASURE).toEqual(['m', 'k', 'y']);
    });
    it('defines KILOMETERS_PER_MILE', function() {
      return expect(M26.KILOMETERS_PER_MILE).isWithin(0.000001, 1.61290322581);
    });
    it('defines YARDS_PER_MILE', function() {
      return expect(M26.YARDS_PER_MILE).isWithin(0.000001, 1760.0);
    });
    it('defines MILES_PER_KILOMETER', function() {
      return expect(M26.MILES_PER_KILOMETER).isWithin(0.000001, 0.62);
    });
    it('defines YARDS_PER_KILOMETER', function() {
      return expect(M26.YARDS_PER_KILOMETER).isWithin(0.000001, 1091.2);
    });
    return it('defines SECONDS_PER_HOUR', function() {
      expect(M26.SECONDS_PER_HOUR).toBeGreaterThan(3599.999);
      return expect(M26.SECONDS_PER_HOUR).toBeLessThan(3600.001);
    });
  });

}).call(this);
