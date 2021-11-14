const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}


else {
    const password = process.argv[2]

    const url =
    `mongodb+srv://shugu:${password}@mymongodb.z3yzd.mongodb.net/phonebookappDB?retryWrites=true&w=majority`

    mongoose.connect(url)

    const phonebookSchema = new mongoose.Schema({
    name: String,
    number: Number,
    })

    const Person = mongoose.model('Person', phonebookSchema)

    const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
    })

    if(process.argv.length === 3){
        console.log("Phonebook:")
        Person.find({}).then(result => {  
            result.forEach(e => {
              console.log(e)
            })
            mongoose.connection.close()
      })
    }

    else{
        person.save().then(result => {
            console.log('entry saved!' , result)
            mongoose.connection.close()
        })
    }
}