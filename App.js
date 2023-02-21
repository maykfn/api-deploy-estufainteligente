const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.set('strictQuery', false);

//Forma de ler JSON // middlewares
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

//Rotas da API
const plantsRoutes = require('./routes/plantsRoutes')
app.use('/plants', plantsRoutes)

//entregar uma porta

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@estufa.odwvbgg.mongodb.net/dadosplantas?retryWrites=true&w=majority`)
.then(() => {
  app.listen(3000)
  console.log('Conectamos ao MongoDB!')
})
.catch((err)=> console.log(err))
