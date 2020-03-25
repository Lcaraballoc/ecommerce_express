const express = require('express');
const app = express();
const path = require('path')
const productsRouter = require('./routes/productsRouter')


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");    //Including pug template engine

app.use('/products', productsRouter)

const server = app.listen(8000, function () {
    console.log(`Listening http://localhost:${server.address().port}`)
})