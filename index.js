const express = require('express')
const cors = require('cors')
/* const mongoose = require('mongoose') */

const Note = require('./models/note')
const app = express()
app.use(express.json()) /*JSON parser for POST req*/
app.use(express.static('build'))
app.use(cors())

/*my custom middleware*/ 
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
} 
app.use(requestLogger)

let notes = [
    {
      id: 1,
      content: "Your tiny hands",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Your heart",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "Your perfect skin (i'm not jealous at all)",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
  ]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
   Note.find({}).then(n => {
    response.json(n)
    })  
})

app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id)
    .then(note => {
      if(note){
        response.json(note)
      }
      else {
        response.status(404).end()
      }
    })
    .catch(error => {
      console.log(error) 
      response.status(400).end(String({error: 'Wrong id format'}))
    }) 

})

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    
    response.status(204).end()
})

const generateId = () => {
  const maxId = notes.length > 0 
    ? Math.max(...notes.map(n => n.id))
    : 0
}


app.post('/api/notes', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })
})
 
const unknownEndpoint = (request, response) => {
  response.status(404).json({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})



/* const password=process.env.DB_PASSWORD
const url = process.env.DB_URL

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
const Note = mongoose.model('Note', noteSchema) */