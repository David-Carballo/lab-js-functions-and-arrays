// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2) return num1;
    else return num2;
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsToFind) {
    if(wordsToFind.length === 0) return null;
    let longWord = "";
    for(let i = 0; i<wordsToFind.length; i++) {
        if(wordsToFind[i].length > longWord.length) longWord = wordsToFind[i];
    }
    return longWord;
}
console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArr) {
    let count = 0;
    for(let i = 0; i<numbersArr.length; i++) {
        count += numbersArr[i];
    }
    return count;
}

console.log(sumNumbers(numbers));


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArr) {
    if(numbersArr.length === 0) return 0;

    let count = 0;
    for(let i = 0; i<numbersArr.length; i++) {
        count += numbersArr[i];
    }
    return count/numbersArr.length;
    //return sumNumbers(numbersArr)/numbersArr.length;
}

console.log(averageNumbers(numbers2));


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArr, findWord) {
    if(wordsArr.length === 0 || findWord.length === 0) return null;

    for (let i = 0; i < wordsArr.length; i++) {
        if(wordsArr[i] === findWord) return true;
    }

    return false;
}

console.log(doesWordExist(words2, "machine"))
console.log(doesWordExist(words2, "truth"))
console.log(doesWordExist([], "truth"))
console.log(doesWordExist(words, ""))
console.log(doesWordExist(words2, "th"))