const getResponse = await fetch('http://localhost:3000')
const bodyGetResponse = await getResponse.text()
console.log(bodyGetResponse)

const postResponse = await fetch('http://localhost:3000/produto', {
  method: 'POST',
})
const bodyPostResponse = await postResponse.text()
console.log(bodyPostResponse)
