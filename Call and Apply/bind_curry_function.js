function greet (gender, age, name) {
    var salutation = gender === "male" ? "Mr. " : "Ms. ";

    if (age > 25) {
        return "Hello, " + salutation + name + ".";
    }
    else {
        return "Hey, " + name + ".";
    }
}

/* So we are passsing null because we are not using the 
    "this" keyword in our greet function 
    */
var greetAnAdultMale = greet.bind(null, "male", 45);
greetAnAdultMale("John HartLove"); // "Hello, Mr. John Hartlove.

var greetAYoungster = greet.bind(null, "", 16);
greetAYoungster("Alex"); // hey, Alec
greetAYoungster("Emma Waterloo"); // Hey, Emma Waterloo