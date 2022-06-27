const rbg = (r,g,b) => {
	let hex = [r,g,b];
	return hex.map((color) => {
		if (color < 0) color = 0;
		if (color > 255) color = 255;
		return color.toString(16).padStart(2,"0").toUpperCase();
	}).join('');
}

//p - 3 parameters, integers representing the 10-digit values of red,green,blue

//r - a single string in hexadecimal format representing the 3 parameters as a hexidecimal color

//e - rgb(255,255,255) => "FFFFFF"

//pseudo -
//START - rgb (r,g,b)
//Set an array with the three parameters - [r,g,b]
//Map the array to a new array
//	Check if the color element is less than 0, or greater than 255, round up or down depending
//	The new array should set each old value to the value
//	Of it's hexidecimal representation, using the toString(16) method
//  Pad anything less than 2 in length with leading 0's and .toUpperCase()
//Use the .join('') on the array to put the array in a string format
//Return this new string as our hexidecimal conversion
