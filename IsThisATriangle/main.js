//prep
//
//parameters - 3 integers that are the potential sides of a triangle
//
//returns - a boolean, true if the sides can form a triangle, false if they can't
//
//examples
//isTriangle(1,2,2) => true
//isTriangle(7,2,2) => false
//
//psuedocode
//
//variable largest is Math.max(a,b,c)
//variable smallest is Math.min(a,b,c)
//
//or
//
//return (a + b > c) and (b + c > a) and (a + c > b)
//

const isTriangle = (a, b, c) => {
	return (a + b > c) && (b + c > a) && (a + c > b);
}

console.log(isTriangle(1,2,2));
console.log(isTriangle(7,2,2));
