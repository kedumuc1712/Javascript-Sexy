var chrismasList = {mike: "Book", jason: "swater", chelsea: 'iPad'};

JSON.stringify(chrismasList);
// print {"mike":"Book","jason":"sweater","chels":"iPad"}

JSON.stringify(chrismasList, null, 4);
/* "{
    "mike": "Book",
    "jason": "sweater",
    "chelsea": "iPad"
}" */

var christmasListStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
var chrismasListObj = JSON.parse(christmasListStr);

console.log(chrismasListObj.mike); // Book