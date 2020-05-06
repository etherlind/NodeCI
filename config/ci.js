require('dotenv').config()

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI_CI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    redisUrl: process.env.REDIS_URL
};
