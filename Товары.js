const titleDOM = document.getElementById('title')
const descriptionDOM = document.getElementById('description')
const buttonAdd = document.getElementById('add')
const listDOM = document.getElementById('list')
const formDOM = document.getElementById('form')

let items = [];

if(listDOM && buttonAdd && descriptionDOM && titleDOM) {
    items = localStorage.getItem('items');
    items = JSON.parse(items);
    console.log('1231')


    if (!items) {
        items = [];
    }

    for (const item of items) {
        const text = `<div class="item-title">${ item.title }</div>
                             <div class="item-description">${ item.description }</div>`;
        const newDiv = document.createElement('div');
        newDiv.innerHTML = text;
        newDiv.classList.add('item');
        listDOM.appendChild(newDiv);
    }

    buttonAdd.addEventListener("click", function (event) {
        const title = titleDOM.value;
        const description = descriptionDOM.value;


        const text = `<div class="item-title">${ title }</div>
                             <div class="item-description">${ description }</div>`;
        const newDiv = document.createElement('div');
        newDiv.innerHTML = text;
        newDiv.classList.add('item');
        listDOM.appendChild(newDiv);


        if (!title) {
            alert('Необходимо написать заголовок');
            return;
        }

        if (!description) {
            alert('Необходимо написать заголовок');
            return;
        }


        const object = { title, description };
        items.push(object)
        localStorage.setItem('items', JSON.stringify(items))
        // const object2 = {
        //     title: title,
        //     description: description
        // }
        // titleDOM.value = '';
        // descriptionDOM.value = '';
        formDOM.reset;
    });
}
// else {
//     console.error('Нет какого-то элемента');
// }



const button = document.getElementById('button');
//
//
if (button) {
    button.addEventListener('click', function (event) {
        const text = `<div class="item-title"></div>
                             <div class="item-description"></div>`;
        const newDiv = document.createElement('div');
        newDiv.innerHTML = text;
        newDiv.classList.add('item');
        // listDOM.appendChild(newDiv);
    })};
// }
//
//
//
// console.log(123)
// const  text = `<div class="item"></div>`
// const newDiv = document.createElement('div');
// newDiv.innerHTML = text;
// newDiv.classList.add('item');