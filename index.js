// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    return cats.splice(2);
}

function destructivelyRemoveFirstCat(name) {
    return cats.splice(0,1);
}

function appendCat(name) {
    return [...cats,name];
}

function prependCat(name) {
    return [name,...cats];
}

function removeLastCat() {
    return cats.slice(0,2);
}

function removeFirstCat() {
    return cats.slice(1);
}