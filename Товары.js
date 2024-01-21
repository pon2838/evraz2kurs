const titleDOM = document.getElementById('title');
const descriptionDOM = document.getElementById('description');
const buttonAdd = document.getElementById('add');
const listDOM = document.getElementById('list');
const formDOM = document.getElementById('form');
const categoryDOM = document.getElementById('category');

if (titleDOM && descriptionDOM && buttonAdd && listDOM && categoryDOM) {
    buttonAdd.addEventListener('click', function(event) {
        const title = titleDOM.value;
        const description = descriptionDOM.value;
        console.log('123')

        if (!title) {
            alert('Необходимо указать заголовок');
            return;
        }

        if (!description) {
            alert('Необходимо указать описание');
            return;
        }

        const text = `<div class="item-title">${ title }</div>
                      <div class="item-description">${ description }</div>
                      <div class="item-description">${ description }</div>`;
        const newDiv = document.createElement('div');
        newDiv.innerHTML = text;
        newDiv.classList.add('item');
        listDOM.appendChild(newDiv);

        // titleDOM.value = '';
        // descriptionDOM.value = '';
        formDOM.reset();
    });
}
// else {
//     console.error('Нет какого-то элемента');
// }