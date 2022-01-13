const Note = require('../models/note')
const User = require('../models/user')

const initialNotes = [
  {
    content: 'My Note - HTML is easy',
    date: new Date(),
    important: false
  },
  {
    content: 'My Note - Browser can execute only Javascript',
    date: new Date(),
    important: true
  }
]

const nonExistingId = async () => {
  const note = new Note({ content: 'willremovethissoon', date: new Date() })
  await note.save()
  await note.remove()

  return note._id.toString()
}

const notesInDb = async () => {
  const notes = await Note.find({})
  console.log('Notes in DB')
  console.log(notes)
  return notes.map(note => note.toJSON()) /*toJSON() Formats the object from DB _id => id and removes _v property */
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialNotes, nonExistingId, notesInDb, usersInDb
}