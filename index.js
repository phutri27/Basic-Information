const { createServer } = require('node:http')
const fs = require('node:fs/promises');

const server = createServer((req, res) => {
    async function renderData(code, link){
        try{
            const data = await fs.readFile(link)
            res.statusCode = code
            res.setHeader('Content-Type', 'text/html')
            res.write(data)
            res.end()
        } catch (err){
            console.log(err)
        }
    }

    if (req.url === '/'){
        renderData(200, './templates/index.html')
    }
    else if (req.url === '/contact-me'){
        renderData(200, './templates/contact-me.html')
    }
    else if (req.url === '/about'){
        renderData(200, './templates/about.html')
    }
    else{
        renderData(404, './templates/404.html')
    }

})

server.listen(8080)


