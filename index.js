import { setInitialActiveColor } from "./src/data/colors.js"
import {setPowerInputValue,setInitialPowerValue} from "./src/data/power.js"
import  setInitialActiveWarp  from "./src/data/warp.js"
import setInitialActivePackage from "./src/data/package.js"



//Color selection

let currentColorButtonPrice = setInitialActiveColor()

function selectColor() {
  const inputs = document.querySelectorAll('input[name="color"]')
  inputs.forEach((input) => {
    input.addEventListener('click', (e) => {
       currentColorButtonPrice = e.currentTarget.value
    })
  })
}


selectColor()


//Power selection

let currentPowerButtonPrice = setInitialPowerValue()

function selectPower() {
  const powerInput = document.querySelector('#power');
  powerInput.addEventListener('input', function(e){
    currentPowerButtonPrice = e.currentTarget.value
    setPowerInputValue()
  })
}

selectPower()


let currentWarpButtonPrice = setInitialActiveWarp()

function selectWarp() {
  const inputs = document.querySelectorAll('input[name="warp"]')
  inputs.forEach((input) => {
    input.addEventListener('click', (e) => {
       currentWarpButtonPrice = e.currentTarget.value
    })
  })
}


selectWarp()



let currentPackageButtonPrice = setInitialActivePackage()


function selectPackage() {
  const inputs = document.querySelectorAll('input[name="package"]')
  inputs.forEach((input) => {
    input.addEventListener('click', (e) => {
       currentPackageButtonPrice = e.currentTarget.value
    })
  })
}

selectPackage()




