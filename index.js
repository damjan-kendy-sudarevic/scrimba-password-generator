const generateButton = document.getElementById("generate-btn");
const numbersCheckbox = document.getElementById("include-numbers");
const symbolsCheckbox = document.getElementById("include-symbols");
const resultContainer = document.getElementById("results");
const resultElements = resultContainer.getElementsByTagName("p");

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const numbers = [...Array(10)].map((_, x) => { return String(x); });
const letters = [].concat(
    [...Array(26)].map((_, x) => { return String.fromCharCode(x + 65); }),
    [...Array(26)].map((_, x) => { return String.fromCharCode(x + 97); })
);

function getCharacters() {
    let characters = letters;
    if (numbersCheckbox.checked)
        characters = characters.concat(numbers);
    if (symbolsCheckbox.checked)
        characters = characters.concat(symbols);
    return characters;
}

function generatePassword(length) {
    let password = "";
    let characters = getCharacters();
    for (let i = 0; i < length; i++) {
        let characterIndex = Math.floor(Math.random() * characters.length);
        password += characters[characterIndex];
    }
    return password;
}

generateButton.addEventListener("click", () => {
    for (let i = 0; i < resultElements.length; i ++) {
        resultElements[i].textContent = generatePassword(15);
    }
});