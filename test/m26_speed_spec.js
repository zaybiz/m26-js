(function() {
  describe('Speed', function() {
    it('calculates a 2-mile walk, with round numbers', function() {
      var d, s, t;
      d = new Distance(2.0);
      t = new ElapsedTime('30:00');
      s = new Speed(d, t);
      expect(s.mph()).isWithin(0.000001, 4);
      expect(s.kph()).isWithin(0.000001, 6.45161290324);
      expect(s.yph()).isWithin(0.000001, 7040);
      expect(s.seconds_per_mile()).isWithin(0.000001, 900);
      return expect(s.pace_per_mile()).toBe('15:00');
    });
    it('calculates a marathon, with fractional pace_per_mile', function() {
      var d, s, t;
      d = new Distance(26.2);
      t = new ElapsedTime('03:47:30');
      s = new Speed(d, t);
      expect(s.mph()).isWithin(0.000001, 6.90989010989011);
      expect(s.kph()).isWithin(0.000001, 11.1449840482344);
      expect(s.yph()).isWithin(0.000001, 12161.4065934066);
      expect(s.seconds_per_mile()).isWithin(0.000001, 520.992366412214);
      return expect(s.pace_per_mile()).toBe('8:40.99');
    });
    it('projected_time using a simple linear formula', function() {
      var d1, d2, hhmmss, s, t;
      d1 = new Distance(10.0);
      t = new ElapsedTime('1:30:00');
      s = new Speed(d1, t);
      expect(s.seconds_per_mile()).isWithin(0.000001, 540);
      expect(s.pace_per_mile()).toBe('9:00');
      d2 = new Distance(20.0);
      hhmmss = s.projected_time(d2, 'simple');
      return expect(hhmmss).toBe('03:00:00');
    });
    return it('projected_time using the exponential riegel formula', function() {
      var d1, d2, hhmmss, s, t;
      d1 = new Distance(10.0);
      t = new ElapsedTime('1:30:00');
      s = new Speed(d1, t);
      expect(s.seconds_per_mile()).isWithin(0.000001, 540);
      expect(s.pace_per_mile()).toBe('9:00');
      d2 = new Distance(20.0);
      hhmmss = s.projected_time(d2, 'riegel');
      return expect(hhmmss).toBe('03:07:38');
    });
  });

}).call(this);
