// array maken met een aantal fruitsoorten
// array declareren
const fruit = [
    'aardbei',
    'banaan',
    'peer',
    'appel',
    'kiwi'
];

// document.write(fruit[2]);

/*
// loop waardoor de array op het scherm komt en alles overlopen wordt
for( let i = 0; i < fruit.length; i++){
    document.write(fruit[i]);
    document.write('<br>');
};

// functie declaratie
function doSomething() {
    alert('opletten in de les');
}*/

// functie expressie
const doSomethingElse = function(arrayName) {

    for( let i = 0; i < arrayName.length; i++){
        document.write(arrayName[i]);
        document.write('<br>');
    };

}

doSomethingElse(fruit);

// doSomething();
// doSomthingElse(); > dit zal een error geven