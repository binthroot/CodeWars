const wave = (str) => {
	let waveArray = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] === ' ') continue;
		waveArray.push(str.slice(0,i)+str.slice(i,i+1).toUpperCase()+str.slice(i+1));
	}

	return waveArray;
}

// 6kyu mexican wave code wars
