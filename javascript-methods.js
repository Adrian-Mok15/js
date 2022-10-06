/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  // Place your code here.
  let res = new Array();
  for(let i = 0; i < this.length; ++i){
    res.push(callbackFn(this[i], i, this));
  }
  return res;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  let res = new Array();
  for(let i = 0; i < this.length; ++i){
    if(callbackFn(this[i],i,this)){
      res.push(this[i]);
    }
  }

  return res;
  // Place your code here.
};

// SOME //
Array.prototype.mySome = function(callbackFn) {

  // Place your code here.
  for(let i = 0; i < this.length; ++i){
    if(callbackFn(this[i],i,this)){
      return true;
    }
  }

  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
  for(let i = 0; i < this.length; ++i){
    if(!callbackFn(this[i],i,this)){
      return false;
    }
  }
  return true;

};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};