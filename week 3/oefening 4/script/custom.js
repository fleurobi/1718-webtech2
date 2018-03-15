let boardSize = 15;

let board = '';

/** loop **/

for(let y = 0; y < boardSize; y++){

    //x-as
    for(let x = 0; x < boardSize; x++){

        // restwaarde van x en y gedeeld door 2
        let rest = ( ( x+ y ) % 2 )
       
        // som van c en y is deelbaar door 2
        // --> zwart
        if (rest == 0) {
            board += '#';
        } 
        // anders wit
        else {
            board += ' ';
        }

    }

    board += "\n";

}
console.log(board);