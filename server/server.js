const express = require('express');
const app = express();
const path = require('path');
const port = 3001;

app.get('/api/*', (req,res) => {
    res.send(`Hello WOrld:${req}`);
});

app.use('/poc', express.static(path.join(__dirname, '../poc'))); 
app.use('/', express.static(path.join(__dirname, '../www/build'))); 

app.listen(port, () => {
    console.log(`Server start at ${port}`);
});
