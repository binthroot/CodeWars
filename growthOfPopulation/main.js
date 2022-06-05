//PREP
//
//parameters  - 4 parameters
//
//p0 - the initial population expressed as an integer
//
//percent - the percentage increased expressed as a percent, not a decimal
//
//aug - inhabitants coming to town each years as an integer
//
//p - target populations
//
//example
//nbYear(1500, 5, 100, 5000) - 15 iterations to reach
//nbYear(1500000, 2.5, 10000, 2000000) - 10 iterations
//
//pseudocode
//
//nbYear(population, percentage, increase, goal)
//set population to an internal population, sumPop
//set a variable called iterations to 0
//while sumPop is less than goal
//   sumPop + (sumPop * percentage) + increase increment to sumPop
//   increment iterations
//return iterations
//
const nbYear = (p0, percent, aug, p) => {
  let sumPop = p0;
  let iterations = 0;
  while (sumPop < p) {
    sumPop += Math.floor(sumPop * percent * 0.01) + aug;
    console.log(sumPop);
    iterations++;
  }
  return iterations;
};

console.log(nbYear(1500, 5, 100, 5000));
