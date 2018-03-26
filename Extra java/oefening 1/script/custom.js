// variabele waardes toekennen
let name = 'Fleur';
let lastname = 'Robichez';

// tekst in de log laten verschijnen
console.log('Welkom ' + name + ' ' + lastname);

// zonder een div in je html een tekst plaatsen in je browser
document.write('Welkom ' + name + ' ' + lastname);

// via een div in je html een tekst toevoegen
// div eerst aanspreken en een variabele in js van maken
// innerhtml = tekst in html plaatsen via js
let welkom = document.getElementById('welkom');
welkom.innerHTML = 'Welkom ' + name + ' ' + lastname;