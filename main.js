const allCells = document.querySelectorAll('.cell');
const cornerCells = document.querySelectorAll('.cornerCell');
let gameOver = false;
let humanWins = false;
let AIWins = false;
let draw = false;
let humanPuts = 'displayX'; 
let movesCounter = 0;

// определить, чем играет АИ
let AIPuts;
if (humanPuts == 'displayX'){
    AIPuts = 'display0';
} else {
    AIPuts = 'displayX';
}

// в случае клика запускаем цепочку действий через ивент
allCells.forEach(function (item) {
    item.addEventListener('click', function(){
        
        if (isFree(item) && !gameOver){
            // поставить крестик
            putHereHuman(item);
            
            //проверить, не победа ли кого-то из
            winCheck ();
            
            // setInterval (function(){
                // ход за АИ в правильном месте
                if (!gameOver) {
                    AImove(item);
                }
            // }, 1500);  
            
            //проверить, не победа ли кого-то из
            if (!gameOver) {
                winCheck ();
            }
        }
    })
})

// логика ходов за АИ
function AImove(element) {
    // ДЛЯ ОДНОХОДОВОГО ВЫИГРЫША
    // ГОРИЗОНТАЛЬ
    // если чел-ек заполнил 0-1, 3-4,6-7 то... 
    if (allCells[0].classList.contains(AIPuts) && allCells[1].classList.contains(AIPuts) && isFree(allCells[2])){
        putHereAI(allCells[2]);
    }
    else if (allCells[3].classList.contains(AIPuts) && allCells[4].classList.contains(AIPuts) && isFree(allCells[5])){
        putHereAI(allCells[5]);
    }
    else if (allCells[6].classList.contains(AIPuts) && allCells[7].classList.contains(AIPuts) && isFree(allCells[8])){
        putHereAI(allCells[8]);
    }
    // если чел-ек заполнил 1-2, 4-5,7-8 то...
    else if (allCells[1].classList.contains(AIPuts) && allCells[2].classList.contains(AIPuts) && isFree(allCells[0])){
        putHereAI(allCells[0]);
    }
    else if (allCells[4].classList.contains(AIPuts) && allCells[5].classList.contains(AIPuts) && isFree(allCells[3])){
        putHereAI(allCells[3]);
    }
    else if (allCells[7].classList.contains(AIPuts) && allCells[8].classList.contains(AIPuts) && isFree(allCells[6])){
        putHereAI(allCells[6]);
    }
    else if (allCells[0].classList.contains(AIPuts) && allCells[2].classList.contains(AIPuts) && isFree(allCells[1])){
        putHereAI(allCells[1]);
    }
    else if (allCells[6].classList.contains(AIPuts) && allCells[8].classList.contains(AIPuts) && isFree(allCells[7])){
        putHereAI(allCells[7]);
    }

    // ВЕРТИКАЛЬ
    // если чел-ек заполнил 0-3, 1-4,2-5 то... 
    else if (allCells[0].classList.contains(AIPuts) && allCells[3].classList.contains(AIPuts) && isFree(allCells[6])){
        putHereAI(allCells[6]);
    }
    else if (allCells[1].classList.contains(AIPuts) && allCells[4].classList.contains(AIPuts) && isFree(allCells[7])){
        putHereAI(allCells[7]);
    }
    else if (allCells[2].classList.contains(AIPuts) && allCells[5].classList.contains(AIPuts) && isFree(allCells[8])){
        putHereAI(allCells[8]);
    }
    // если чел-ек заполнил 3-6, 4-7,5-8 то... 
    else if (allCells[3].classList.contains(AIPuts) && allCells[6].classList.contains(AIPuts) && isFree(allCells[0])){
        putHereAI(allCells[0]);
    }
    else if (allCells[4].classList.contains(AIPuts) && allCells[7].classList.contains(AIPuts) && isFree(allCells[1])){
        putHereAI(allCells[1]);
    }
    else if (allCells[5].classList.contains(AIPuts) && allCells[8].classList.contains(AIPuts) && isFree(allCells[2])){
        putHereAI(allCells[2]);
    }
    else if (allCells[0].classList.contains(AIPuts) && allCells[6].classList.contains(AIPuts) && isFree(allCells[3])){
        putHereAI(allCells[3]);
    }
    else if (allCells[2].classList.contains(AIPuts) && allCells[8].classList.contains(AIPuts) && isFree(allCells[5])){
        putHereAI(allCells[5]);
    }

    // ДИАГОНАЛЬ    
    // если чел-ек заполнил 0-4, 4-8,2-4, 4-6 то... 
    else if (allCells[0].classList.contains(AIPuts) && allCells[4].classList.contains(AIPuts) && isFree(allCells[8])){
        putHereAI(allCells[8]);
    }
    else if (allCells[4].classList.contains(AIPuts) && allCells[8].classList.contains(AIPuts) && isFree(allCells[0])){
        putHereAI(allCells[0]);
    }
    else if (allCells[2].classList.contains(AIPuts) && allCells[4].classList.contains(AIPuts) && isFree(allCells[6])){
        putHereAI(allCells[6]);
    }
    else if (allCells[6].classList.contains(AIPuts) && allCells[4].classList.contains(AIPuts) && isFree(allCells[2])){
        putHereAI(allCells[2]);
    } 
    // ДЛЯ ОДНОХОДОВОГО ВЫИГРЫША
    

    // если однохожовый выигрыш невозможен, ЗАНИМАЕМ СЕРЕДИНУ, если свободна
    else if (isFree(allCells[4])){
        putHereAI(allCells[4]);
    }

    // если все боковые свободны (кроме центра), то ставим в угол
    else if (isFree(allCells[0]) && isFree(allCells[1]) && isFree(allCells[2]) && isFree(allCells[3]) && isFree(allCells[5]) && isFree(allCells[6]) && isFree(allCells[7]) && isFree(allCells[8])) {
        putHereAI(allCells[0]);
    }

    // УСТРАНЯЕМ ОДНОХОДОВЫЙ ВЫИГРЫШ за человека
    // ГОРИЗОНТАЛЬ
    // если чел-ек заполнил 0-1, 3-4,6-7 то... 
    else if (allCells[0].classList.contains(humanPuts) && allCells[1].classList.contains(humanPuts) && isFree(allCells[2])){
        putHereAI(allCells[2]);
    }
    else if (allCells[3].classList.contains(humanPuts) && allCells[4].classList.contains(humanPuts) && isFree(allCells[5])){
        putHereAI(allCells[5]);
    }
    else if (allCells[6].classList.contains(humanPuts) && allCells[7].classList.contains(humanPuts) && isFree(allCells[8])){
        putHereAI(allCells[8]);
    }
    // если чел-ек заполнил 1-2, 4-5,7-8 то...
    else if (allCells[1].classList.contains(humanPuts) && allCells[2].classList.contains(humanPuts) && isFree(allCells[0])){
        putHereAI(allCells[0]);
    }
    else if (allCells[4].classList.contains(humanPuts) && allCells[5].classList.contains(humanPuts) && isFree(allCells[3])){
        putHereAI(allCells[3]);
    }
    else if (allCells[7].classList.contains(humanPuts) && allCells[8].classList.contains(humanPuts) && isFree(allCells[6])){
        putHereAI(allCells[6]);
    }
    else if (allCells[0].classList.contains(humanPuts) && allCells[2].classList.contains(humanPuts) && isFree(allCells[1])){
        putHereAI(allCells[1]);
    }
    else if (allCells[6].classList.contains(humanPuts) && allCells[8].classList.contains(humanPuts) && isFree(allCells[7])){
        putHereAI(allCells[7]);
    }

    // ВЕРТИКАЛЬ
    // если чел-ек заполнил 0-3, 1-4,2-5 то... 
    else if (allCells[0].classList.contains(humanPuts) && allCells[3].classList.contains(humanPuts) && isFree(allCells[6])){
        putHereAI(allCells[6]);
    }
    else if (allCells[1].classList.contains(humanPuts) && allCells[4].classList.contains(humanPuts) && isFree(allCells[7])){
        putHereAI(allCells[7]);
    }
    else if (allCells[2].classList.contains(humanPuts) && allCells[5].classList.contains(humanPuts) && isFree(allCells[8])){
        putHereAI(allCells[8]);
    }
    // если чел-ек заполнил 3-6, 4-7,5-8 то... 
    else if (allCells[3].classList.contains(humanPuts) && allCells[6].classList.contains(humanPuts) && isFree(allCells[0])){
        putHereAI(allCells[0]);
    }
    else if (allCells[4].classList.contains(humanPuts) && allCells[7].classList.contains(humanPuts) && isFree(allCells[1])){
        putHereAI(allCells[1]);
    }
    else if (allCells[5].classList.contains(humanPuts) && allCells[8].classList.contains(humanPuts) && isFree(allCells[2])){
        putHereAI(allCells[2]);
    }
    else if (allCells[0].classList.contains(humanPuts) && allCells[6].classList.contains(humanPuts) && isFree(allCells[3])){
        putHereAI(allCells[3]);
    }
    else if (allCells[2].classList.contains(humanPuts) && allCells[8].classList.contains(humanPuts) && isFree(allCells[5])){
        putHereAI(allCells[5]);
    }

    // ДИАГОНАЛЬ    
    // если чел-ек заполнил 0-4, 4-8,2-4, 4-6 то... 
    else if (allCells[0].classList.contains(humanPuts) && allCells[4].classList.contains(humanPuts) && isFree(allCells[8])){
        putHereAI(allCells[8]);
    }
    else if (allCells[4].classList.contains(humanPuts) && allCells[8].classList.contains(humanPuts) && isFree(allCells[0])){
        putHereAI(allCells[0]);
    }
    else if (allCells[2].classList.contains(humanPuts) && allCells[4].classList.contains(humanPuts) && isFree(allCells[6])){
        putHereAI(allCells[6]);
    }
    else if (allCells[6].classList.contains(humanPuts) && allCells[4].classList.contains(humanPuts) && isFree(allCells[2])){
        putHereAI(allCells[2]);
    }
    // УСТРАНЯЕМ ОДНОХОДОВЫЙ ВЫИГРЫШ за человека


    // ДВУХ-ХОДОВЫЕ УГРОЗЫ, обычно углом
    // если movesCounter==2,  а человек поставил 0+8 или 2+6, то поставь на 7
    else if (movesCounter == 2 && ((allCells[0].classList.contains(humanPuts) && allCells[8].classList.contains(humanPuts)) || (allCells[2].classList.contains(humanPuts) && allCells[6].classList.contains(humanPuts)))){
        putHereAI(allCells[7]);
    }

    else if (movesCounter == 2 && allCells[4].classList.contains(humanPuts) && allCells[8].classList.contains(humanPuts)){
        putHereAI(allCells[6]);
    }

    // если 2 перпендикулярных угла не содержат AIPuts и есть humanPuts 3/6+1/2, 0/1+5/8, 2/5+7/6, 6/7+0/3, поставь в общем углу
    else if ((!allCells[0].classList.contains(AIPuts) && !allCells[1].classList.contains(AIPuts) && !allCells[2].classList.contains(AIPuts) && !allCells[5].classList.contains(AIPuts) && !allCells[8].classList.contains(AIPuts)) && ((allCells[0].classList.contains(humanPuts) || allCells[1].classList.contains(humanPuts)) && (allCells[5].classList.contains(humanPuts) || allCells[8].classList.contains(humanPuts)))){
        putHereAI(allCells[2]);
    }
    else if ((!allCells[2].classList.contains(AIPuts) && !allCells[5].classList.contains(AIPuts) && !allCells[8].classList.contains(AIPuts) && !allCells[7].classList.contains(AIPuts) && !allCells[6].classList.contains(AIPuts)) && ((allCells[2].classList.contains(humanPuts) || allCells[5].classList.contains(humanPuts)) && (allCells[7].classList.contains(humanPuts) || allCells[6].classList.contains(humanPuts)))){
        putHereAI(allCells[8]);
    }
    else if ((!allCells[8].classList.contains(AIPuts) && !allCells[7].classList.contains(AIPuts) && !allCells[6].classList.contains(AIPuts) && !allCells[3].classList.contains(AIPuts) && !allCells[0].classList.contains(AIPuts)) && ((allCells[8].classList.contains(humanPuts) || allCells[7].classList.contains(humanPuts)) && (allCells[3].classList.contains(humanPuts) || allCells[0].classList.contains(humanPuts)))){
        putHereAI(allCells[6]);
    }
    else if ((!allCells[6].classList.contains(AIPuts) && !allCells[3].classList.contains(AIPuts) && !allCells[0].classList.contains(AIPuts) && !allCells[1].classList.contains(AIPuts) && !allCells[2].classList.contains(AIPuts)) && ((allCells[6].classList.contains(humanPuts) || allCells[3].classList.contains(humanPuts)) && (allCells[2].classList.contains(humanPuts) || allCells[2].classList.contains(humanPuts)))){
        putHereAI(allCells[0]);
    }
    // ДВУХ-ХОДОВЫЕ УГРОЗЫ, обычно углом


    // Если угроз нет и очевидного выигрыша для нас нет, то ставим в свободном месте
    else {
        for (i = 0; i < 9; i++){
            if (isFree(allCells[i])){
                putHereAI(allCells[i]);
                break;
            }
        }
    }
}

