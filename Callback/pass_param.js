var generalLastName = "Clinton";
var allUserData = [];

function getInput(options, callback){
    allUserData.push(options);
    callback(generalLastName, options);
}