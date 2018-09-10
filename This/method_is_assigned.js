var data = [
    {name: "Samatha", age: 12},
    {name: "Alexis", age: 14}
];

var user = {
    data : [
        {name: "T. Woods", age: 37},
        {name: "P. Mickelson", age: 43}
    ],

    showData: function (event) {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1;

        console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    }
}

var showUserData = user.showData;
showData(); // Samatha 12

var showUserDataFix = user.showData.bind(user);
showUserDataFix(); // P. Mickelson 43