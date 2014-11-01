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

  describe('ElapsedTime', function() {
    it('constructs with a number of seconds', function() {
      var t;
      t = new ElapsedTime(3665);
      expect(t.as_hhmmss()).toBe('01:01:05');
      expect(t.seconds()).isWithin(0.000001, 3665.0);
      return expect(t.hours()).isWithin(0.000001, 1.0180555555555555);
    });
    it('constructs with a hh:mm:ss string', function() {
      var t;
      t = new ElapsedTime('1:1:5');
      expect(t.as_hhmmss()).toBe('01:01:05');
      t = new ElapsedTime('01:01:05');
      expect(t.as_hhmmss()).toBe('01:01:05');
      t = new ElapsedTime(' 01 : 01 : 05 ');
      return expect(t.as_hhmmss()).toBe('01:01:05');
    });
    it('constructs with a mm:ss string', function() {
      var t;
      t = new ElapsedTime('1:5');
      expect(t.as_hhmmss()).toBe('00:01:05');
      t = new ElapsedTime('01:57');
      expect(t.as_hhmmss()).toBe('00:01:57');
      expect(t.seconds()).isWithin(0.000001, 117.0);
      return expect(t.hours()).isWithin(0.000001, 0.0325);
    });
    return it('constructs with a ss string', function() {
      var t;
      t = new ElapsedTime('5');
      expect(t.as_hhmmss()).toBe('00:00:05');
      t = new ElapsedTime(' 5 ');
      expect(t.as_hhmmss()).toBe('00:00:05');
      expect(t.seconds()).isWithin(0.000001, 5.0);
      return expect(t.hours()).isWithin(0.000001, 0.001388888888888889);
    });
  });

}).call(this);
