let change = document.getElementsByTagName('a');
let oranje = document.getElementsByTagName('strong');
let span = document.getElementsByTagName('span');

let link = change[0];
//console.log(link);

link.addEventListener('mouseover', function(){
   link.style.backgroundColor = 'pink';

  //oranje[0].style.color = 'orange';
   
  for(let i = 0; i < oranje.length; i++){
       oranje[i].style.color = 'orange';
   }

   for(let i = 0; i < span.length; i++){
       span[i].style.color = 'purple';
   }
})

link.addEventListener('mouseout', function(){
   link.style.backgroundColor = 'beige';
   //oranje[0].style.color = 'orange';

   for(let i = 0; i < oranje.length; i++){
    oranje[i].style.color = 'black';
    }

    for(let i = 0; i < span.length; i++){
        span[i].style.color = 'black';
    }
})