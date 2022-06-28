//p - 2 parameters, one string and an array of strings to compare to
//
//r - a single array of all the words in the original array of strings which are anagrams of the single string parameter
//
//e - anagrams('abba' ['aabb', 'abcd', 'bbaa']) => ['aabb', 'bbaa']
//
//psuedo
//Start - function(word, words[])
//return
//
const anagrams = (word, words) => {
return words.filter((element) => {
	return (word.sort() === element.sort());
})
}
