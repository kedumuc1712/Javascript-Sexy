function People() {
    this.superstar = "Micheal Jackson";
}

People.prototype.athlete = "Tiger Woods";

var famousPerson = new People();
famousPerson.superstar = "Steve Jobs";

console.log(famousPerson.superstar); // Steve Jobs
console.log(famousPerson.athlete); // Tiger woods
console.log(famousPerson.toString()); // [object object]