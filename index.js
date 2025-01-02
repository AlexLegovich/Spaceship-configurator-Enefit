import { setInitialActiveColor } from './src/data/colors.js'
import { setPowerInputValue, setInitialPowerValue } from './src/data/power.js'
import setInitialActiveWarp from './src/data/warp.js'
import setInitialActivePackage from './src/data/package.js'
import { handleFloating } from './src/data/floating.js'
import { setBasePrice } from './src/data/base-price.js'

//Color selection

let currentColorButtonPrice = setInitialActiveColor()

function selectColor() {
  const inputs = document.querySelectorAll('input[name="color"]')
  const colorSummaryValue = document.querySelector(
    '#color-price .summary__item-sum'
  )
  colorSummaryValue.textContent = `+${currentColorButtonPrice}€`
  inputs.forEach((input) => {
    input.addEventListener('click', (e) => {
      currentColorButtonPrice = e.currentTarget.value
      colorSummaryValue.textContent = `+${currentColorButtonPrice}€`
    })
  })
}

selectColor()

//Power selection

let currentPowerButtonPrice = setInitialPowerValue()

function selectPower() {
  const powerSummaryValue = document.querySelector(
    '#power-price .summary__item-sum'
  )
  powerSummaryValue.textContent = `+${currentPowerButtonPrice}€`
  const powerInput = document.querySelector('#power')
  powerInput.addEventListener('input', function (e) {
    currentPowerButtonPrice = e.currentTarget.value
    powerSummaryValue.textContent = `+${currentPowerButtonPrice}€`
    setPowerInputValue()
  })
}

selectPower()

//warp selection

let currentWarpButtonPrice = setInitialActiveWarp()

function selectWarp() {
  const warpSummaryValue = document.querySelector(
    '#warp-price .summary__item-sum'
  )
  const inputs = document.querySelectorAll('input[name="warp"]')
  warpSummaryValue.textContent = `+${currentWarpButtonPrice}€`
  inputs.forEach((input) => {
    input.addEventListener('click', (e) => {
      currentWarpButtonPrice = e.currentTarget.value
      warpSummaryValue.textContent = `+${currentWarpButtonPrice}€`
    })
  })
}

selectWarp()

//package selection

let currentPackageButtonPrice = setInitialActivePackage()

function selectPackage() {
  const inputs = document.querySelectorAll('input[name="package"]')
  const packageSummaryValue = document.querySelector(
    '#package-price .summary__item-sum'
  )
  packageSummaryValue.textContent = `+${currentPackageButtonPrice}€`
  inputs.forEach((input) => {
    input.addEventListener('click', (e) => {
      currentPackageButtonPrice = e.currentTarget.value
      packageSummaryValue.textContent = `+${currentPackageButtonPrice}€`
    })
  })
}

selectPackage()

//Handle floating total on scroll

window.addEventListener('scroll', handleFloating)

//Set base price

setBasePrice()

//calculate totals

function calcTotal() {
  const totalValue = document.querySelector('.summary__total-sum')
  const totalValueFloating = document.querySelector('.summary__floating-sum')
  const basePriceValue = document.querySelector(
    '#base-price .summary__item-sum'
  )
  const colorPriceValue = document.querySelector(
    '#color-price .summary__item-sum'
  )
  const powerPriceValue = document.querySelector(
    '#power-price .summary__item-sum'
  )
  const warpPriceValue = document.querySelector(
    '#warp-price .summary__item-sum'
  )
  const packagePriceValue = document.querySelector(
    '#package-price .summary__item-sum'
  )

  const resultTotal =
    parseInt(basePriceValue.textContent) +
    parseInt(colorPriceValue.textContent) +
    parseInt(powerPriceValue.textContent) +
    parseInt(warpPriceValue.textContent) +
    parseInt(packagePriceValue.textContent)

  totalValue.textContent = `${resultTotal}€`
  totalValueFloating.textContent = `${resultTotal}€`
}

//observers

function setupObservers() {
  const basePriceValue = document.querySelector(
    '#base-price .summary__item-sum'
  )
  const colorPriceValue = document.querySelector(
    '#color-price .summary__item-sum'
  )
  const powerPriceValue = document.querySelector(
    '#power-price .summary__item-sum'
  )
  const warpPriceValue = document.querySelector(
    '#warp-price .summary__item-sum'
  )
  const packagePriceValue = document.querySelector(
    '#package-price .summary__item-sum'
  )

  const observerCallback = () => {
    calcTotal()
  }

  const observer = new MutationObserver(observerCallback)

  const observerConfig = { characterData: true, subtree: true, childList: true }

  observer.observe(basePriceValue, observerConfig)
  observer.observe(colorPriceValue, observerConfig)
  observer.observe(powerPriceValue, observerConfig)
  observer.observe(warpPriceValue, observerConfig)
  observer.observe(packagePriceValue, observerConfig)
}

// Initialize
calcTotal()
setupObservers()
