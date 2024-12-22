const packages = [
  {
    name: 'Basic',
    price: 10,
  },
  {
    name: 'Sport',
    price: 100,
  },
  {
    name: 'Lux',
    price: 1500,
  },
]

const setPackagesData = (data) => {
  const packagesBlock = document.querySelector('#packages')
  const packagesBtns = packagesBlock.querySelectorAll('.select__button-main ')
  const btnInputs = document.querySelectorAll('#packages input')

  if (packagesBtns.length === 0) {
    packagesBlock.style.textAlign = 'center'
    packagesBlock.innerHTML = 'No packages selection at the moment'
    packagesBlock.style.fontSize = '12px'
    packagesBlock.style.fontStyle = 'italic'
    return
  }

  packagesBtns.forEach((btn, index) => {
    const btnTitle = btn.querySelector('.select__button-title')
    const btnValue = btn.querySelector('.select__button-value')
    btnTitle.textContent = data[index].name
    btnValue.textContent = `+${data[index].price}€`
  })
  btnInputs.forEach((input, index) => {
    return (input.value = data[index].price)
  })
}

setPackagesData(packages)

//Set first color to checked and return the value of that

const setInitialActivePackage = () => {
  const inputs = document.querySelectorAll('input[name="package"]')
  inputs[0].checked = true
  const initialColorCost = inputs[0].value
  return initialColorCost
}
setInitialActivePackage()



// bg color to selected button list

const setActiveListBg = () => {
  const inputs = document.querySelectorAll('input[name="package"]');
  const lists = document.querySelectorAll('.select__button-main > .list');
  lists[0].style.backgroundColor = '#D1F2B7'
  inputs.forEach((input, index) => {
    input.addEventListener('click', () => {
      lists.forEach(list => list.style.backgroundColor = '');
      if (input.checked) {
        lists[index].style.backgroundColor = '#D1F2B7';
      }
    });
  });
};

setActiveListBg();




// icon on list

const setListIcon = () =>{
  const listIcons =document.querySelectorAll('.list__item-icon')
  listIcons.forEach(icon => {
    icon.src = './img/Icon.svg'
  });
}
setListIcon()
export default setInitialActivePackage
