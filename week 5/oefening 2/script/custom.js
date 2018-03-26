var books = [
    {title: 'Harry Potter',
    author: 'J.K. Rowling',
    alreadyRead: false
    },
    {title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    alreadyRead: true
    },
    {title: 'De verschrikkelijke schoolmeester.',
    author: 'Dolf Verroen',
    alreadyRead: true
    }
];

//hoe zorg ik er voor dat er in de console: Dolf Verroen gelogd wordt
console.log(books[2].author);

for(let i = 0; i < books.length; i ++) {

    let content = '';

    content = '<p>' + books[i].title + 'by' + books[i].author + '</p>';

    if(books[i].alreadyRead){
        //al gelezen
        content += '<p>You have already read this book</p>'
    }
    else{
        //niet gelezen
        content += '<p>It\'s time to read this novel!</p>'
    }

    content += '<hr>';

    let divBooks = document.getElementById('books');
    divBooks.innerHTML += content;

    // titel loggen
    console.log(books[i].title);
}




// constructor heeft een hoofdletter, een gewone variabele niet. 
let Book = function(name, writer, alreadyRead){

    this.title = name,
    this.author = writer,
    this.alreadyRead = alreadyRead
    this.output = function(){
        if(this.alreadyRead){
            //al gelezen
            return "al gelezen";
        }
        else{
            //niet gelezen
            return "nog niet gelezen";
        }
    }
}

let myFavouriteBook = new Book('Twilight', "Stephenie Meyer" , false);
let excitingNovel = new Book('The Da Vinci Code', "Dan Brown" , true);

//let op de haakjes! .output() zonder haakjes = fout!
console.log(myFavouriteBook.output());
console.log(excitingNovel);