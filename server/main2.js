const url = require("url");
const fastify = require('fastify')({
    logger: true
})

fastify.get('/hello2', async (request, reply) => {
    return { hello: 'world' }
})
const data = await axios.get( url: 'https://fakestoreapi.com/products')
    fetch('https://fakestoreapi.com/products',{
        method:"POST",
        body:JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
})

catch (e) {
        console.log(e)
    }
    reply.send(data.data);
})

/**
 * Run the server!
 */
const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()