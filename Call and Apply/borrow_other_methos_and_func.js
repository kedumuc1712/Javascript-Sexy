var gameControler = {
    scores: [20, 34, 55, 46, 77],
    avgScore: null,
    players : [
        {name:"Tommy", playerID:987, age:23},
        {name:"Pau", playerID:87, age:33}
    ]
}

var appController = {
    scores  :[900, 845, 809, 950],
    avgScore:null,
    avg : function() {
        var sumOfScores = this.scores.reduce(function(prev, cur, index, array) {
             return prev + cur;
        });
        
        this.avgScore = sumOfScores / this.scores.length;
    }
}

appController.avg.apply(gameControler);
console.log(gameControler.avgScore); // 46.4

console.log(appController.avgScore); // null

appController.maxNum = function() {
    this.avgScore = Math.max.apply(null, this.scores);
}

appController.maxNum.apply(gameControler, gameControler.scores);
console.log(gameControler.avgScore); // 77