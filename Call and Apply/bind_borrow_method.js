var user = {
    data    :[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
    ],
    showData: function (event) {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1

        console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
    }

}

var cars = {
    data: [
        {name: "Honda Accord", age: 14},
        {name: "Tesla Model S", age: 2}
    ]
}

cars.showData = user.showData.bind(cars);
cars.showData(); // Honda Accord 14

