const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app) /*explicitly create server*/
const myPORT = config.PORT || 3001

server.listen(myPORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})



/* const express = require('express')
const app = express()
const cors = require('cors')

const Note = require('./models/note')
app.use(express.json()) /*JSON parser for POST req
app.use(express.static('build'))
app.use(cors())


const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}
app.use(requestLogger)

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  Note.find({}).then(n => {
    response.json(n)
  })
})

app.get('/api/notes/:id', (request, response, next) => {
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
      next(error)
      console.log(error)
    })
})

app.delete('/api/notes/:id', (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then(result => {
      if(result) {
        response.status(204).end()
      }
      else {
        response.status(404).end()
      }
    })
    .catch(error => next(error)) /*for any unexpected error
})

app.post('/api/notes', (request, response, next) => {
  const body = request.body

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  })

  note
    .save()
    .then(savedNote => {
      return response.json(savedNote.toJSON())
    })
    .then(savedAndFormattedNoted => {
      response.json(savedAndFormattedNoted)
    })
    .catch(error => next(error))

})

app.put('/api/notes/:id', (request, response, next) => {
  const body = request.body

  const note = {
    content: body.content,
    important: body.important,
  }

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})


const unknownEndpoint = (request, response) => {
  response.status(404).json({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformmated id' })
  }
  else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  next(error) /*if not a cast error, the middleware passes the error to the default
  express error handler
}
app.use(errorHandler)



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
 */