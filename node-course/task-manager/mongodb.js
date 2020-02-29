// CRUD Create(insert/insertMany), Read(findOne/find), Update(updateOne/updateMany), Delete(deleteOne, deleteMany)

// const mongodb = require('mongodb')         \
// const MongoClient = mongodb.MongoClient     --These 3 lines can be combined to 1 below
// const ObjectID = mongodb.ObjectID          /

const {MongoClient, ObjectID} = require('mongodb') // this is destructured from the above 3 lines

const connectionURL = 'mongodb://127.0.0.1:27017' // use the 127... instead of localhost because localhost causes some problems
const databaseName = 'task-manager' // creates the name of the database

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to db')
    }

    const db = client.db(databaseName)
    
   db.collection('users').deleteMany({age: 49}).then((result) => 
    {console.log('Users deleted')}).catch ((error) => 
    {console.log('something went wrong')})

})