const express = require('express');
const router = require('./router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Users', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

const app = express();
app.use(express.json());
app.use(router);
app.listen(3000,function(){
    console.log('App listening on port 3000!');
});

