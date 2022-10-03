const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
    const password = resultEl.innerText;
    password.select;
    navigator.clipboard.writeText(`${password}`);

    alert("Copied the text: " + `${password}`);
});

generateEl.addEventListener("click", () => {
    length = +lengthEl.value; // string to number
    isLower = lowercaseEl.checked;
    isUpper = uppercaseEl.checked;
    isNum = numbersEl.checked;
    isSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(
        isLower,
        isUpper,
        isNum,
        isSymbol,
        length
    );
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    console.log(typesCount)
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
        (item) => Object.values(item)[0]
    );

    // if all boxes are unchecked
    if (typesCount === 0) {
        return "";
    }

    for(let i=0; i<length; i = +i +typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

//  functions for random
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}
