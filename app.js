const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');


//middleware

app.use(bodyParser.json());
app.use(morgan('tiny'));


require('dotenv/config');

const api = process.env.API_URL;

app.get(`${api}/products`, (req, res) =>{

    const product = {
        id: 1,
        name: 'ogedengbe olumide',
        image: 'some url'
    }
    res.send(product);
})

app.post(`${api}/products`, (req, res) =>{
    const newProduct = req.body;
    console.log(newProduct);
        res.send(newProduct);
})


mongoose.connect(process.env.CONNECTION_STRING)
.then(()=> {
    console.log('database connection is ready...')

})
.catch((err)=> {
    console.log(err);
})

app.listen(3000, ()=>{
    console.log(api);
    console.log('server is running on http://localhost:3000');
})

