function setBasePrice() {
  const BASE_PRICE = 1000
  const basePriceValue = document.querySelector(
    '#base-price .summary__item-sum '
  )
  basePriceValue.textContent = `${BASE_PRICE}€`
}

setBasePrice()


export {setBasePrice}