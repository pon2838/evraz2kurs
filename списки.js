const titleDOM = document.getElementById('title')
const descriptionDOM = document.getElementById('description')
const buttonAdd = document.getElementById('add')
const listDOM = document.getElementById('list')
const formDOM = document.getElementById('form')

let items = [];

if(titleDOM && descriptionDOM && buttonAdd && listDOM) {
    items = localStorage.getItem('items');
    items = JSON.parse(items);


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

       if (!title) {
           alert('Необходимо написать заголовок');
           return;
       }

        if (!description) {
            alert('Необходимо написать заголовок');
            return;
        }
        const text = `<div class="item-title">${ title }</div>
                             <div class="item-description">${ description }</div>`;
        const newDiv = document.createElement('div');
        newDiv.innerHTML = text;
        newDiv.classList.add('item');
        listDOM.appendChild(newDiv);

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
else {
    console.error('Нет какого-то элемента');
}