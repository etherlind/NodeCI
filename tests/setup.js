// how long it should wait until failing the test
jest.setTimeout(15000);
// just requiring it so mongoose knows where User is
require('../models/User');

const mongoose = require('mongoose');
const keys = require('../config/keys');

// mongoose doesn't use Promises out of the box
// so we're telling it to use Node Promise implementation
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
