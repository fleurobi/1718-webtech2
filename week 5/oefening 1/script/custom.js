//let person = {
//  hairColor: 'brown',
//  height: 203,
//  gender: 'male',
//  firstname: 'Yentl',
//  lastname: 'Ringoot',
//  adult: true,
//  shoes: { 
//      brand: 'Adidas',
//      color: 'white'
//  }
//}

// console.log(person.shoes)

let recipe = {
    name: "Pizza Margharita",
    servings: 2,
    difficulty: 'easy peasy',
    ingredients: [
        'cheese',
        'dough',
        'tomato sauce',
        'basil',
        'garlic'
    ]
}

console.log(recipe.name)

let divRecipe = document.getElementById('recipe');
divRecipe.innerHTML = '<h2>' + recipe.name + '</h2>';
divRecipe.innerHTML = '<p>' + recipe.servings + '</p>';

divRecipe.innerHTML += "<lu>";
for(let i = 0; i < recipe.ingredients.length; i++){
    divRecipe.innerHTML += "<li>" + recipe.ingredients[i] + "</li>";
}

divRecipe.innerHTML += "</lu>"; 