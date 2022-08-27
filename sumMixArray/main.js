const sumMix = (x) => {
	return x.reduce((a,b) => {
		return a + Number(b);
	}, 0)
}

// Uses a reduce array method to turn each element into a number and reduce as a sum, then return that sum.
