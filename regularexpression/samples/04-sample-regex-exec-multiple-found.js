
const benjaminFranklinQuote = "Tell me and I forget. Teach me and I remember. Involve me and I learn."

// Declaration of regular expression using the literal method and the global parameter g
// let regExp = new RegExp("me","g")
let regExp = /me/g // g is a special parameter that multiple call to the RegEx


// First call
let result = regExp.exec(benjaminFranklinQuote)

// Display nicely on the console result
console.dir(result, {depth: null})

// Second Call
let result2 = regExp.exec(benjaminFranklinQuote)

// Display nicely on the console result2
console.dir(result2, {depth: null})
