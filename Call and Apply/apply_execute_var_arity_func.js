var students = ["Peter Alexander", "Michael Woodruff", "Judy Archer", "Malcolm Khan"];
function welcomeStudents() {
    var args = Array.prototype.slice.call(arguments);

    var lastItem = args.pop();
    console.log("Welcome " + args.join(", ") + ", and " + lastItem + ".");
}

welcomeStudents.apply (null, students);
// Welcome Peter Alexander, Michael Woodruff, Judy Archer, and Malcolm Khan.