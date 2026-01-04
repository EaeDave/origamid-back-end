const getResponse = await fetch('http://localhost:3000')
const _bodyGetResponse = await getResponse.text()
// console.log(bodyGetResponse)

const postResponse = await fetch('http://localhost:3000/produto?cor=azul&tamanho=g', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'John Doe',
    password: '123456',
  }),
})

const bodyPostResponse = await postResponse.text()
console.log(bodyPostResponse)
