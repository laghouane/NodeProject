const express = require('express');
const itemsRouter = require('./routers/items');
const usersRouter = require('./routers/users');
const orderRouter = require('./routers/order');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express()


mongoose.connect(process.env.dburl)
.then(conn => console.log("Connected"))
.catch(err => console.log)

app.use(express.json())

// using routers
app.use('/api/v1/items', itemsRouter)

app.use('/api/v1/users', usersRouter)

app.use('/api/v1/orders', orderRouter)



app.listen(process.env.port)