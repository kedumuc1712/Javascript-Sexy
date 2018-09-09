function Plant() {
    this.country = "Mexico";
    this.isOrganic = true;
}

Plant.prototype.showNameAndColor = function () {
    console.log("I am a " + this.name + " and my color is " + this.color);
}

Plant.prototype.amIOrganic = function() {
    if (this.isOrganic) {
        console.log("I am organic, baby!");
    }
}

function Fruit(fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
}

Fruit.prototype = new Plant();

var aBanana = new Fruit("Banana", "Yellow");

console.log(aBanana.name); // Banana
console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.