// для проверки, свободна ли ячейка и от Х и 0
function isFree(element) {
    if (element.classList.contains('displayX') || element.classList.contains('display0')) {
        return false;
    }
    else {
        return true;
    }
}

// поставить за человека
function putHereHuman(element) {
        element.classList.add(humanPuts);
        movesCounter ++;
};

// поставить за AI
function putHereAI(element) {
    element.classList.add(AIPuts);
};

// проверить, не победа ли кого-то из
function winCheck () {
    // ДЛЯ х-ОВ
    // если ряд 1й, 2й или 3й = Х, то... 
    if ((allCells[0].classList.contains('displayX') && allCells[1].classList.contains('displayX') && allCells[2].classList.contains('displayX')) || (allCells[3].classList.contains('displayX') && allCells[4].classList.contains('displayX') && allCells[5].classList.contains('displayX')) || (allCells[6].classList.contains('displayX') && allCells[7].classList.contains('displayX') && allCells[8].classList.contains('displayX'))) {
        gameOver = true;
        if (humanPuts == 'displayX'){
            console.log('You won, not possible!!!');
            humanWins = true;
            headerChanger ();
        }
        else {
            console.log('You are the loser, HA-HA-HA!!!');
            AIWins = true;
            headerChanger ();
        }
    }
    // если колонка 1 или 2 или 3 = Х, то.... 
    else if ((allCells[0].classList.contains('displayX') && allCells[3].classList.contains('displayX') && allCells[6].classList.contains('displayX')) || (allCells[1].classList.contains('displayX') && allCells[4].classList.contains('displayX') && allCells[7].classList.contains('displayX')) || (allCells[2].classList.contains('displayX') && allCells[5].classList.contains('displayX') && allCells[8].classList.contains('displayX'))) {
        gameOver = true;
        if (humanPuts == 'displayX'){
            console.log('You won, not possible!!!');
            humanWins = true;
            headerChanger ();
        }
        else {
            console.log('You are the loser, HA-HA-HA!!!');
            AIWins = true;
            headerChanger ();
        }
    }
    // если диагональ = Х, то.... 
    else if ((allCells[0].classList.contains('displayX') && allCells[4].classList.contains('displayX') && allCells[8].classList.contains('displayX')) || (allCells[2].classList.contains('displayX') && allCells[4].classList.contains('displayX') && allCells[6].classList.contains('displayX'))) {
        gameOver = true;
        if (humanPuts == 'displayX'){
            console.log('You won, not possible!!!');
            humanWins = true;
            headerChanger ();
        }
        else {
            console.log('You are the loser, HA-HA-HA!!!');
            AIWins = true;
            headerChanger ();
        }
    }

    // ДЛЯ НУЛЕЙ
    // если ряд 1й, 2й или 3й = 0, то... 
    if ((allCells[0].classList.contains('display0') && allCells[1].classList.contains('display0') && allCells[2].classList.contains('display0')) || (allCells[3].classList.contains('display0') && allCells[4].classList.contains('display0') && allCells[5].classList.contains('display0')) || (allCells[6].classList.contains('display0') && allCells[7].classList.contains('display0') && allCells[8].classList.contains('display0'))) {
        gameOver = true;
        if (humanPuts == 'displayX'){
            console.log('You are the loser, HA-HA-HA!!!');
            AIWins = true;
            headerChanger ();
        }
        else {
            console.log('You won, not possible!!!');
            humanWins = true;
            headerChanger ();
        }
    }
    // если колонка 1 или 2 или 3 = 0, то.... 
    else if ((allCells[0].classList.contains('display0') && allCells[3].classList.contains('display0') && allCells[6].classList.contains('display0')) || (allCells[1].classList.contains('display0') && allCells[4].classList.contains('display0') && allCells[7].classList.contains('display0')) || (allCells[2].classList.contains('display0') && allCells[5].classList.contains('display0') && allCells[8].classList.contains('display0'))) {
        gameOver = true;
        if (humanPuts == 'displayX'){
            console.log('You are the loser, HA-HA-HA!!!');
            AIWins = true;
            headerChanger ();
        }
        else {
            console.log('You won, not possible!!!');
            humanWins = true;
            headerChanger ();
        }
    }
    // если диагональ = 0, то.... 
    else if ((allCells[0].classList.contains('display0') && allCells[4].classList.contains('display0') && allCells[8].classList.contains('display0')) || (allCells[2].classList.contains('display0') && allCells[4].classList.contains('display0') && allCells[6].classList.contains('display0'))) {
        gameOver = true;
        if (humanPuts == 'displayX'){
            console.log('You are the loser, HA-HA-HA!!!');
            AIWins = true;
            headerChanger ();
        }
        else {
            console.log('You won, not possible!!!');
            humanWins = true;
            headerChanger ();
        }
    }

    // проверка, не ничья ли
    else if (movesCounter == 5) {
        gameOver = true;
        draw = true;
        console.log('This is a draw, you are a worthy opponent');
        headerChanger ();
    }
};

function headerChanger () {
    if (gameOver == true) {
        const headerText = document.getElementById('header');
        console.log('worked');
        if (draw == true) {
            headerText.innerText = 'This is a draw, you are a worthy opponent...';
            headerText.style.color = "red";
        }
        if (AIWins == true) {
            headerText.innerText = 'You are the LOOSER, HA-HA-HA!!!';
            headerText.style.color = "red";
        }
        if (humanWins == true) {
            headerText.innerText = 'You won, not possible!!!';
            headerText.style.color = "red";
        }
    }
}