const towerBuild = (numOfFloors) => {
	towerArray = [];
	for (let i = 0; i <= numOfFloors; i++) {
		let space = ' '.repeat(numOfFloors - i);
		let star = '*'.repeat((2i) - 1);
		towerArray.push(space + star + space);
	}
	return towerArray;
}
