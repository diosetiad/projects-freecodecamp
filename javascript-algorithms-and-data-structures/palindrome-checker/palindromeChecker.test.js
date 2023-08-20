const palindrome = require("./palindromeChecker");

describe('palindrome tests', ()=>{
  test.each(["eye", "_eye", "never odd or even", "0_0 (: /-\ :) 0-0"])(
    '%s is palindrome', (str) => {
        expect(palindrome(str)).toBeTruthy();
    },
);

test.each(["nope", "not a palindrome", "five|\_/|four"])(
  '%s not palindrome', (str) => {
      expect(palindrome(str)).toBeFalsy();
  },
);
});