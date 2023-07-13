let passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const firstLetter = passengerLower.charAt(0);
const capitalFirstLetter = firstLetter.toUpperCase();
passenger = `${capitalFirstLetter}${passengerLower.slice(1)}`;
console.log(passenger);
