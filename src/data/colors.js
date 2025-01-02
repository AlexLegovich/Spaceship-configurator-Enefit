const colors = [
  {
    name: 'Snow',
    price: 0,
    swatch: 'linear-gradient(141deg, #f9f9f9 0%, #e4e5e8 100%)',
    image: './img/snow.png',
  },
  {
    name: 'Volcano',
    price: 100,
    swatch: ' linear-gradient(141deg, #ff7a00 0%, #994900 100%)',
    image: './img/volcano.png',
  },
  {
    name: 'Sky',
    price: 100,
    swatch: 'linear-gradient(141deg, #7fcffc 0%, #0e7af8 100%)',
    image: './img/sky.png',
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
    input.setAttribute('data-image', data[index].image); 
    return (input.value = data[index].price)

  })
}

setColorData(colors)

//Set first color to checked and return the value of that

const setInitialActiveColor = () => {
  const inputs = document.querySelectorAll('input[name="color"]')
  inputs[0].checked = true
  const initialColorCost = inputs[0].value
  return initialColorCost
}
setInitialActiveColor()


const setInitialColorImage = (data) => {
  const colorImage = document.querySelector('.summary__image');
  const colorImageMobile = document.querySelector('.summary__image-mobile');
  colorImage.src = data[0].image
  colorImageMobile.src = data[0].image
} 
setInitialColorImage(colors)

const assignImageToInputs = () => {
  const inputs = document.querySelectorAll('input[name="color"]');
  const colorImage = document.querySelector('.summary__image');
  const colorImageMobile = document.querySelector('.summary__image-mobile');
  inputs.forEach((input) => {
    input.addEventListener('change', (e) => {
      const selectedImage = e.target.getAttribute('data-image');
      colorImage.src = selectedImage; 
    });
  });
  inputs.forEach((input) => {
    input.addEventListener('change', (e) => {
      const selectedImage = e.target.getAttribute('data-image');
      colorImageMobile.src = selectedImage; 
    });
  });
}
assignImageToInputs()

export { setInitialActiveColor }
