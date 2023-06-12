import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'
import { Server } from 'http'

let server: Server

process.on('uncaughtException', () => {
  errorLogger.error('uncaught exception is detected..')
  process.exit(1)
})

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connected successfully')

    server = app.listen(config.port, () => {
      logger.info(`app is listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('database failed to connect', err)
  }

  process.on('unhandledRejection', error => {
    errorLogger.error(
      'unhandled rejection detected, we are closing our server....'
    )
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

main()

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
