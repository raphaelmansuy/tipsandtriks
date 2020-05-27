

const benjaminFranklinQuote = "Tell me and I forget. Teach me and I remember. Involve me and I learn."

// Declaration of regular expression 
const regEx = / me /g


const newQuote = benjaminFranklinQuote.replace(regEx,str => str.toUpperCase())


console.log(newQuote)

