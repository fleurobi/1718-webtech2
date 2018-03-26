let dog = {
    breed: 'Corgi',
    name: 'Cheddar',
    color: 'wit en brownish',
    age: 2,
    gender: 'male',
    colorEyes: function(){
        return "brown"
    }
}

//klasse definitie met constructor
let Dog = function(breed, name, color, age, gender){
    this.breed = breed;
    this.name = name;
    this.color = color; 
    this.age = age;
    this.gender = gender;
    this.colorEyes = function(){
        return "pink"
    };
    this.birthYear = function(){

        const now = new Date();
        const year = now.getFullYear();

        //2018 vervangen naar huidige jaar zodat het in 2027 nog werkt
        let currentYear = year;

        //geboorte jaar berekenen
        let birthYear = currentYear - this.age;

        //geboorte jaar retourneren
        return birthYear;
    };
}

let myFavouriteDog = new Dog ('Border Collie', 'Meeko', 'Tricolor', 40, 'male');

// property toevoegen aan het object
myFavouriteDog.bestToyEver = 'een rode bal';

//functie toevoegen aan de constructor
//zonder constructor zelf te wijzigen
Dog.prototype.speak = function(line){
    let slogan = 'De ' + this.breed + ' hond zegt: ' + line;
    return slogan;
}

let saySomething = myFavouriteDog.speak('Er klopt iemand op de deur')
console.log(saySomething);


document.write(myFavouriteDog.birthYear());