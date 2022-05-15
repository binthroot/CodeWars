//PREP

//parameter - receives an array consisting of positive integers and strings

//results - returns an array of only positive integers

//examples
//
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//psuedocode
// iterate through each element of array
//   if element is typeOf(string)
//      -> don't push it to new array
//   else
//      -> push hit to new array

const filter_list = (array) =>
  array.filter((element) => typeof element === "number");

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
