const convertToRoman = require('./romanNumeralConverter');

describe('romanNumeral tests', ()=>{
  test('1000 should return M',()=>{
    expect(convertToRoman(1000)).toBe('M');
  });
  
  test('440 should return CDXL',()=>{
    expect(convertToRoman(440)).toBe('CDXL');
  });

  test('55 should return LV',()=>{
    expect(convertToRoman(55)).toBe('LV');
  });

  test('13 should not return XI',()=>{
    expect(convertToRoman(13)).not.toBe('XI');
  });
});