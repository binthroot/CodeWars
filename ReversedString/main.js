// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

const solution = (s) => {
  return s.split("").reverse().join("");
};

console.log(solution("dogs"));
//expect "sgods"
