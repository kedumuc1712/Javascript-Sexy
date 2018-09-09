var highValue = 200;
var constantVal = 2;
var myObj = {
    highValue: 20,
    constantVal: 5,
    calculateIt: function () {
        setTimeout (function () {
            console.log(this.constantVal * this.highValue);
        }, 2000);
    }
}

myObj.calculateIt(); // 400