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

// Email Lowercase correction validation function start
const correctEmail = 'test@gmail.com';
const emailValidation = function (email) {
  const inputEmail = email.toLowerCase().trim();
  const valid = inputEmail === correctEmail ? `Valid Email` : `Invalid Email`;
  return valid;
};
console.log(emailValidation('Test@Gmail.com')); // If a user types capital letter then it will be converted to lower letter, but mispelling will lead to invalid email
// Email Lowercase correction validation function end

// ReplaceAll was introduced in ES2021 start
const priceGb = `224,99£`;
const priceDollar = priceGb.replaceAll(',', '.').replaceAll('£', '$');
console.log(priceGb, `&`, priceDollar);
// ReplaceAll was introduced in ES2021 start
