/********************************************************************* 
* @author     Fleur Robichez
* @created    15/02/2018
* @modified   18/01/2016
* @copyright  Copyright © 2017-2018 Artevelde University College Ghent
* @function   Plaats hier -  een korte samenvatting van jouw script
*********************************************************************/


/** FANCY **/

//elementen ophalen
let inputNumber = document.getElementById('getal');
let button = document.getElementById('evenOfOnevenKnop');
let result = document.getElementById('spanResult');

//clickevent
button.addEventListener('click' , function(){

    //nummer ophalen
    let number = inputNumber.value;
    
    //controleer of het even of oneven is
    let oddOrEven = checkIfEven(number);

    //schrijf het resultaat in de span
    result.innerHTML = oddOrEven;
});

function checkIfEven(someNumber) {
    if (someNumber % 2 == 0 ){
        //even
        return 'Het getal is even';
        }
     else{
        //oneven
        return 'Het getal is oneven';
        }
}

// elementen ophalen
/*let inputNumber = document.getElementById('getal');
let button = document.getElementById('evenOfOnevenKnop');
let result = document.getElementById('spanResult');
 
// clickevent
button.addEventListener('click', function() {
 
    // nummer ophalen
    let number = inputNumber.value;
 
    // controleer of het even of oneven is
    let oddOrEven = checkIfEven(number);
 
    // schrijf het resultaat in de span
    result.innerHTML = oddOrEven;
 
});
 
function checkIfEven(someNumber) {
 
    if(someNumber % 2 == 0) {
        // even
       return 'Het getal is even';
    }
    else {
        // oneven
        return 'Het getal is oneven';
    }
}*/