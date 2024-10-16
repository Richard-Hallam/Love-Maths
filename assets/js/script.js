//wait for the dom to finish loading before running game
// get the button elements and add event listeners to them.

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");//gets array of buttons

    for (let button of buttons){//iterates throuhg array of buttons
        button.addEventListener("click", function(){//add listner for click to each button
            if(this.getAttribute("data-type") === "submit"){//compares the data type of the button to determine if it is the submit button
                alert('You clicked submit.');
            } else{
                let gameType = this.getAttribute("data-type");//declares game type and sets it to be the data type of the button
                alert(`you clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game loop called when the script is first loaded 
 * and after the users answer has been processed
 */
function runGame(){
    let num1 =  Math.floor(Math.random()*25+1);
    let num2 =  Math.floor(Math.random()*25+1);
}


function checkAnswer(){

}


function calculateCorrectAnswer(){

}


function incrementScore(){

}


function incrementWrongAnswer(){

}



function displayAdditionQuestion(){

}


function displaySubtractionQuestion(){

}


function displayMultiplicationQuestion(){


}


function displayDivisionQuestion(){

}


