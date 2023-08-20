function rot13(str) {
  return (
    str
      // returns a new string with matches any characters between A and Z
      .replace(
        /[A-Z]/g,
        // replaced by string created from the specified sequence of UTF-16 code units wich returns an integer modulus 26(number of alphabet) plus 65(ASCII dec = A)
        (L) => String.fromCharCode((L.charCodeAt(0) % 26) + 65)
      )
  );
}

module.exports = rot13;