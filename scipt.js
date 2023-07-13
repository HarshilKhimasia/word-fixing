let passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const firstLetter = passengerLower.charAt(0);
const capitalFirstLetter = firstLetter.toUpperCase();
passenger = `${capitalFirstLetter}${passengerLower.slice(1)}`;
console.log(passenger);

// Alternate and easy way start
let passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
passenger = passengerCorrect;
console.log(passenger);
// Alternate and easy way end
//-----------------------------**********************---------------------------------//
// Function for correcting any word start
const wordCorrect = function (word) {
  const wordLower = word.toLowerCase();
  const wordCorrect = word[0].toUpperCase() + wordLower.slice(1);
  return wordCorrect;
};

console.log(wordCorrect('haRsHil'));
// Function for correcting any word end
//-----------------------------**********************---------------------------------//
