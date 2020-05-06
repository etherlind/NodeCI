require('dotenv').config()

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI_CI,
    cookieKey: process.env.COOKIE_KEY,
    redisUrl: process.env.REDIS_URL
};
