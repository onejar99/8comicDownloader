// https://github.com/animir/node-rate-limiter-flexible

const RateLimiterFlexible = require('rate-limiter-flexible');
const rateLimiter = new RateLimiterFlexible.RateLimiterMemory({
  points: 10,
  duration: 1, // Per second
});

const acquire = async () => {
    return await rateLimiter.consume("task", 1) // consume 1 points
        .then((rateLimiterRes) => {
            return "";
        })
        .catch((rateLimiterRes) => {
            // Not enough points to consume
            throw new Error('Oops! Not enough points to consume');
            //throw `Oops! Not enough points to consume`;
        });
}

module.exports = {
    acquire
};
