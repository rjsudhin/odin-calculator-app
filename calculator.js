const screenDisplay = document.querySelector('.screen-display')
const currentDisplay = document.querySelector('.current-display')
const previousDisplay = document.querySelector('.previous-display')

const clear = document.querySelector('.clear-btn')
const allNumber = document.querySelectorAll('.number')
const allOperator = document.querySelectorAll('.operator')
const equal = document.querySelector('.equal')
const decimal = document.querySelector('.decimal')

let currentValue = ''
let previousValue = ''
let operator = ''

// clear button clicks
clear.addEventListener('click', () => {
  previousValue = ''
  currentValue = ''
  operator = ''
  previousDisplay.textContent = previousValue
  currentDisplay.textContent = currentValue
})


// numbers clicks
allNumber.forEach((number) => {
  number.addEventListener('click', (e) => {
    handlingNumber(e.target.textContent)
    currentDisplay.textContent = currentValue
  })
})

// operators clicks
allOperator.forEach((op) => {
  op.addEventListener('click', (e) => {
    handlingOperator(e.target.textContent)
    previousDisplay.textContent = previousValue + ' ' + operator
    currentDisplay.textContent = currentValue
  })
})

// deciaml button clicks
decimal.addEventListener('click', (e) => {
  if (!currentValue.includes('.')) {
    currentValue += '.'
  }
})

// equal button click 
equal.addEventListener('click', () => {
  operate()
  previousDisplay.textContent += ' ' + currentValue
  currentDisplay.textContent = previousValue
})

function operate() {
  // conevert to numbers
  previousValue = parseFloat(previousValue)
  currentValue = parseFloat(currentValue)

  // getting the operations
  switch (operator) {
    case '/': 
      previousValue /= currentValue
      break

    case 'X':
      previousValue *= currentValue
      break

    case '-': 
      previousValue -= currentValue
      break

    case '+':
      previousValue += currentValue
      break
  }

  previousValue = roundMaximum(previousValue)
  
  // convert to strings
  previousValue = previousValue.toString()
  currentValue = currentValue.toString()

  console.log(previousValue)

}

function roundMaximum(num) {
  return Math.round(num * 1000) / 1000
}

function handlingNumber(num) {
  currentValue += num
}

function handlingOperator(op) {
  operator = op
  previousValue = currentValue
  currentValue = ''
}