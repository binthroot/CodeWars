//PREP

//parameter - a positive number integer

//returns - a boolean value, true or false
// based on whether or not the number is 'narcissistic or not'

//example
//naracissistic(153) = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

//pseudocode
//Start - narc(number)

//Set NumArray = Stringify.Number -> Split into a 3 number array

//Number.Map that array -> Function maps (raise each number to the power(length numArray)).Reduce(that mapped array by taking it's sum)

//Return - Whether the sum of the reduced array is === to the parameter number

const narcissistic = (value) => {
  let numArray = String(value).split('');

  return (
    numArray
      .map((element) => {
        return Math.pow(Number(element), numArray.length);
      })
      .reduce((acc, element) => (acc += element)) === value
  );
};

console.log(narcissistic(1532));

for (let index = 0; index < 500; index++) {
  console.log(
    `${index} is${narcissistic(index) ? '' : ' not'} a narcisstic number`
  );
  console.log('==================================================');
}
