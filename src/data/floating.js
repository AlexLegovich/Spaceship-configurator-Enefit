function isInViewport(element) {
  const rect = element.getBoundingClientRect()
  return rect.bottom > 0 && rect.top < window.innerHeight
}

function handleFloating() {
  const sectionSummary = document.querySelector('.summary')
  const sectionFloating = document.querySelector('.summary__floating')

  if (isInViewport(sectionSummary)) {
    sectionFloating.classList.add('hidden')
  } else {
    sectionFloating.classList.remove('hidden')
  }
}

export { handleFloating }
