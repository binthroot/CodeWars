function encrypt(text, n) {
  let encryptString = text;
  for (iter = 0; iter < n; iter++) {
    evenString = '';
    oddString = '';
    for (index = 0; index < text.length; index++) {
      let currentIndex = encryptString[index];
      index % 2 === 0
        ? (evenString += currentIndex)
        : (oddString += currentIndex);
    }
    encryptString = oddString + evenString;
  }
  return encryptString;
}

const decrypt = (encryptedText, n) => {};

//Function begin - (encryptedText, numberOfEncryptions) =>
//determine if encrypted text is even or odd
// if odd
