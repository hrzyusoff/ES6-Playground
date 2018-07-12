var dest = { master: 0 }
var src1 = { a: 1, b: 2 }
var src2 = { c: 3, d: 4 }

// Object assignation
var organization = Object.assign(dest, src1, src2)

a = 999
b = 'aaa999sd&dsjksaaasd'
c = '999'

// a === c // true
// a === c // false

// OBJECT
let books = new Object(); //let user = {} alt ways
// key: value
books = {
    author: "Hariz Yusoff",
    title: "Intro to Programming" 
}

// Adding key
books.versioning = 99
books.isBorrowed = true

let newkey = "page number"
books[newkey] = 200
// Delete Key
delete books.isBorrowed

console.log(typeof books)
console.log(books)


let userInput = prompt("What you want know about this book ?")
console.log(books[userInput])
// END OF OBJECT

// "Object in organization is "+organization, "Items in organization at D is "+organization.d, "Compare value (===) 999 and '999' is "+a === c, "Splitting a in aaa999sd&dsjksaaasd : "+b.split('a')
console.log(organization, organization.d, a === c, b.split('a')) //
console.log(typeof a, typeof String(a)) // identify type of variable 