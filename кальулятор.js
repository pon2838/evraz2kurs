// const a = document.querySelector('.test')
// const input = document.querySelector('.input')
const button = document.querySelector('.button')
console.log(input.value);
input.value = 'new value'
let n = 1
function test () {
input.value = n
console.log(n++)
}
button.onclick = test
