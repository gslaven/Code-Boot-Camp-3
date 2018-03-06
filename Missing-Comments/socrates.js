/*
The Lost Library of Socrates
Written by: Matthew Hill
Date of last edit: 16 November 2017
Contact: matthillprogramdeveloper@gmail.com

All comments removed on 6 March 2018 to be used as an exercise in
Code Bootcamp at theClubhou.se
 */

// Used to store the player's name
var user;

var library = ["television","cat","banana","computer","ocean","couch","refrigerator","forest","printer","shampoo","table","vehicle","controller","shelf","fence","ottoman","cabinet","coaster","fence","bushes","picture","frame","weight"];


/*
A container (specifically a class) that contains all of
the elemements (pieces) of the game that we are calling Puzzle.
It's rules and behaviors are contained within.
 */
class Puzzle{

    constructor(word){
        this.word = word;
        this.answer = this.wordToArray(word);
        this.currentBoard = this.buildBoard(word);
        this.lettersGuessed = [];
    }
    //Function to break the word into an array of it's letters
    wordToArray(word){
        let board = [];
        for(let letter of word){
            board.push(letter);
        }
        return board;
    }
    //Builds the "board" (or collection of underscores) that is displayed at the start of the game
    buildBoard(word){
        let board = [];
        for(let letter of word){
            board.push("_");
        }
        return board;
    }
    //
    guessLetter(letter){
        if(this.lettersGuessed.indexOf(letter) === -1){//Checks to see if the user has already guessed this letter
            this.lettersGuessed.push(letter);//First time the user guessed this, so add it to the lettersGuessed array
            if(this.answer.indexOf(letter) !== -1){//The letter is in the answer
                for(let i = 0; i < this.answer.length; i++) {//Loop through the answer to display the letter
                    if (this.answer[i] === letter) {
                        this.currentBoard[i] = letter;//Change the Board from "_" to the current correct letter
                    }
                }
                return true;// Let the calling function know the user was correct

            }else{//The letter was not in the answer
                return false;//Let the calling function know the user was incorrect
            }
        }else{//Let the calling function know the user repeated a letter
            return "You already guessed this letter!";
        }
    }
    //The user has tried to guess the answer
    guessWord(word){
        let winner = false;
        let guess = this.wordToArray(word);

        if (guess.length === this.answer.length) {
            for (let i = 0; i < guess.length; i++) {
                if (guess[i] !== this.answer[i]) {
                    winner = false;
                    break;
                } else {
                    winner = true;
                }
            }
        }else{
            winner = false;
        }
        //conditional (ternary) operator to return the User's game status.  Winner or loser based on the code above.
        return winner ? true:false;
    }


}

/*
A container (specifically a class) that contains all of
the elemements (properties) of the entity that we are calling User
 */
class User{

    constructor(name){
        this.name = name;
        this.level = 1;
        this.score = 0;
        this.guesses = 10;
        this.puzzle = null;
        this.specials = {inventory:{Streln: 1,Vowels: 1,PickALetter: 1,FreeLetter: 1 }};

    }

    useSpecial(type){
        //Store the special(or button name) that the user has clicked on.  Found in the specials JSON cointainer
        let special = this.specials.inventory;
        console.log("Made it inside the use special function."); //Console used for debugging
        switch(type){//Switch between the different specdials(or buttons) the user is allowed to push
            case "Streln":
                if(special.Streln < 1){
                    alert("You do not have any Streln special abilities to use.")
                }else{
                    let streln = new Streln();
                    this.puzzle = streln.use(this.puzzle);
                    special.Streln--;
                }
                break;

            case "Vowels":
                if(special.Vowels < 1){
                    alert("You do not have any Vowels special abilities to use.")
                }else{
                    let vowels = new Vowels();
                    this.puzzle = vowels.use(this.puzzle);
                    special.Vowels--;
                }
                break;

            case "PickALetter":
                if(special.PickALetter < 1){
                    alert("You do not have any Pick A Letter special abilities to use.")
                }else{
                    let pickALetter = new PickALetter();
                    this.puzzle = pickALetter.use(this.puzzle);
                    special.PickALetter--;
                }
                break;

            case "FreeLetter":
                if(special.FreeLetter < 1){
                    alert("You do not have any Free Letter special abilities to use.")
                }else{
                    let freeLetter = new FreeLetter();
                    this.puzzle = freeLetter.use(this.puzzle);
                    special.FreeLetter--;
                }
                break;


        }

    }
//
    guessLetter(letter){
        let res = this.puzzle.guessLetter(letter);

        switch(res){
            case true:
                this.score +=13;
                return true;
                break;

            case false:
                this.guesses --;
                return false;
                break;

            case "You already guessed this letter!":
                alert(res);
                return true;
                break;

        }

    }
//
    guessWord(word){
        let res = this.puzzle.guessWord(word);
        if(res){
            YouWin();
        }else{
            alert("Incorrect Guess");
            this.guesses --;
        }

    }


}




