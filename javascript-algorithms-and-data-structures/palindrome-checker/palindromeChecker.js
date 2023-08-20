function palindrome(str) {
  str = str
    // replace anything other than a letter and digit with empty character. convert string to lowecase
    .replace(/[_\W]/g, "").toLowerCase();

  // return string to reversed string
  return str === str.split("").reverse().join("");
}

module.exports = palindrome;