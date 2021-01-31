// https://github.com/jhurliman/node-rate-limiter

const RateLimiter = require('limiter').RateLimiter;
// Allow 150 requests per hour (the Twitter search limit). Also understands
// 'second', 'minute', 'day', or a number of milliseconds
//var limiter = new RateLimiter(150, 'hour');
let limiter = new RateLimiter(10, 1 * 1000);
  // The default behaviour is to wait for the duration of the rate limiting 
  // that’s currently in effect before the callback is fired, 
  // but if you pass in true as the third parameter, 
  // the callback will be fired immediately with remainingRequests set to -1
  // (`new RateLimiter(150, 'hour', true); `)



const acquire = async (code, cbk) => {
    // Throttle requests
    limiter.removeTokens(1, function(err, remainingRequests) {
        cbk();
        // err will only be set if we request more than the maximum number of
        // requests we set in the constructor

        // remainingRequests tells us how many additional requests could be sent
        // right this moment
    });
}

module.exports = {
    acquire
};