/*

 */
class Special{

    use(currentPuzzle){
        let puzzle = currentPuzzle;
        //do some stuff
        return puzzle;
    }
}

/*

 */

class Streln extends Special{
    use(currentPuzzle){
        let puzzle = currentPuzzle;
        puzzle.guessLetter("s");
        puzzle.guessLetter("t");
        puzzle.guessLetter("r");
        puzzle.guessLetter("e");
        puzzle.guessLetter("l");
        puzzle.guessLetter("n");

        return puzzle;
    }
}
//
class Vowels extends Special{
    use(currentPuzzle){
        let puzzle = currentPuzzle;
        puzzle.guessLetter("a");
        puzzle.guessLetter("e");
        puzzle.guessLetter("i");
        puzzle.guessLetter("o");
        puzzle.guessLetter("u");
        return puzzle;
    }
}
/*

*/
class PickALetter extends Special{
    use(currentPuzzle){
        let puzzle = currentPuzzle;
        let menu = new Menu("Pick a space to reveal the letter",puzzle.currentBoard);
        let choice = "1";
        let chosenIndex = -1;
        while (choice !== "_"){//
            chosenIndex = menu.displayReturnInt();
            choice = puzzle.currentBoard[chosenIndex];
            /*
            */
        }
        let letter = puzzle.answer[chosenIndex];
        puzzle.guessLetter(letter);
        return puzzle;
    }
}


//
class FreeLetter extends Special{
    use(currentPuzzle){
        let puzzle = currentPuzzle;
        let remaining = [];
        for(let i = 0; i < puzzle.answer.length; i++){
            if(puzzle.currentBoard[i] === "_") {
                remaining.push(puzzle.answer[i]);
            }
        }
        console.log("remaining",remaining);
        let randIndex = Math.round((Math.random()*(remaining.length-1)));
        console.log("random letter chosen",remaining[randIndex]);
        puzzle.guessLetter(remaining[randIndex]);
        return puzzle;
    }
}




//

function letterGuess(key){//
    if(key.keyCode === 13){
        key.preventDefault();//
        let letter = document.getElementById("letterGuess").value.toLowerCase();
        let alphabet =/[a-zA-z]*/g;
        let testLetter = letter.replace(alphabet,"");
        if(letter.length === 1 && testLetter.length === 0){
            let guess = user.guessLetter(letter);//Uses the function guessLetter to test if the user was right or wrong
                console.log("the guess here is "+guess);
                if (!guess){
                    alert(letter+ " is not a piece of the current puzzle.")
                }
        }else{
            alert("Your guess was not a valid letter!");

        }
        document.getElementById("letterGuess").value = "";
        let win = user.puzzle.guessWord(user.puzzle.currentBoard);
        if (win){
            YouWin();
        }

        UpdateBoard();
        UpdateHeader();
        if(user.guesses < 1){
            YouLose();
        }
    }

}

