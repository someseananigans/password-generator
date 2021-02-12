



// create and if check to ensure that criterias are met

document.getElementById('generate').addEventListener('click', () => {
  // Show user available criterias
  let criteria = confirm(
    `Password Criterias Available: 
    Character Length
    UPPERCASE
    lowercase
    symbols
    numbers`)
  // Extra... If cancelled out of criteria page, criteria check doesn't start
  if (!criteria) {
    console.log('Password Generator was cancelled')
  }
  else {
    // Criteria Check
    let hasLength = prompt('How many characters needed?')
    while ((hasLength > 129) || (hasLength < 8)) {
      alert("Please choose from the number 8-160")
      hasLength = prompt('How many characters needed?')
    }
    let hasLowercase = confirm('Include lowercase characters?')
    let hasUppercase = confirm('Include uppercase characters?')
    let hasSymbols = confirm('Include symbols?')
    let hasNumbers = confirm('Include numbers?')
    // Variables
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '1234567890'
    const symbols = '!@#$%&*'
    let charSet = ''
    let generatedPassword = ''
    // Appends desired criterias to charSet
    if (hasLowercase) {
      charSet += lowercase
    }
    if (hasUppercase) {
      charSet += uppercase
    }
    if (hasNumbers) {
      charSet += numbers
    }
    if (hasSymbols) {
      charSet += symbols
    }
    // Randomly append characters from string to generatedPassword
    for (let i = 0; i < hasLength; i++) {
      generatedPassword += charSet[Math.floor(Math.random() * charSet.length)]
    }
    // Populate text area with generatedPassword
    document.getElementById('password').textContent = generatedPassword
  }
  })