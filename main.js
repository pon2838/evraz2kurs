// CommonJs
import axios from 'axios'
const fastify = require('fastify')({
    logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})

fastify.post('/users', function (request, reply){
    console.log(request.body);
    reply.send({ succes: true});
});

fastify.post('/products', function (request, reply){
    console.log(request.body);
    reply.send({ succes: true});
});

fastify.get('/carts', async function (request, reply){
    try {
        const data = await  axios.get('https://fakestoreapi.com/carts')
        reply.send(data.data)
    }
    catch(e){
        console.log(e);
    }
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})