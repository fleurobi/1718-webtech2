/********************************************************************* 
* @author     Fleur Robichez
* @created    15/02/2018
* @modified   18/01/2016
* @copyright  Copyright © 2017-2018 Artevelde University College Ghent
* @function   Plaats hier -  een korte samenvatting van jouw script
*********************************************************************/

// vermijd var! gebruik let.
// this code is used for a pop-up.
let number = prompt('Geef een getal in');
let text = 'Het getal dat je invoerde was: ' + number;
document.write(text);

// br = een break in html zodat de codes die zullen verschijnen onder elkaar komen te staan ipv naast elkaar zonder ruimte!
document.write('<br>')
let amountdigits = number.length;
let digit = `Het getal is ${amountdigits} karakters lang`
document.write(digit);


document.write('<br>');
let number1 = prompt('Geef een getal in');
let number2 = prompt('Geef een tweede getal in');

console.log(typeof(number1));

// parseInt zorgt er voor dat de numbers 1 en 2 met elkaar worden opgetelt en niet zomaar naast elkaar worden geplaatst.
let text2 = parseInt(number1) + parseInt(number2);
document.write(text2);

//
let i = 7
console.log(i); // 7 -> want ongewijzigd
console.log(i++); //7 -> want eerst gelogd, dan pas 1 aan toegevoegd
console.log(i); // 8 -> want 1 is toegevoegd inde voorgaande statement
console.log(++i); //9 -> want 1'tje toegevoegd dan loggen 

// oefening 7
let students= ['Yentl','Steff','Casper','Ona','Fleur'];
let name = students[0];
students.push('Simon');
students.push('Stef');
students[2] = students[3];
console.log(students[2]);
document.write('<br>')
document.write(students[1] + " " + students[5] + " " + students[3])

// oefening 8
document.write('<br>')
let seconden = prompt('Geef hier het aantal seconden in');
let uren = Math.floor(seconden/3600); // math.floor zorgt er voor dat een komma getal afgerond wordt
let minuten = Math.floor((seconden%3600)/60); // de % (modulo) is de rest waarde die verder gebruikt moet wordt 
let sec = Math.floor((seconden%3600)%60);
let text3 = uren + "u " + minuten + "m " + sec + "s";
document.write(text3);