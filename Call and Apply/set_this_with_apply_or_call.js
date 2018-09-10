var avgScore = "global avgScore";

function avg(arrayOfScores) {
    var sumOfScores = arrayOfScores.reduce(function(prev, cur, index, array) {
        return prev + cur;
    });

    this.avgScore = sumOfScores / arrayOfScores.length;
}

var gameController = {
    scores: [20, 34, 55, 46, 77],
    avgScore: null
}

avg (gameController.scores);

console.log(window.avgScore); // 46.4
console.log(gameController.avgScore); // null

// reset global avgScore
avgScore = "global avgScore";
avg.call(gameController, gameController.scores);

console.log(window.avgScore); // global avgScore
console.log(gameController.avgScore); // 46.4