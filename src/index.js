const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
mongoose.connect("mongodb+srv://victorsouza02:14782008@cluster0-cutes.mongodb.net/starwarsapi?retryWrites=true&w=majority", {
    useNewUrlParser : true,
    useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(routes);

app.listen(3000);