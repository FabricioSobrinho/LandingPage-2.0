function productsLoad(url) {
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let products = document.querySelector(`.show`)
      data.map(function (product) {
        //Map percorre um array em js e o valor de cada posição atual é atribuido em uf
        return (products.innerHTML += `
                  <div class="ling">
                  <p><img src="${product.image_link}"/></p>
                  <p>${product.name}<br>R$ ${product.price}</p>
                  </div>`)
      })
    })
    .catch(function (error) {
      console.log(error)
    })
}
productsLoad(
  "https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=Eyeliner",
  "lapis"
)
