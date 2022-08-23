//param - a string of words seperated by spaces

//returns - a single word which is the highest scoring
//        scores are determined by a combination of letter scores
//        each letter being it's spot in the alphabet a-1,b-2...z-26

//examples - high('aa b') => 'aa'
//           high('take me to seymak') => 'seymak'

//psuedocode
//Start of Function ('string of words') => 
//  Split String of Words in an Array of Words with no Spaces
//  Set a variable to highestWordObject which contains a word and a score {word:'', score:0}
//  For each word in the array of words
//    Set a variable score to 0
//    For each letter in word, add score equal to the letters position in the alphabet (using .toLowerCase() and .charCodeAt(index) methods)
//    If the score is greater the highestWordOjbect.score
//      Set highestWordObject.score = score
//      Set highestWordObject.word = word
//   Return the highestWordObject.word

const high = (x) => {
    stringOfWords = x.split(' ');
    highestWordObject = {
        word: '',
        score: 0
    }
    for (let word of stringOfWords) {
        let currentScore = 0;
        for (let letter of word) {
            currentScore += letter.toLowerCase().charCodeAt(0)-96;
        }
        if (currentScore > highestWordObject.score) {
            highestWordObject.score = currentScore;
            highestWordObject.word = word;
        }
    }
    return highestWordObject.word;
}