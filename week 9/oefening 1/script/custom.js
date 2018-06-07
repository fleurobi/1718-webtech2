/********if(localStorage.getItem("demolis")) {
    //alert(localStorage.getItem("demolis"));
}

let btn = document.getElementById("storeMol");

btn.addEventListener("click", showStorage);

function showStorage(){
    let deMol = document.getElementById("naam").value;
    localStorage.setItem("demolis", deMol)
    document.getElementById("antwoord").innerHTML = localStorage.getItem("demolis")
    document.write(deMol);
    console.log(deMol);
}********/

// STAP 1: knop en inputveld declareren
let btnSubmit = document.getElementById("storeMol");
let inputField = document.getElementById("naam");
let moleBackground = document.getElementById("moleBackground");

// STAP 2: click event zetten op de knop
btnSubmit.addEventListener('click', function(){
    // de mol uit het input veld halen
    let mole = inputField.value;

    // na een klik moet het in de local storage opgeslagen worden
    localStorage.setItem("antwoord", mole);
})

// STAP 3: controleren of er een mol in de local storage zit?
let storedMol = localStorage.getItem("antwoord");
if(storedMol != null) {
    //btnSubmit.style.display = "none";
    //  inputField.style.display = "none";

    // rood of groen scherm
    if (storedMol == 'Pieter')
        moleBackground.style.background = "green";
    else
        moleBackground.style.background = "red";
}




 

