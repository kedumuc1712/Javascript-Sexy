function PrintStuff (myDocuments) {
    this.document = myDocuments;
}

PrintStuff.prototype.print = function () {
    console.log(this.document);
}

var newObj = new PrintStuff("I am a new Object and i can print");
newObj.print(); // I am a new Object and I can print