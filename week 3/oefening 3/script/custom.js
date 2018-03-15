/********************************************************************* 
* @author     Fleur Robichez
* @created    01/03/2018
* @modified   18/01/2016
* @copyright  Copyright © 2017-2018 Artevelde University College Ghent
* @function   Plaats hier -  een korte samenvatting van jouw script
*********************************************************************/

// draw a mountain
//drawMountain(2);
//drawMountain(10);
//drawMountain(5);

setInterval(function(){
    var randomTrueFalse = Math.random() >= 0.5;
    var randomBetween = Math.floor(Math.random()*4) + 1;

    //random een true or false
    if(randomTrueFalse == true){
        drawMountain(randomBetween); //teken berg
    } else{
        drawFlatArea(randomBetween); // teken dal
    }
}, 400); //elke seconde



function drawMountain(lengthOfMountain){

    // initiële toplengte
    let i = 1;

    // helling
    document.write('/');

    // zolang het einde van de top nog niet bereikt is
    while(i <= lengthOfMountain){
        document.write("'");
        i++;
    }

    // afdaling
    document.write('\\');
}

function drawFlatArea(lengthFlat){
    let i = 1;
    while(i <= lengthFlat){
        document.write("_");
        i++;
    }
}