const express = require('express');
const app = express();
const path = require('path');
const mongo = require('mongoose');
const routes = require("./routes")
const port = 3001;

const sDbURI = 'mongodb://localhost/test';
mongo.connect(sDbURI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongo.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', () => {

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
app.use(express.json());
app.use('/api', routes);

app.use('/poc', express.static(path.join(__dirname, '../poc'))); 
app.use('/', express.static(path.join(__dirname, '../www/build'))); 

app.listen(port, () => {
    console.log(`Server start at ${port}`);
});

});
