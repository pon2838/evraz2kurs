const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');
const button_AC = document.getElementById('button_AC');
const button_C = document.getElementById('button_C');
const button_precent = document.getElementById('button_precent');
const button_divide = document.getElementById('button_divide');
const button_miltipy = document.getElementById('button_miltipy');
const button_minus = document.getElementById('button_minus');
const button_plus = document.getElementById('button_plus');
const button_comma = document.getElementById('button_comma');
const button0 = document.getElementById('button0');
const button_equals = document.getElementById('button_equals');
const div = document.getElementById('div');


// const div = document.getElementById('div');

let a = ''



if (button1) {
    button1.addEventListener('click', function (event) {


        // console.log(event);
        // console.log(event.target)
        // console.log(event.target.innerText)
        a = a + '1'


        div.innerText += '1'


        // console.log(input.value);
        // input.value = '20+20'
        // console.log(eval(input.value));
        // answer.innerText()
    });
}
if (button2) {
    button2.addEventListener('click', function (event) {
        a = a + '2'
    });
}
if (button3) {
    button3.addEventListener('click', function (event) {
        a = a + '3'
    });
}
if (button4) {
    button4.addEventListener('click', function (event) {
        a = a + '4'
    });
}
if (button5) {
    button5.addEventListener('click', function (event) {
        a = a + '5'

    });
}
if (button6) {
    button6.addEventListener('click', function (event) {
        a = a + '6'
    });
}
if (button7) {
    button7.addEventListener('click', function (event) {
        a = a + '7'
    });
}
if (button8) {
    button8.addEventListener('click', function (event) {
        a = a + '8'
    });
}
if (button9) {
    button9.addEventListener('click', function (event) {
        a = a + '9'
    });
}
if (button_AC) {
    button_AC.addEventListener('click', function (event) {
        a = ''
    });
}
if (button_C) {
    button_C.addEventListener('click', function (event) {

    });
}
if (button_precent) {
    button_precent.addEventListener('click', function (event) {
        a = a + '%'
    });
}
if (button_divide) {
    button_divide.addEventListener('click', function (event) {
        a = a + '/'
    });
}
if (button_miltipy) {
    button_miltipy.addEventListener('click', function (event) {
        a = a + '*'
    });
}
if (button_minus) {
    button_minus.addEventListener('click', function (event) {
        a = a + '-'
    });
}
if (button_plus) {
    button_plus.addEventListener('click', function (event) {
        a = a + '+'
    });
}
if (button_comma) {
    button_comma.addEventListener('click', function (event) {
        a = a + ','
    });
}
if (button0) {
    button0.addEventListener('click', function (event) {
        a = a + '0'
    });
}
if (button_equals) {
    button_equals.addEventListener('click', function (event) {
        console.log(eval(a));
        a = ''
    });
}

// titleDOM.value = '';
// descriptionDOM.value = '';
// body.addEventListener('click', function (event){
//     console.log(event);
//     console.log(event.target)
//     console.log(event.target.innerText)
// });
else {
    console.error('нет какого-то поля')
}
