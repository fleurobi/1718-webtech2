const password = 'kellypfaff';

let guess = prompt('Wat is het geheime wachtwoord?');
console.log(guess);
let amountTries = 1;

/*
if(password == guess){
    document.write('Goed zo rakker');
}
*/

while(password != guess){
    amountTries++; //tries = tries + 1
    guess = prompt('Wat is het geheime wachtwoord?');
}

document.write('Je hebt het wachtwoord ' + password + ' geraden na ' + amountTries +' keer');