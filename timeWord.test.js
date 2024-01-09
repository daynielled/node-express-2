const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('00:00 should return midnight', () => {
    expect(timeWord('00:00')).toBe('midnight');
  });

  test('12:00 should return noon', () => {
    expect(timeWord('12:00')).toBe('noon');
  });

  test('06:01 should return six oh one am', () => {
    expect(timeWord('06:01')).toBe('six oh one am');
  });

  test('06:30 should return six thirty am', () => {
    expect(timeWord('06:30')).toBe('six thirty am');
  });

  test('15:45 should return three forty five pm', () => {
    expect(timeWord('15:45')).toBe('three forty five pm');
  });

  test('15:02 should return three oh two pm', () => {
    expect(timeWord('15:02')).toBe('three oh two pm');
  });

  test('23:59 should return eleven fifty nine pm', () => {
    expect(timeWord('23:59')).toBe('eleven fifty nine pm');
  })

});