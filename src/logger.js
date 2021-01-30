const winston = require('winston');
const { format } = require('logform');
// refer to https://github.com/winstonjs/winston#quick-start

/**
 const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
    };
 */
const logger = winston.createLogger({
    level: 'info',

    // EXample: `info: savePath=[./output/7839/0370/0370_019.jpg] Done! {"service":"user-service"}`
    //format: winston.format.json(),
    //defaultMeta: { service: 'user-service' },

    format: winston.format.combine(
        format.colorize(),
        format.timestamp(),
        //format.align(),
        format.printf(info => `${info.timestamp} [${info.level}] ${info.message}`)
      ),

    // format: combine(
    //     timestamp(),
    //     prettyPrint()
    //   ),

    transports: [
      //
      // - Write all logs with level `error` and below to `error.log`
      // - Write all logs with level `info` and below to `combined.log`
      //
      //new winston.transports.File({ filename: 'error.log', level: 'error' }),
      //new winston.transports.File({ filename: 'combined.log' }),
      new winston.transports.Console(),
    ],
  });

  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  //
  //if (process.env.NODE_ENV !== 'production') {
    // logger.add(new winston.transports.Console({
    //   format: winston.format.simple(),
    // }));
  //}

const info = (msg) => {
    logger.info(msg);
    //console.log(msg);
}

const error = (msg) => {
    logger.error(msg);
}

const debug = (msg) => {
    logger.debug(msg);
}

module.exports = {
    info, error, debug
};