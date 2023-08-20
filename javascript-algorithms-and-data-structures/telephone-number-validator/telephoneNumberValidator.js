function telephoneCheck(str) {
  // create an array for check patterns
  const validPatterns = [
    // 555-555-5555
    /^\d{3}-\d{3}-\d{4}$/,

    // (555)555-5555
    /^\(\d{3}\)\d{3}-\d{4}$/,

    // (555) 555-5555
    /^\(\d{3}\) \d{3}-\d{4}$/,

    // 555 555 5555
    /^\d{3} \d{3} \d{4}$/,

    // 5555555555
    /^\d{10}$/,

    // 1 555 555 5555
    /^1 \d{3} \d{3} \d{4}$/,

    // 1 555-555-5555
    /^1 \d{3}-\d{3}-\d{4}$/,

    // 1 (555) 555-5555
    /^1 \(\d{3}\) \d{3}-\d{4}$/,

    // 1(555)555-5555
    /^1\(\d{3}\)\d{3}-\d{4}$/,
  ];

  // callback an array then returns a boolean value whether the pattern exists or not
  return validPatterns.some((pattern) => pattern.test(str));
}

module.exports = telephoneCheck;