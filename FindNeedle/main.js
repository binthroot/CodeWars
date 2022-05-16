// PREP
// A number 1 to number, if 3 fizz, if 5 buzz, 3&5 fizzbuzz

// parameters - a number that will be the last number we will iterate to
// number == will it always be a number? will it always be an integer? will it always be positive?

// returns - a series of numbers printed to the console with mutiples of 3 saying fizz, 5 saying buzz,
//   multiples of 3&5 together -> fizzbuzz

// examples -
// fizzBuzz(5)  - 1,2,fizz,4,buzz
// fizzBuzz(3)  - 1,2,fizz
// fizzBuzz(15) - 1,2,fizz,4,buzz,fizz,7,8,9,buzz,11,fizz,13,14,fizzBuzz (capitalized Buzz)

// psuedocode
// function fizzBuzz(number)
//   for each number starting: 1 -> final number  (for loop)
//     value = "" - empty string
//     if (number % 3 is 0) string += 'fizz'
//     elseif (number % 5 is 0)
//       string.length ? string += 'Buzz' : string += "buzz"
