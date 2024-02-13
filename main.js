// CommonJs
// import axios from 'axios'
// CommonJs
// CommonJs
const fastify = require('fastify')({
    logger: true
})
const axios = require('axios')
// const fs = require('fs')
//
async function trst(){
    fastify.get('/products', async function (request, reply) {
    const data = {};

    try {
        const response = await axios.get('https://fakestoreapi.com/products');

        fs.writeFileSync('./products.json', JSON.stringify(response.data));
    }
    catch (err) {
        console.log(err.message, err.stack);
    }

    reply.send(data);
});

fastify.post('/product', async function (request, reply) {
    const data = {
        productId: null,
    };

    try {
        const products = fs.readFileSync('./products.json', { encoding: 'utf-8' });

        const products_json = JSON.parse(products);

        const last_product = products_json[products_json.length - 1];
        const last_product_id = last_product.id;

        const new_product_id = last_product_id + 1

        const new_product = {
            'id':          new_product_id,
            'title':       request.body.title,
            'price':       request.body.price,
            'description': request.body.description,
            'category':    request.body.category,
            'image':       request.body.image,
            'rating':      {
                'rate':  request.body.rating.rate,
                'count': request.body.rating.count,
            },
        };

        products_json.push(new_product)

        await fs.writeFileSync('./products.json', JSON.stringify(products_json));
    }
    catch (err) {
        console.log(err.message, err.stack);
    }

    reply.send(data);
});

fastify.put('/product', async function (request, reply) {
    const data = {
        productId:null
    }

    try {
        const products = fs.readFileSync('./products.json', { encoding: 'utf-8' });

        const products_json = JSON.parse(products);

        const new_product = {
            'id':          request.body.id,
            'title':       request.body.title,
            'price':       request.body.price,
            'description': request.body.description,
            'category':    request.body.category,
            'image':       request.body.image,
            'rating':      {
                'rate':  request.body.rating.rate,
                'count': request.body.rating.count,
            },
        };

        for (const index in products_json) {
            if (products_json[index].id === request.body.id) {
                products_json[index] = new_product;
            }
        }

        await fs.writeFileSync('./products.json', JSON.stringify(products_json));
    }
    catch (err) {
        console.log(err.message, err.stack);
    }

    reply.send(data)
});

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})
    console.log(5);
    await new Promise(v => setTimeout(v, 5000));

    trst()
}

trst()


// fastify.get('/products', async function (request, reply) {
//     const data = {};
//
//     try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//
//         fs.writeFileSync('./products.json', JSON.stringify(response.data));
//     }
//     catch (err) {
//         console.log(err.message, err.stack);
//     }
//
//     reply.send(data);
// });
//
// fastify.post('/product', async function (request, reply) {
//     const data = {
//         productId: null,
//     };
//
//     try {
//         const products = fs.readFileSync('./products.json', { encoding: 'utf-8' });
//
//         const products_json = JSON.parse(products);
//
//         const last_product = products_json[products_json.length - 1];
//         const last_product_id = last_product.id;
//
//         const new_product_id = last_product_id + 1
//
//         const new_product = {
//             'id':          new_product_id,
//             'title':       request.body.title,
//             'price':       request.body.price,
//             'description': request.body.description,
//             'category':    request.body.category,
//             'image':       request.body.image,
//             'rating':      {
//                 'rate':  request.body.rating.rate,
//                 'count': request.body.rating.count,
//             },
//         };
//
//         products_json.push(new_product)
//
//         await fs.writeFileSync('./products.json', JSON.stringify(products_json));
//     }
//     catch (err) {
//         console.log(err.message, err.stack);
//     }
//
//     reply.send(data);
// });
//
// fastify.put('/product', async function (request, reply) {
//     const data = {
//         productId:null
//     }
//
//     try {
//         const products = fs.readFileSync('./products.json', { encoding: 'utf-8' });
//
//         const products_json = JSON.parse(products);
//
//         const new_product = {
//             'id':          request.body.id,
//             'title':       request.body.title,
//             'price':       request.body.price,
//             'description': request.body.description,
//             'category':    request.body.category,
//             'image':       request.body.image,
//             'rating':      {
//                 'rate':  request.body.rating.rate,
//                 'count': request.body.rating.count,
//             },
//         };
//
//         for (const index in products_json) {
//             if (products_json[index].id === request.body.id) {
//                 products_json[index] = new_product;
//             }
//         }
//
//         await fs.writeFileSync('./products.json', JSON.stringify(products_json));
//     }
//     catch (err) {
//         console.log(err.message, err.stack);
//     }
//
//     reply.send(data)
// });
//
// // Run the server!
// fastify.listen({ port: 3000 }, function (err, address) {
//     if (err) {
//         fastify.log.error(err)
//         process.exit(1)
//     }
//     // Server is now listening on ${address}
// })







// const fastify = require('fastify')({
//     logger: true
// })
//
// // Declare a route
// fastify.get('/', function (request, reply) {
//     reply.send({ hello: 'world' })
// })
//
// fastify.post('/users', function (request, reply){
//     console.log(request.body);
//     reply.send({ succes: true});
// });
//
// fastify.post('/products', function (request, reply){
//     console.log(request.body);
//     reply.send({ succes: true});
// });
//
// fastify.get('/carts', async function (request, reply){
//     try {
//         const data = await  axios.get('https://fakestoreapi.com/carts')
//         reply.send(data.data)
//     }
//     catch(e){
//         console.log(e);
//     }
// })
//
// // Run the server!
// fastify.listen({ port: 3000 }, function (err, address) {
//     if (err) {
//         fastify.log.error(err)
//         process.exit(1)
//     }
//     // Server is now listening on ${address}
// })