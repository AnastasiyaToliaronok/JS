

const screen = document.querySelector('.Screen');


const Button_Number_0 = document.querySelector('.Button-Number-0');
Button_Number_0.addEventListener('click', () => {
    screen.value += 0;
});

const Button_Number_1 = document.querySelector('.Button-Number-1');
Button_Number_1.addEventListener('click', () => {
    screen.value += 1;
});

const Button_Number_2 = document.querySelector('.Button-Number-2');
Button_Number_2.addEventListener('click', () => {
    screen.value += 2;
});

const Button_Number_3 = document.querySelector('.Button-Number-3');
Button_Number_3.addEventListener('click', () => {
    screen.value += 3;
});

const Button_Number_4 = document.querySelector('.Button-Number-4');
Button_Number_4.addEventListener('click', () => {
    screen.value += 4;
});

const Button_Number_5 = document.querySelector('.Button-Number-5');
Button_Number_5.addEventListener('click', () => {
    screen.value += 5;
});

const Button_Number_6 = document.querySelector('.Button-Number-6');
Button_Number_6.addEventListener('click', () => {
    screen.value += 6;
});

const Button_Number_7 = document.querySelector('.Button-Number-7');
Button_Number_7.addEventListener('click', () => {
    screen.value += 7;
});

const Button_Number_8 = document.querySelector('.Button-Number-8');
Button_Number_8.addEventListener('click', () => {
    screen.value += 8;
});

const Button_Number_9 = document.querySelector('.Button-Number-9');
Button_Number_9.addEventListener('click', () => {
    screen.value += 9;
});

const Button_Equals = document.querySelector('.Button-Equals');
Button_Equals.addEventListener('click', () => {
    screen.value = "=";
})

const Button_Division = document.querySelector('.Button-Division');
Button_Division.addEventListener('click', () => {
    screen.value = "/";
})

const Button_Multiply = document.querySelector('.Button-Multiply');
Button_Multiply.addEventListener('click', () => {
    screen.value = "*";
})

const Button_Subtraction = document.querySelector('.Button-Subtraction');
Button_Subtraction.addEventListener('click', () => {
    screen.value = "-";
})

const Button_Sum = document.querySelector('.Button-Sum');
Button_Sum.addEventListener('click', () => {
    screen.value = "+";
})

const Button_Delete = document.querySelector('.Button-Delete');
Button_Delete.addEventListener('click', () => {
    screen.value = "";
})

const mathSigns = ['+', '-', '*', '/'];
let mSigns = mathSigns;




function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divison(a, b) {
    return a / b;
}


























console.log(mSigns)