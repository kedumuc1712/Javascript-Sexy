var anArrayLikeObj = {0: "Martin", 1:78, 2:67, 3:["Letta", "Marieta", "Pauline"], length: 4};

console.log(newArray); // ["Martin", 78, 67, Array[3]]

console.log(Array.prototype.indexOf.call(anArrayLikeObj, "Martin") == -1 ? false : true); // true
console.log (anArrayLikeObj.indexOf ("Martin") === -1 ? false : true); // Error: Object has no method 'indexOf'

console.log(Array.prototype.reverse.call(anArrayLikeObj));  // {0: Array[3], 1: 67, 2: 78, 3: "Martin", length: 4}
console.log(Array.prototype.pop.call(anArrayLikeObj));

console.log(anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, length: 3}
console.log(Array.prototype.push.call(anArrayLikeObj, "Jackie"));

function doSomething() {
    var args = Array.prototype.slice.call(arguments);
    console.log(args);
}

doSomething("Water", "Salt", "Glue"); // ["Water", "Salt", "Glue"]