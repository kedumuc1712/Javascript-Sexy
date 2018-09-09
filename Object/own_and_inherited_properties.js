var school = {schoolName: "MIT"};

console.log("schoolName" in school); // true
console.log("schoolType" in school); // false
console.log("toString" in school); // true because ingerited from Object.prototype