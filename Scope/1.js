var name = "Micheal Jackson";

function showCelebrityname() {
    console.log(name);
}

function showOrdinaryPersonName () {
    name = "Johnny Evers";
    console.log(name);
}

showCelebrityname(); // Micheal Jackson
showOrdinaryPersonName(); // Johhny Evers
showCelebrityname(); // Johhny Evers

