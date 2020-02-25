// CRUD Create, Read, Update, Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb') // destructuring of the 3 lines above

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID() // generate a new id
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
        
    // db.collection('users').insertOne({  // insertOne insterts 1 document to the db at a time
    //     name: 'Vikram',
    //     age: 26
    // },   (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([ // insertMany insterts multiple documents to the db
    //     {
    //         name: 'Jen',
    //         age: 28,
    //     },  {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([  //create new collection called tasks and instert many objects
    //     {
    //         description: 'task 1',
    //         completed: true
    //     }, {
    //         description: 'taske 2',
    //         completed: false
    //     }, {
    //         description: 'task 3',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })
})