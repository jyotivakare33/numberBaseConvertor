const encode = document.querySelector('.btn-hex');
const result = document.querySelector('.result-hex');
const inputValue = document.querySelector('.hex');
encode.addEventListener('click', () => {
    result.innerHTML = converter(inputValue.value,10,16);
});

const btnOctal = document.querySelector('.btn-octal');
const resultOctal = document.querySelector('.result-octal');
const inputOctal = document.querySelector('.octal');
btnOctal.addEventListener('click', () => {
    resultOctal.innerHTML = converter(inputOctal.value,10,8);
});

const btnDecimal = document.querySelector('.btn-decimal');
const resultDecimal = document.querySelector('.result-decimal');
const inputDecimal = document.querySelector('.decimal');
btnDecimal.addEventListener('click', () => {
    resultDecimal.innerHTML = converter(inputDecimal.value,10,2);
});

function converter(number,fromBase,toBase) {
    if (fromBase == 10)
        return (parseInt(number)).toString(toBase)
    else if (toBase == 10)
        return parseInt(number, fromBase);
    else {
        var numberInDecimal = parseInt(number, fromBase);
        return (parseInt(numberInDecimal)).toString(toBase);
    }
}