const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()


mongoose.set('strictQuery', false);

//Forma de ler JSON // middlewares
app.use(
  express.urlencoded({
    extended: true,
  }),
)

//Utilizar o CORS
app.use(cors());

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




//mongodb+srv://mayk442:060820000@apicluster.8nhsoev.mongodb.net/bancodaapi?retryWrites=true&w=majority