import {Context, Hono} from 'hono'

const app = new Hono()

app.get('/', (c: Context) => {
    console.log('Hello world ' + new Date().toString())
    return c.text('Hello World')
})

Deno.serve({port: 8080}, app.fetch)
