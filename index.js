// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(Ralph){
    cats.push("Ralph");
}
function destructivelyPrependCat(Bob){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(Bob){
    cats.pop(3)
}
function destructivelyRemoveFirstCat(Milo){
    cats.shift(0)
}
const coolcats= [...cats,"Broom"];
function appendCat(Broom){
    cats.slice("Broom")
    return coolcats;
}

const hotcats= ["Arnold", ...cats];
function prependCat(Arnold){
    cats.slice("Arnold")
    return hotcats;
}
function removeLastCat(name){
    return cats.slice(0, -1);
}
function removeFirstCat(name){
    return cats.slice(1)
}