const telephoneCheck = require('./telephoneNumberValidator');

describe('telephone pattern tests', ()=>{
  test.each(["555-555-5555", "(555)555-5555", "1(555)555-5555"])(
    'patterns is valid', (str) => {
      expect(telephoneCheck(str)).toBeTruthy();
    },
  );

  test.each(["555-5555", "1 555)555-5555", "(6054756961)"])(
    'patterns is not valid', (str) => {
      expect(telephoneCheck(str)).toBeFalsy();
    },
  );
});