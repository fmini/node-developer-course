//Standard function
const square = function (x) {
  return x*x
  }
console.log(square(3))

//Long arrow function 
const squareArrowLong = (y) => {
  return y*y
}
console.log(squareArrowLong(4))

//Short arrow function (when simply returning a single value)
const squareArrow = (z) => z*z
console.log(squareArrow(5))

//Standard function binds the this keyword to it's parent 
const event = {
  name: 'Birthday Party',
  printGuestList: function () {
    console.log(`Guest list for ${this.name}`) //prints Guest list for Birthday Party
  }
}
event.printGuestList()

//Arrow functions DO NOT bind the this keyword to it's parent
const event2 = {
  name: 'Christmas Party',
  printGuestList2: () => {
    console.log(`Guest list for ${this.name}`) //prints Guest list for undefined
  }
}
event2.printGuestList2()

//Short standard function (just remove the function keyword) does bind the this keyword
const event3 = {
  name: 'Halloween Party',
  printGuestList() {
    console.log(`Guest list for ${this.name}`) //prints Guest list for Halloween Party
  }
}
event3.printGuestList()