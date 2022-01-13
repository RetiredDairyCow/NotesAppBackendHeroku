const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app) /*explicitly create express server. app = express()*/
const myPORT = config.PORT || 3001

server.listen(myPORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
