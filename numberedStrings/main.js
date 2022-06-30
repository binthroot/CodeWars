const number = (array) => {
	return array.map((element, index) => {
		return `${index+1}: ${element}`
	})
}

console.log(number(['a','b','c','d','e']));
