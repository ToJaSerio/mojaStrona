const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');

const plus = document.getElementById('dodaj');
const minus = document.getElementById('odejmij');
const mnoz = document.getElementById('pomnoz');
const dziel = document.getElementById('podziel');
const czysc = document.getElementById('wyczysc');
const wynik = document.getElementById('wynik');

let a = 0;
let b = 0;
let result;

function Fplus() {
    result = a + b;
    console.log(result); 
    wynik.textContent = result;
}
function Fminus() {
    result = a - b;
    console.log(result);
    wynik.textContent = result;
}
function Fdziel() {
    result = a / b;
    console.log(result);
    wynik.textContent = result;
}
function Fmnoz() {
    result = a * b;
    console.log(result);
    wynik.textContent = result;
}

plus.addEventListener('click', () => {
    Fplus()
    number2.value = 0;
    number1.value = 0;    
});
minus.addEventListener('click', () => {
    Fminus()
    number2.value = 0;
    number1.value = 0;    
});
dziel.addEventListener('click', () => {
    Fdziel()
    number2.value = 0;
    number1.value = 0;    
});
mnoz.addEventListener('click', () => {
    Fmnoz()
    number2.value = 0;
    number1.value = 0;    
});

number1.addEventListener('input', (event) => {
    a = +(event.target.value)
});
number2.addEventListener('input', (event) => {
    b = +(event.target.value)
});

czysc.addEventListener('click', (event) => {
    number1.value = 0;
});
czysc.addEventListener('click', (event) => {
    number2.value = 0;
});