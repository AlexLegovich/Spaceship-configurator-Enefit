const setRangeStyle = () => {
  const fillColor = '#007E30'
  const emptyColor = '#DFE0E3'

  const rangeInput = document.querySelector('#power')

  const basicRangeStyle = (input) => {
    const percent =
      (100 * (input.value - input.min)) / (input.max - input.min) + '%'
    input.style.background = `linear-gradient(to right, ${fillColor}, ${fillColor} ${percent}, ${emptyColor} ${percent})`
  }

  basicRangeStyle(rangeInput)

  rangeInput.addEventListener('input', function () {
    basicRangeStyle(rangeInput)
  })
}
setRangeStyle()



const setInitialPowerValue = () => {
  const rangeInput = document.querySelector('#power')
  return rangeInput.value
}

setInitialPowerValue()

const setPowerInputValue = () => {
  const rangeInput = document.querySelector('#power')
  const powerPrice = document.querySelector('#power-price ')
  powerPrice.textContent = `+ ${rangeInput.value} €`
}
setPowerInputValue()


export {setInitialPowerValue, setPowerInputValue}
