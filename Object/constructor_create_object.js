function Fruit(theColor, theSweetness, theFruitName, theNativeToLand) {
    this.color = theColor;
    this.sweetness = theSweetness;
    this.fruitname = theFruitName;
    this.nativeToLand = theNativeToLand;

    this.showName = function() {
        console.log("This is a" + this.fruitName);
    }

    this.nativeTo = function() {
        this.nativeToLand.forEach(function(eachCountry) {
            console.log("Grow in:" + eachCountry);
        });
    }
}

var mangoFruit = new Fruit("Yello", 8, "Mango", ["South America", "Central America", "West Africa"]);
mangoFruit.showName();
mangoFruit.nativeTo();