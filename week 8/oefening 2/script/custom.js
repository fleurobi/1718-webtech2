let btn = document.getElementById('button');

btn.addEventListener('click', function(){
    //geselecteerde radio button
    let color = document.querySelector('input[name="color"]:checked')

    //kort met template literal en expression
    //color.value = zo ja 
    //'btn-warning' = zo nee
    btn.className = `btn ${(color) ? color.value : 'btn-warning'}`;

    /*
    if(color){
        btn.className = 'btn ' + color.value;
    }
    else{
        btn.className = 'btn ' + 'btn-warning'
    }*/
});