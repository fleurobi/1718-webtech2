/********************************************************************* 
* @author     Fleur Robichez
* @created    01/03/2018
* @modified   18/01/2016
* @copyright  Copyright © 2017-2018 Artevelde University College Ghent
* @function   Plaats hier -  een korte samenvatting van jouw script
*********************************************************************/

// waardes van fastfood
let popcorn = 5;
let hamburger = 4;
let donut = 10;

// input velden uit DOM declareren
let input1 = document.getElementById('result1');
let input2 = document.getElementById('result2');
let input3 = document.getElementById('result3');
let userSolution = document.getElementById('result4');

// inputvelden invullen
input1.value = popcorn + popcorn + popcorn;
input2.value = popcorn + hamburger + hamburger;
input3.value = donut*2 + hamburger + donut*2;

// correcte oplossing berekenen
let correctSolution = hamburger + donut * popcorn;
console.log(correctSolution);

// button declareren
let checkButton = document.getElementById('check');

// event aan de button toevoegen
checkButton.addEventListener('click', function(){
    if(correctSolution == userSolution.value){
        //correct
        alert('woot woot');
    }
    else{
        //wrong
        alert('uh oh');
    }
})