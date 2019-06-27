const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/stardb', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

module.exports = mongoose;

