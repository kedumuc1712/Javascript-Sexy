var gameController = {
    scores: [20, 34, 55, 46, 77],
    avgScore: null,
    players: [
        {name: "Tommy", playerID: 987, age: 23},
        {name: "Paul", playerID: 87, age: 33}
    ]
}

var appController = {
    scores: [900, 845, 809, 950],
    avgScore: null,
    avg: function() {
        var sumOfScores = this.scores.reduce(function(prev, cur, index, array) {
            return prev + cur;
        });
    this.avgScore = sumOfScores / this.scores.length;
    }
}

// Don't run this code, for it is just for illustration; we want the appController.avgScore to remain null
gameController.avgScore = appController.avg();

// Fix
appController.avg.apply(gameController, gameController.score);

console.log(gameController.avgScore); // 46.4
console.log(appController.avgScore); // null