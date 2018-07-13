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
let numbers = [3,41,35,442,5,145]
let userlog = ["zack", "ahmad", "salman"]
let books = new Object(); //let user = {} alt ways
// key: value
books = {
    author: "Hariz Yusoff",
    title: "Intro to Programming" 
}

// book_library()
// fruit_bag()
block_scope()


// TEST BLOCK SCOPE
function block_scope () {

}

// SORT
function sort_anything () {
    // sort it in ascending order, if ascending just switch position of a and b: b - a
    numbers.sort(function(a, b) {
        return a - b
    })
    console.log(numbers)
    console.log(userlog.sort())
    // sort like this will sort according to ascii code value, ikut leading front dia apa
    console.log(numbers.sort()) 
}

// BOOK
function book_library () {
    // Adding key
    books = block_scope()
    books.versioning = 99
    books.isBorrowed = true

    let newkey = "page number"
    books[newkey] = 200
    // Delete Key
    delete books.isBorrowed

    // console.log(typeof books)
    console.log(Object.keys(books)) // display it with order same as we set it
    console.log(books) // auto sort with leading alphabet

    // anything here is referring to key, thsi loop is to get keys in each object
    for (let anything in books) {
        console.log(anything)
    }

    // let systemPrompt = prompt("Add new properties for books ?")
    // books.dateBorrowed = systemPrompt

    // console.log(books.dateBorrowed)
}

// FRUIT
function fruit_bag () {
    // ASSIGN VALUE AND DISPLAY IT WITH CONDITIONAL FOR
    let fruit = prompt("Search any fruits in the bag ?");
    let bag = {
        apple: 5,
        orange: 2,
        [fruit]: 10 // if fruit equal to apple so apple: 10
    }

    if (bag[fruit] == bag.apple) {
        console.log("Horray, there is apples in the bag")
    } else {
        console.log("No "+fruit+" in bag :(");
        fruit = prompt("No "+fruit+" in the bag. Search another fruits ?");
    }
}

// USER
function test_user () {
    // // CREATE OBJ VALUE WITH PROMPT
    username = prompt("Enter name")
    userage = prompt("Enter age")

    let user = createUser(username, userage)

    function createUser (name, age) {
        return {
            a:name,
            b:age
        }
    }
    console.log(user)
}
// END OF OBJECT

// Comparison == , ===
// "Object in organization is "+organization, "Items in organization at D is "+organization.d, "Compare value (===) 999 and '999' is "+a === c, "Splitting a in aaa999sd&dsjksaaasd : "+b.split('a')
// console.log(organization, organization.d, a === c, b.split('a')) //
// console.log(typeof a, typeof String(a)) // identify type of variable 