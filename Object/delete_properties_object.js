var chrismasList = {mike: "Book", jason: "swater"}
delete chrismasList.mike;

for (var people in chrismasList) {
    console.log(people); // json
}

delete chrismasList.toString; // return truebut toString not deleted
chrismasList.toString(); // [object object]

