import { createServer } from 'node:http'

const server = createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200
    res.end('Home.')
    console.log(req.method, req.url)
  } else if (req.method === 'POST' && req.url === '/produto') {
    res.statusCode = 201
    res.end('Produto criado.')
    console.log(req.method, req.url)
  } else {
    res.statusCode = 404
    res.end('Página não encontrada.')
  }
})

server.listen(3000, () => {
  console.log('Server: http://localhost:3000')
})
