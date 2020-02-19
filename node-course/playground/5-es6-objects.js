// Object property shorthand

const name = 'Frank'
const userAge = 49

const user = {
  name,
  age: userAge,
  location: 'Avondale'
}

console.log(user)

// Object destructuring

const product = {
  label: 'red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
  //rating: 2    //if this was not commented, then rating would equal 2. Since rating is not set now, it defaults to 5
                // because of the rating = 5 in the const { } deconstrucuring down below
}

// const label = product.label
// const stock = product.stock

const {label: productLabel, stock, rating = 5} = product //these variables grab the value from the product object above
console.log(productLabel) //this was product.label renamed to in the line above
console.log(stock)
console.log(rating) //this variable is not even set in the product object but is created as undefined here (no error)

const transaction = (type, {label, stock}) => { //since we passed the product object, we can destructure in line inside {}
  console.log(type, label, stock)
}

transaction('order', product) //this is referencing the product object