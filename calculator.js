const allNumbers = document.querySelectorAll('.number')
const allOperators = document.querySelectorAll('.operator')
const equal = document.querySelector('.equal')
const screenDisplay = document.querySelector('.screen-display')
const currentValueDisplay = document.querySelector('.current-value-display')
const previousValueDisplay = document.querySelector('.previous-value-display')
const backspace = document.querySelector('.backspace')

let currentValue = ''
let previousValue = ''
let op = ''


// numbers clicks
allNumbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    console.log(e.target.textContent)
    let currentNumTarget = e.target.textContent
    handlingNumber(currentNumTarget)
    currentValueDisplay.textContent = currentValue
  })
})

// operator clicks
allOperators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    console.log(e.target.textContent)
    let currentOperatorTarget = e.target.textContent
    handlingOperator(currentOperatorTarget)
    previousValueDisplay.textContent = previousValue + ' ' + op
    currentValueDisplay.textContent = ''
  })
})

// equal button clicks
equal.addEventListener('click', () => {
  operate()
  previousValueDisplay.textContent += ' ' + currentValue
  currentValueDisplay.textContent = previousValue
  currentValue = previousValue
  previousValue = ''
})


backspace.addEventListener('click', () => {
  if (screenDisplay.textContent != '') {
    let fullText = screenDisplay.textContent
    console.log(fullText.length)
  }
})


function operate() {
  // getting Operation
  // strings to convert to numbers
  previousValue = parseInt(previousValue)
  currentValue = parseInt(currentValue)

  switch (op) {
    case '/':
      previousValue /= currentValue
      break

    case 'X':
      previousValue *= currentValue
      break

    case '+':
      previousValue += currentValue
      break

    case '-':
      previousValue -= currentValue
      break
  }

  console.log(previousValue)
}


function handlingNumber(num) {
  currentValue += num
}


function handlingOperator(operator) {
  op = operator
  previousValue = currentValue
  currentValue = ''
}