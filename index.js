const express = require('express');
const app = express();
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route');

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(express.json()); //middleware for parsing json data from the request body
app.use(express.urlencoded({extended: false})); //middleware for parsing urlencoded data from the request body


app.use('/api/products', productRoute);


mongoose.connect('mongodb+srv://adnan73803:4mXSSOpZsDDgPePR@backenddb.mxdij.mongodb.net/crudApi?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log('Connected to the database!')
    app.listen(3000, () => {console.log('Server is running on port 3000');
    })
})
.catch(() => console.log("Connection failed!"));