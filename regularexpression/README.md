# A first introduction to Regular Expression in Javascript

A regular expression is a sequence of character that represents a search pattern.

## How to declare a regular expression in Javascript

### Declaring a regular expression using the constructor method

```javascript
const benjaminFranklinQuote =
  "Tell me and I forget. Teach me and I remember. Involve me and I learn."

// Declaration of a regular expression using the constructor method
// We want to search the following sequence of characters: ['l','e','a','r','n']
const regExp = new RegExp("learn")

// We test if we can find the pattern
const result = regExp.test(benjaminFranklinQuote)

console.log(result)
```

Result: **true**

### Declaring a regular expression using the literal method

```Javascript

const benjaminFranklinQuote = "Tell me and I forget. Teach me and I remember. Involve me and I learn."

// Declaration of a regular expression using the literal method
const regExp = /learn/

// We test if we can find the pattern
// the test method returns true or false if the string passed a argument contains the pattern.
const result = regExp.test(benjaminFranklinQuote)

console.log(result)

```

Result: **true**

### Using the exec method to display more information about the matches

```javascript

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

```

The result:

```javascript
[
  'me',
  index: 5,
  input: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
  groups: undefined
]
[
  'me',
  index: 28,
  input: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
  groups: undefined
]

```

The pattern 'me' is found at the position index 5 and 28.

### Replacing a pattern in a string using a regular expression

```javascript


const benjaminFranklinQuote = "Tell me and I forget. Teach me and I remember. Involve me and I learn."

// Declaration of regular expression 
const regEx = / me /g

// Using an arrow function to convert each match with uppecase
const newQuote = benjaminFranklinQuote.replace(regEx,str => str.toUpperCase())


console.log(newQuote)

```

Results:

```
Tell ME and I forget. Teach ME and I remember. Involve ME and I learn.
```


