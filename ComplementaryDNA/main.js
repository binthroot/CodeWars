//PREP

//parameter - string of DNA represented by letters A,T,G or C

//returns - a string of the opposite T -> A or G -> C

//example
//
//DNAStrand('AAAA') => 'TTTT'
//DNAStrand('ATTGC') => 'TAACG'

//psuedocode
//
//split string into an array of letters
//.map each array to form a new array
//   switch statement with T - A, A - T, C - G, G - C

const DNAStrand = (dna) => {
  return dna
    .split('')
    .map((symbol) => {
      switch (symbol) {
        case 'A':
          return 'T';
          break;
        case 'T':
          return 'A';
          break;
        case 'C':
          return 'G';
          break;
        case 'G':
          return 'C';
          break;
      }
    })
    .join('');
};

console.log(DNAStrand('AAAA'));
