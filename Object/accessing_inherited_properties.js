var school = {schoolName:"MIT", schoolAccredited: true, schoolLocation:"Massachusetts"};

for (var eachItem in school) {
    console.log(eachItem);
}

function HigherLearning() {
    this.educationLevel = "University";
}

var school = new HigherLearning();
school.schoolName = "MIT";
school.schoolAccredited = true;
school.schoolLocation = "Massachusetts";

for (var eachItem in school) {
    console.log(eachItem); // prints educationLevel, schoolName, schoolAccredited and schoolLocation
}