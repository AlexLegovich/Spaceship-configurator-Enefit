const colors = [
  {
    name: 'Snow',
    price: 0,
    swatch: 'linear-gradient(141deg, #f9f9f9 0%, #e4e5e8 100%)',
    image: '',
  },
  {
    name: 'Volcano',
    price: 100,
    swatch: ' linear-gradient(141deg, #ff7a00 0%, #994900 100%)',
    image: '',
  },
  {
    name: 'Sky',
    price: 300,
    swatch: 'linear-gradient(141deg, #7fcffc 0%, #0e7af8 100%)',
    image: '',
  },
]

//Assign  data to color btns

const setColorData = (data) => {
  const colorBlock = document.querySelector('#colors')
  const colorBtns = colorBlock.querySelectorAll('#colors .select__button-main ')
  const btnInputs = document.querySelectorAll('#colors input')

  if (colorBtns.length === 0) {
    colorBlock.innerHTML = 'No color selection at the moment'
    colorBlock.style.textAlign = 'center'
    colorBlock.style.fontSize = '12px'
    colorBlock.style.fontStyle = 'italic'
    return
  }

  colorBtns.forEach((btn, index) => {
    const btnTitle = btn.querySelector('.select__button-title')
    const btnValue = btn.querySelector('.select__button-value')
    const btnSwatch = btn.querySelector('.select__button-swatch')
    btnSwatch.style.background = data[index].swatch
    btnTitle.textContent = data[index].name
    btnValue.textContent = `+${data[index].price}€`
  })
  btnInputs.forEach((input, index) => {
    return (input.value = data[index].price)
  })
}

setColorData(colors)

//Ste first color to checked and return the value of that

const setInitialActiveColor = () => {
  const inputs = document.querySelectorAll('input[name="color"]')
  inputs[0].checked = true
  const initialColorCost = inputs[0].value
  return initialColorCost
}

setInitialActiveColor()

export {setInitialActiveColor}


