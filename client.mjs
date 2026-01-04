const getResponse = await fetch('http://localhost:3000')
const _bodyGetResponse = await getResponse.text()
// console.log(bodyGetResponse)

const postResponse = await fetch('http://localhost:3000/produto?cor=azul&tamanho=g', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
})
const bodyPostResponse = await postResponse.text()
console.log(bodyPostResponse)
