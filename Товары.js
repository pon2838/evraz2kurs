const button = document.getElementById('button');


if (button) {
    button.addEventListener('click', function (event) {
        const  text = `<div class="item"></div>`
        const newDiv = document.createElement('div');
        newDiv.innerHTML = text;
        newDiv.classList.add('item');
    });
}



