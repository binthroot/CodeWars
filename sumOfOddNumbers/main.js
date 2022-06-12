//PREP
//
//parameter - an integer of the row of the odd number triangle
//
//returns - the sum of the numbers of the row
//
//example 
//rowSumOddNumbers(2) => 8
//rowSumOddNumbers(3) => 27
//
//pseudocode
//
//return the cube of n
//
//this problem can be solved by knowing the math in this case
//
//otherwise could figure out what the first number of this row
//then sum up each number in the row
//using a for loop and adding the previous number+2 to the sum each time

const rowSumOddNumbers = (n) => n * n * n;
