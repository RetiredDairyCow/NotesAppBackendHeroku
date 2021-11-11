const express = require('express')

const app = express()
app.use(express.json()) /*JSON parser for POST req*/

const cors = require('cors')
app.use(cors())
app.use(express.static('build'))


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
      content: "Your cheeks (front and back)",
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
      content: "Your butt",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
  ]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)

    const note = notes.find(note => note.id === id)
    if (note)
        response.json(note)
    
    else
        response.status(404).end()
    
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
  
  if (!body.content){
    return response.status(400).json({
      error : 'content missing'
    })
  }
  const  note = { 
    id: Math.floor(Math.random() * 100),
    content: body.content,
    date: new Date(),
    important: body.important || false
     /* generateId() */
  }
   
    notes = notes.concat(note)
    response.json(note)
})
 
const unknownEndpoint = (request, response) => {
  response.status(404).json({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})