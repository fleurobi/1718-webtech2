/********************************************************************* 
* @author     Fleur Robichez
* @created    22/02/2018
* @modified   22/02/2018
* @copyright  Copyright © 2017-2018 Artevelde University College Ghent
* @function   Plaats hier -  een korte samenvatting van jouw script
*********************************************************************/

//3 variabelen met beestjes
const animal1 = 'elephant';
const animal2 = 'cockroach';
const animal3 = 'zebra';

//variabele van het type array
let animals = [];

//variabelen in de array steken
animals.push(animal1);
animals.push(animal2);
animals.push(animal3);
animals.push('bunny');
animals.push('panther');

//manueel alle strings contacteren (samenvoegen)
let allAnimals = animals[0] + animals[1] + animals[2];

//op het scherm zetten
document.write(allAnimals);
document.write('<br>-----<br>');

//tweede manier 
let allAnimals2 = '';

//lopen door de array
for(let i = 0; i < animals.length; i++){
    //resultaat loggen van elk element uit de array
    console.log(animals[i]);
    //de strings samenvoegen
    allAnimals2 += animals[i];

}

//samengevoegde strings op het scherm schrijven
document.write(allAnimals2);