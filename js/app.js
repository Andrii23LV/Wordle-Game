import { dictionary } from './dictionary.js';

let magicWord = dictionary[Math.floor(Math.random() * dictionary.length)];
console.log(magicWord);
let magicWordArr = magicWord.split('');
let btnCheck = document.querySelector('.btn-check');
let btnReset = document.querySelector('.btn-reset');
let row = 0;

function checkWord() {  
    let rowArr = []
    let myWord = '';
    for (let i = 0; i < 5; i++) {
        let boxValue = document.querySelector(`.s${i+1}-row${row}`).value;
        let box = document.querySelector(`.s${i+1}-row${row}`);
        rowArr.push(boxValue);
        myWord = rowArr.join('');
        console.log(boxValue)     
        console.log(magicWordArr[i])   
        if (boxValue === magicWordArr[i]) {
            box.style.backgroundColor = 'green';
        } else if (magicWordArr.includes(boxValue)) {
            box.style.backgroundColor = 'yellow';
        } else {
            box.style.backgroundColor = 'gray';
        }
    }  
    if (!dictionary.includes(myWord)) {
        alert('Not in word list!');
        for (let i = 0; i < 5; i++) {
            document.querySelector(`.s${i+1}-row${row}`).value = '';
            let box = document.querySelector(`.s${i+1}-row${row}`);
            box.style.backgroundColor = 'white';
        }
        row--;
    }
    console.log(myWord)
    console.log(magicWord)

    const isWinner = magicWord === myWord;
    const isGameOver = row === 5;
    setTimeout(() => {
        if (isWinner) {
            alert('Congratulations!');
        } else if (isGameOver) {
            alert(`Better luck next time! The word was ${magicWord}.`);
        }
    }, 1000);
}

btnCheck.addEventListener('click', () => {
    row++;
    checkWord();
});

btnReset.addEventListener('click', () => {
    for (let j = 0; j < 30; j++) {
        document.getElementsByTagName('input')[j].value = '';
        document.getElementsByTagName('input')[j].style.backgroundColor = 'white';
    }
    magicWord = dictionary[Math.floor(Math.random() * dictionary.length)];
    magicWordArr = magicWord.split('');
    console.log(magicWord);
    row = 0;
});

