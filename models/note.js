const mongoose = require('mongoose')


const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: 5,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  important: Boolean,
  user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})
/**The 'toJSON' method is modified to format the objects returned
 * by mongoose. 'toJSON()' is a method of the schema. this 
 * has to be called on individual objects and not on all objects
 */
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)
