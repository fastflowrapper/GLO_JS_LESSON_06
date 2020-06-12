'use strict';

let isNumber = function(inputNumber){
    return  (!isNaN(parseFloat(inputNumber) ) && ( isFinite(inputNumber) ) );
};


let numberGame = function() {
    let theAnswer = (Math.floor(Math.random()*100) ) + 1;
    let numberInput = function() {
        let givenAnswer = prompt('Угадай число от 1 до 100');
            if ( !isNumber(givenAnswer) ){
                if ( confirm('Введи число!') ){
                    numberInput();
                } else {
                    givenAnswer = null;
                }
            }
        return(givenAnswer);
    };
    let givenNumberCheck = function(){
        let takenNumber = numberInput();
        if (takenNumber === null){
            alert('goodbye ;)');
        } else if (+takenNumber < theAnswer){
            alert('Загаданное число больше, попробуйте еще раз');
            givenNumberCheck();
        } else if (+takenNumber > theAnswer) {
            alert('Загаданное число меньше, попробуйте еще раз');
            givenNumberCheck();
        } else if (+takenNumber === theAnswer) {
            alert('Поздравляем, это ПОБЕДА');
        }
    };
    givenNumberCheck();
};

numberGame();