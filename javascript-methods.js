/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn, thisArg) {
  // Place your code here.\
  if(thisArg === undefined){
    thisArg = this
  }
  let res = new Array();
  for(let i = 0; i < this.length; ++i){
    res.push(callbackFn(this[i], i, thisArg));
  }
  return res;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn, thisArg) {
  let res = new Array();
  if(thisArg === undefined){
    thisArg = this
  }
  for(let i = 0; i < this.length; ++i){
    if(callbackFn(this[i],i,this)){
      res.push(this[i]);
    }
  }

  return res;
  // Place your code here.
};

// SOME //
Array.prototype.mySome = function(callbackFn, thisArg) {

  // Place your code here.
  if(thisArg === undefined){
    thisArg = this
  }
  for(let i = 0; i < this.length; ++i){
    if(callbackFn(this[i],i,this)){
      return true;
    }
  }

  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn, thisArg) {
  // Place your code here.
  if(thisArg === undefined){
    thisArg = this
  }
  for(let i = 0; i < this.length; ++i){
    if(!callbackFn(this[i],i,this)){
      return false;
    }
  }
  return true;

};

// REDUCE //
Array.prototype.myReduce = function(callbackFn, initVal) {
  // Place your code here.
  let res = initVal

  for(let i = 0; i < this.length; ++i){
    if(res === undefined){
      res = this[i];
    }
    else{
      res = callbackFn(res, this[i], i, this);
    }
  }
  return res;
  
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement, fromIndex = 0) {
  for(let i = fromIndex; i < this.length; ++i){
    if(this[i] === searchElement){
      return true;
    }
  }
  return false;
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement, fromIndex = 0) {
  // Place your code here.
  for(let i = fromIndex; i < this.length; ++i){
    if(this[i] === searchElement){
      return i;
    }
  }
  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement, fromIndex = this.length - 1) {
  // Place your code here.
  for(let i = fromIndex; i > -1; --i){
    if(this[i] === searchElement){
      return i;
    }
  }
  return -1;
};

// KEYS //
Object.myKeys = function(object) {
  let res = new Array();
  for(const key in object){
    res.push(key)
  }
  return res;

  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
  let res = new Array();
  for(const key in object){
    res.push(object[key])
  }
  return res;

};


// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.myMap(x => x * 2);

// console.log(map1);
// expected output: Array [2, 8, 18, 32]


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.myFilter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


// const array = [1,2, 3, 5];

// // checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.mySome(even));
// // expected output: true


// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.myEvery(isBelowThreshold));
// expected output: true


// const array1 = [1, 2, 3, 4];

// // // 0 + 1 + 2 + 3 + 4
// const initialValue = 20;
// const sumWithInitial = array1.myReduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// expected output: 10

// const array1 = [1, 2, 3];

// console.log(array1.myIncludes(2));
// // expected output: true

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.myIncludes('cat'));
// // expected output: true

// console.log(pets.myIncludes('at'));
// expected output: false

// --------------------------------------------------------------------------------------------------------------


// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.myIndexOf('bison'));
// // expected output: 1

// // start from index 2
// console.log(beasts.myIndexOf('bison', 2));
// // expected output: 4

// console.log(beasts.myIndexOf('giraffe'));
// expected output: -1
// --------------------------------------------------------------------------------------------------------------

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

// console.log(animals.myLastIndexOf('Dodo'));
// // expected output: 3

// console.log(animals.myLastIndexOf('Tiger'));
// // expected output: 1

// const object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false
// };

// console.log(Object.myKeys(object1));
// expected output: Array ["a", "b", "c"]

// const object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false
// };

// console.log(Object.myValues(object1));
// expected output: Array ["somestring", 42, false]
