import { setInitialActiveColor } from "./src/data/color-data.js"



//Color selection

let currentColorButtonPrice = setInitialActiveColor()

function selectColor() {

  const inputs = document.querySelectorAll('input[name="color"]')
  inputs.forEach((input) => {
    input.addEventListener('click', (e) => {
       currentColorButtonPrice = e.currentTarget.value
       console.log(currentColorButtonPrice);
    })
  })
}

selectColor()


