import { createServer } from 'node:http'

const frase1 = Promise.resolve('Olá ')
const frase2 = Promise.resolve('mundo!')
const frasesPromises = [frase1, frase2]
console.log(frasesPromises)
const frases = []

for await (const frase of frasesPromises) {
  console.log(frase)
  frases.push(frase)
}

// console.log(frases.join(''))

const part1 = Buffer.from('Olá ')
const part2 = Buffer.from('mundo!')
const final = Buffer.concat([part1, part2])
console.log(final.toString())

const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost')

  const cor = url.searchParams.get('cor')
  const tamanho = url.searchParams.get('tamanho')
  // console.log(req.headers['content-type'])

  const chunks = []

  for await (const chunk of req) {
    console.log(chunk.toString())
    chunks.push(chunk)
  }
  const body = Buffer.concat(chunks).toString('utf-8')

  let parsedBody = null
  if (body.trim()) {
    try {
      parsedBody = JSON.parse(body)
      console.log(parsedBody)
    } catch (error) {
      console.log('Erro ao parsear JSON:', error.message)
    }
  }

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
