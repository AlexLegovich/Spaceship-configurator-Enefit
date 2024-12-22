const warp = [
  {
    name: 'YES',
    price: 110,
  },
  {
    name: 'NO',
    price: 1000,
  },
]



const setWarpData = (data) => {
  const warpBlock = document.querySelector('#warp')
  const warpBtns = warpBlock.querySelectorAll('#warp .select__button-main ')
  const btnInputs = document.querySelectorAll('#warp input')

  if (warpBtns.length === 0) {
    warpBlock.style.textAlign = 'center'
    warpBlock.innerHTML = 'No warp drive selection at the moment'
    warpBlock.style.fontSize = '12px'
    warpBlock.style.fontStyle = 'italic'
    return
  }

  warpBtns.forEach((btn, index) => {
    const btnTitle = btn.querySelector('.select__button-title')
    const btnValue = btn.querySelector('.select__button-value')
    btnTitle.textContent = data[index].name
    btnValue.textContent = `+${data[index].price}€`
  })
  btnInputs.forEach((input, index) => {
    return (input.value = data[index].price)

  })
}

setWarpData(warp)

//Set first color to checked and return the value of that

const setInitialActiveWarp = () => {
  const inputs = document.querySelectorAll('input[name="warp"]')
  inputs[0].checked = true
  const initialColorCost = inputs[0].value
  return initialColorCost
}
setInitialActiveWarp()



export default setInitialActiveWarp