function wordGuess(key){//
    if(key.keyCode === 13){
        key.preventDefault();//Stops the default action for the ENTER key from happening.  ALlowing us to hijack it and submit answers, not the entire page.
        let word = document.getElementById("wordGuess").value.toLowerCase().trim();
        let alphabet =/[a-zA-z]*/g;
        let testWord = word.replace(alphabet,"");

        if(word.length > 0 && testWord.length === 0){
            user.guessWord(word);

        }else{
            alert("Your guess contained invalid or no characters!")
        }
        document.getElementById("wordGuess").value = "";
        let win = user.puzzle.guessWord(user.puzzle.currentBoard);
        if (win){
            YouWin();
        }

        UpdateBoard();
        UpdateHeader();
        if(user.guesses < 1){
            YouLose();
        }
    }

}

//
function Specials(type){
    user.useSpecial(type);

    let win = user.puzzle.guessWord(user.puzzle.currentBoard);
    if (win){
        YouWin();
    }
    UpdateInventory();
    UpdateBoard();
    UpdateHeader();
}

//
function UpdateHeader(){
    document.getElementById("header").innerHTML = "";
    let header = document.createTextNode(user.name + "_______"+user.guesses+" guesses remain_______Level: "+user.level+"_______"+user.score+" points");
    document.getElementById("header").appendChild(header);
}
//
function UpdateBoard(){
    document.getElementById("board").innerHTML = "";
    let boardString = " ";
    user.puzzle.currentBoard.forEach(function(v){
        boardString += v;
        boardString +=" ";
    });
    let board = document.createTextNode(boardString);
    document.getElementById("board").appendChild(board);
}
//
function UpdateInventory(){
    document.getElementById("streln").innerHTML = "";
    let streln = document.createTextNode(user.specials.inventory.Streln);
    document.getElementById("streln").appendChild(streln);

    document.getElementById("vowels").innerHTML = "";
    let vowels = document.createTextNode(user.specials.inventory.Vowels);
    document.getElementById("vowels").appendChild(vowels);

    document.getElementById("pickALetter").innerHTML = "";
    let pickALetter = document.createTextNode(user.specials.inventory.PickALetter);
    document.getElementById("pickALetter").appendChild(pickALetter);

    document.getElementById("freeLetter").innerHTML = "";
    let freeLetter = document.createTextNode(user.specials.inventory.FreeLetter);
    document.getElementById("freeLetter").appendChild(freeLetter);
}


// The "MAIN" starting Point of the program.  We start working here
function Main(){
    let validator = new Validator();
    let userName = validator.getString("Please enter your name.");
    if (userName === null){
        document.getElementById("header").innerHTML = "";
        document.getElementById("board").innerHTML = "User quit the game!";
        document.getElementById("guess").innerHTML = "";
        document.getElementById("specials").innerHTML = "";

    }else{
        user = new User(userName);
        let randIndex = Math.round((Math.random()*(library.length-1)));
        user.puzzle = new Puzzle(library[randIndex]);

        UpdateHeader();
        UpdateInventory();
        UpdateBoard();
    }

}
//
function YouWin(){
    let types = ["Streln","Vowels","PickALetter","FreeLetter"];
    let randIndex1 = Math.round((Math.random()*(types.length-1)));
    let lettersLeft = 0;
    for(let letter of user.puzzle.currentBoard){
        if(letter = "_"){
            lettersLeft +=13;
        }
    }
    let score = ((user.puzzle.answer.length)*11)+lettersLeft;
    user.score += score;
    user.specials.inventory[types[randIndex1]]++;
    user.guesses++;
    user.level++;
    alert("The answer is "+user.puzzle.word.toUpperCase()+"!\nPoints awarded for completion: "+ score+"\nYou got a new special: "+types[randIndex1]+"\nYou got an extra guess!");

    let randIndex2 = Math.round((Math.random()*(library.length-1)));
    user.puzzle = new Puzzle(library[randIndex2]);

    UpdateHeader();
    UpdateBoard;
    UpdateInventory();

}
//
function YouLose(){
    document.getElementById("board").innerHTML = "Above is your final score.";
    document.getElementById("guess").innerHTML = "You have run out of guesses.";
    document.getElementById("specials").innerHTML = "Refresh the page to play again.";

}



Main();
