//knop declareren
const button = document.getElementById('btnMakeJoke');
const factsList = document.getElementById('facts');

// functie expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};


button.addEventListener('click', function(){

    //waardes uit de elementen halen
    //moet geplaatst worden onder de functie want anders neemt hij een lege waarde omdat er nog niets in staat
    //als je de namen hebt ingevuld en pas de waardes aanvraagt na de klik dan staan er waardes in
    const firstName = document.getElementById('firstNameField').value;
    const lastName = document.getElementById('lastNameField').value;


    //Url met dynamische parameters
    const url = 'http://api.icndb.com/jokes/random?firstName=' + firstName + '&lastName=' + lastName;

    //JSON FUNCTIE OPROEPEN, BINNEN DE CALLBACK MANIPULEREN WE DE VERKREGEN DATA
    getJSON(url, function(error, data) {
    
        //nieuw element aanmaken
        const listItem = document.createElement('li');
        //content toevoegen aan het nieuwe element
        listItem.textContent = data.value.joke;
        //toevoegen aan de lijst
        factsList.appendChild(listItem);

    })

})

//Variabele met gegevens
//const firstName = 'Fleur';
//const lastName = 'Robichez';



//let voornaam = prompt("Vul hier je voornaam in");
//let achternaam = prompt("Vul hier je achternaam in"); 



//Url met dynamische parameters
//const url = 'http://api.icndb.com/jokes/random?firstName=' + voornaam + '&lastName=' + achternaam;

//JSON FUNCTIE OPROEPEN, BINNEN DE CALLBACK MANIPULEREN WE DE VERKREGEN DATA
//getJSON(url, function(error, data) {
    
    //Fact komt in je venster
    //document.write(data.value.joke);

//})