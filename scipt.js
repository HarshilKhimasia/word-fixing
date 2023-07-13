let passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
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
