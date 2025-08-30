const generateButton = document.getElementById("generate-btn");
const resultContainer = document.getElementById("result-container");
const resultElements = resultContainer.getElementsByTagName("p");

var uppercase = [...Array(26)].map((_, x) => { return String.fromCharCode(x + 65); });
var lowercase = [...Array(26)].map((_, x) => { return String.fromCharCode(x + 97); });
const allLetters = uppercase.concat(lowercase);

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const numbers = [...Array(10)].map((_, x) => { return String(x); });

function generatePassword(length) {
    var password = "";
    var allCharacters = [].concat(allLetters, symbols, numbers);
    for (var i = 0; i < length; i++) {
        var characterIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[characterIndex];
    }
    return password;
}

generateButton.addEventListener("click", () => {
    for (var i = 0; i < resultElements.length; i ++) {
        resultElements[i].textContent = generatePassword(15);
    }
});