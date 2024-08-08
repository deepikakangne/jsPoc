//-------------------1. Number-----------//
let score = "99ssssss" // undefiend
console.log(typeof score);
console.log(typeof(score));

let valNumber = Number(score);
console.log(typeof valNumber);
console.log(valNumber); // will return NaN, which is a type of data-type //

//* NOTE : Conversion into Number
//let score = undefiend // will return NaN
//let score = null      // will return 0
//let score =true      // will return 1
//let score = "Deepika"  // will return NaN


//-------------------2. Boolean-----------//
let isLogged = 1
let booleanisLogged = Boolean(isLogged)
console.log(booleanisLogged);

/* NOTE : Coversion into Boolean
// 1=> true, 0=> false, "" -> 0, "dsfs" -> true */

//-------------------3 . String-----------//
let scoreStr = 99 // undefiend
console.log(typeof scoreStr);
console.log(typeof(scoreStr));

let valNumberStr = String(scoreStr);
console.log(typeof valNumberStr);


