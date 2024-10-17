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
                runGame(gameType);
            }
        });
    }
    runGame("addition");
});

/**
 * The main game loop called when the script is first loaded 
 * and after the users answer has been processed
 */
function runGame(gameType){
    let num1 =  Math.floor(Math.random()*25+1);
    let num2 =  Math.floor(Math.random()*25+1);

    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "subtraction"){
        displaySubtractionQuestion(num1, num2);
    } else if(gameType === "multiply"){
        displayMultiplicationQuestion(num1, num2);
    } else if(gameType === "division"){
        displayDivisionQuestion(num1, num2)
    }else{
        alert(`unkown game type ${gameType}`);
        throw `unkown game type ${gameType}`;
    
}}



function checkAnswer(){
    
}

/***
 * gets the operands (the numbers) and the operators (plus, minus etc)
 * returns the correct answer
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = parseInt(document.getElementById(operator).innerText);

    if (operator === '+'){
        return [operand1 + operand2, 'addition'];
    } else {
        alert(`Unimplimented operator ${operator}`);
        throw `Unimplimented operator ${operator}. Aborting`;
    }
}


function incrementScore(){

}


function incrementWrongAnswer(){

}



function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}


function displaySubtractionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '-';
}


function displayMultiplicationQuestion(){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}


function displayDivisionQuestion(){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '÷';
}
