// # Primitive data type (Call by value type) :--
// Types -- String, Number, Boolean, null, undefined, bigInt, and Symbol.

// # Non-Primitive data type (Call by reference type) :--
/* Types -- Array, Object, Function;

    Array: let arrayExample = [1,2,3,4];
    Object: let objectExample{
        0: 'a',
        1: 'b',
        2: 'c'
    };
    let functionExample = function{
        console.log('Hello World');
    }

*/

// JavaScript is dynamic typed language.


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "gaurav",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

