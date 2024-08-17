const ratingCard = document.querySelector('.rating-card')
const thanksCard = document.querySelector('.thanks-card')
const values = document.querySelectorAll('.value')
const submitBtn = document.querySelector('.submit-btn')
const submitResult = document.querySelector('.submited-result')
let selected = ''

values.forEach(value => {
  value.addEventListener('click', e => {
    removeSelectedClasses()
    selected = e.target.textContent
    e.target.classList.add('selected')
  })
})

submitBtn.addEventListener('click', () => {
  if (selected === '') return

  submitResult.textContent = `You selected ${selected} out od 5`
  ratingCard.style.display = 'none'
  thanksCard.style.display = 'flex'

  restart()
})

function removeSelectedClasses () {
  values.forEach(value => {
    value.classList.remove('selected')
  })
}

function restart () {
  setTimeout(() => {
    thanksCard.style.display = 'none'
    ratingCard.style.display = 'flex'
    removeSelectedClasses()
  }, 5000)
}
