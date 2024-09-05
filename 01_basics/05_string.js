// const name = "gaurav"
// const repoCount = 50

// // console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // String interpolation.

// const gameName = new String('gaurav-hc-com')

// // console.log(gameName[0]);
// // console.log(gameName.__proto__);


// // console.log(gameName.length);
// // console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "   gaurav    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));

// console.log(gameName.at(3));

const anotherGame = '     hulalaahulaaazoo ho gya kya yrr ye  ';
// console.log(anotherGame.charAt(5)); // It gives character at the given index;
// console.log(anotherGame.charCodeAt(4)); // The zero-based index of the desired character at specified index, "NaN" is returned. Returns the Unicode value of the specified location.

// console.log(anotherGame.codePointAt(13)); // Same as 'charCodeAt' but difference is that it's return "undefined" when specified index is not available;

// console.log(anotherGame.concat('khuljaseemseem')); // The String to append to the end of the string . Returns a new string that contains the concatenation of two or more strings;

console.log(anotherGame);
// console.log(anotherGame.endsWith()); // Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.

// console.log(anotherGame.includes('gaurav')); // Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.


// console.log(anotherGame.indexOf('z')); // The substring to search for in the string Returns the position of the first occurrence of a substring.

// console.log(anotherGame.lastIndexOf('h')); // Returns the last occurrence of a substring in the string.

// console.log(anotherGame.slice()); // The index to the beginning of the specified portion of stringObj. Returns a section of a string.

// console.log(anotherGame.split('', 5)); // The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

// console.log(anotherGame.trim()); // Removes the leading and trailing white space and line terminator characters from a string.

const strObject = new String('Hello');

console.log(strObject); // Expected output is ['Hello']


console.log(strObject.valueOf()); // Expected output is Hello; // Returns the primitive value of the specified object.






