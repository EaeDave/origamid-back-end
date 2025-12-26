import { createServer } from 'node:http'

const server = createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost')

  const cor = url.searchParams.get('cor')
  const tamanho = url.searchParams.get('tamanho')

  console.log(req.headers['content-type'])

  if (req.method === 'GET' && url.pathname === '/') {
    res.statusCode = 200
    res.end('Home.')
    console.log(req.method, req.url)
  } else if (req.method === 'POST' && url.pathname === '/produto') {
    res.statusCode = 201
    res.end(`Produtos: ${cor}, ${tamanho}`)
    console.log(req.method, req.url)
  } else {
    res.statusCode = 404
    res.end('Página não encontrada.')
  }
})

server.listen(3000, () => {
  console.log('Server: http://localhost:3000')
})
