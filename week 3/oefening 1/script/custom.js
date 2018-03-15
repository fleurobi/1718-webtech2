/********************************************************************* 
* @author     Fleur Robichez
* @created    01/03/2018
* @modified   18/01/2016
* @copyright  Copyright © 2017-2018 Artevelde University College Ghent
* @function   Plaats hier -  een korte samenvatting van jouw script
*********************************************************************/

for( let i=7; i <=100; i++){

    // indien niet deelbaar door 3
    // en indien niet deelbaar door 5
    if(i%3 != 0 && i%5 != 0){
        document.write(i)
    }
    if (i%3 == 0){
        document.write('bitter')
    }
    if (i%5 == 0){
        document.write('bal')
    }
    document.write('<br>')
}