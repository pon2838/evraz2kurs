const nameDOM = document.getElementById('name');
const categoryDOM = document.getElementById('category');
const priceDOM = document.getElementById('price');
const countDOM = document.getElementById('count');
const discountYesDOM = document.getElementById('discountYes');
const discountNoDOM = document.getElementById('discountNo');
const discountNumberDOM = document.getElementById('discount');
const discountBodyDOM = document.getElementById('discount-body');
const specialsDOM = document.getElementsByName('specials');
const descriptionDOM = document.getElementById('description');
const buttonAdd = document.getElementById('add');
const listDOM = document.getElementById('list');
const formDOM = document.getElementById('_form');

let items = [];

function addItem(item, itemIndex) {
    let newPrice = 0;
    let newPriceDOM = '';
    let newClassPrice = '';

    if (item.discountValue) {
        newPrice = item.price - item.price * (item.discount / 100);
        newPriceDOM = `${ newPrice } руб.`;
        newClassPrice = 'strike';
    }

    const text = `<div class="item-name">${ item.name }</div>
                  <div class="item-category">${ item.category }</div>
                  <div class="item-description">${ item.description }</div>
                  <div class="item-bottom">
                        <div>
                            <div class="item-price">
                                <div class="item-price-text">Цена: </div>
                                <div class="item-price-number ${ newClassPrice }">${ item.price } руб.</div>
                                <div class="item-price-discount">${ newPriceDOM }</div>
                            </div>
                            <div class="item-count">Количество: ${ item.count }</div>
                        </div>
                        <div>
                            <div class="item-specials"></div>
                        </div>
                  </div>
                  <div class="item-close" data-index="${ itemIndex }">X</div>`;
    const newDiv = document.createElement('div');
    newDiv.innerHTML = text;
    newDiv.classList.add('item');
    listDOM.appendChild(newDiv);
}

if (nameDOM && categoryDOM && priceDOM && countDOM && discountYesDOM && discountNoDOM && discountNumberDOM && discountBodyDOM && specialsDOM && descriptionDOM && buttonAdd && listDOM && formDOM) {
    items = localStorage.getItem('items');
    items = JSON.parse(items);

    if (!items) {
        items = [];
    }

    for (const itemIndex in items) {
        const item = items[itemIndex];
        addItem(item, itemIndex);
    }

    discountYesDOM.addEventListener('change', function (event) {
        discountBodyDOM.style.setProperty('display', 'flex', 'important');
    });

    discountNoDOM.addEventListener('change', function (event) {
        discountBodyDOM.style.setProperty('display', 'none', 'important');
    });

    listDOM.addEventListener('click', function(event) {
        if (event.target.classList('item-close')) {
            console.log(event.target.dataset.index);

            items.splice(+event.target.dataset.index, 1)
            localStorage.setItem('items', JSON.stringify(items))
            listDOM.removeChild(event.target.parentNode);
            listDOM.innerText = '';

            for (const itemIndex in items) {
                const item = items[itemIndex];
                addItem(item, itemIndex);
        }
    });

    buttonAdd.addEventListener('click', function (event) {
        const name = nameDOM.value;
        const category = categoryDOM.value;
        const price = priceDOM.value;
        const count = countDOM.value;
        const description = descriptionDOM.value;
        let discountValue = document.querySelectorAll('input[name=discount]:checked');
        discountValue = discountValue[0].value;
        const discount = discountNumberDOM.value;
        // const specials =

        if (!name) {
            alert('Необходимо указать название товара');
            return;
        }

        if (!category) {
            alert('Необходимо указать категорию товара');
            return;
        }

        if (!price || price <= 0) {
            if (!price) {
                alert('Необходимо указать стоимость товара');
            }
            else {
                alert('Стоимость товара должна быть больше 0');
            }
            return;
        }

        if (!count || count <= 0) {
            if (!count) {
                alert('Необходимо указать количество товара');
            }
            else {
                alert('Количество товара должно быть больше 0');
            }
            return;
        }

        if (+discountValue) {
            if (!discount || discount <= 0) {
                if (!discount) {
                    alert('Необходимо указать скидку товара');
                }
                else {
                    alert('Скидка товара должна быть больше 0');
                }
                return;
            }
        }

        const object = {
            name,
            category,
            description,
            price,
            count,
            discountValue: +discountValue,
            discount,
        };
        addItem(object);
        items.push(object);
        localStorage.setItem('items', JSON.stringify(items));

        // titleDOM.value = '';
        // descriptionDOM.value = '';
        formDOM.reset();
    });
}
else {
    console.error('Нет какого-то элемента');
}