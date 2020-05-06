// how long it should wait until failing the test
jest.setTimeout(30000);
// just requiring it so mongoose knows where User is
require('../models/User');

const mongoose = require('mongoose');
const keys = require('../config/keys');

// mongoose doesn't use Promises out of the box
// so we're telling it to use Node Promise implementation
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/blog_ci', { useNewUrlParser: true });
