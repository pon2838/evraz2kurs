const axios = require('axios')

async function getUser() {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data);

        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            console.log(response.data);
        }
     catch (error)
{
    console.error(error.message);

}

        /**
         * функция для добавления нового пользователя
         * @param {Object} userInfo
         * @param {Object} userBio
         * @param {} userAddress
         * @param
         * @param
         *
         *
         * @returns {Promise<void>}
         */


async function addNewUser(userInfo, userBio, userAddress) {
            try {
                const url = ('https://fakestoreapi.com/users')
            }
        }
}








        // 1отдельная функция которая будет полчуать все продукты
        // 2один продукт по id
        // добав продукт должна принимать данные которые необходимы для созд продукт и id
        // обнов продукт id
        // функцияя которая сделает опрос на получение всех продуктов
        //функ на удал прод id и проверка что прод удалился
        // рандомно берёт продукт и удаляеь его