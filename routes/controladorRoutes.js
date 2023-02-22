const router = require('express').Router()

const Controlador = require('../models/Controlador')//Importa o modelo do controlador
//Rotas da API
//CRIAÇÃO DE DADOS
router.post('/', async (req, res) => {

    //req.body
    
    const {
      nome, 
      temperaturaMin, 
      temperaturaMax, 
      sensorTemperatura,
      umidadeAr, 
      sensorUmidadeAr,
      umidadeSolo, 
      sensorUmidadeSolo,
      agoar, 
      irrigar,
      rad, 
      aquecedor,
      refrigerar, 
      luzUV,  
      configAtiva,
    } = req.body

    if(!nome){
      res.status(422).json({error: 'O nome é obrigatório'})
    }
    const controlador ={
      nome, 
      temperaturaMin, 
      temperaturaMax, 
      sensorTemperatura,
      umidadeAr, 
      sensorUmidadeAr,
      umidadeSolo, 
      sensorUmidadeSolo,
      agoar, 
      irrigar,
      rad, 
      aquecedor,
      refrigerar, 
      luzUV,  
      configAtiva,
    }
  
    //Cria a entidade no Banco de dados, com o create do Mongoose

    //POST
  
    try {
      //criando dados
      await Controlador.create(controlador)
  
      res.status(201).json({message: 'Controlador inserido no sistema com sucesso'})
      
    } catch (error) {
      res.status(500).json({error: error})
    }
  
  })

  //Read - leitura de dados (TODOS) //GET

  router.get('/', async (req, res)=>{
    try {
      
      const controlador = await Controlador.find();
      res.status(200).json(controlador)

    } catch (error) {
      res.status(500).json({error: error})
    }
  })

  //ROTA DINÂMIICA - REGISTROS UNICOS
  router.get('/:id', async (req,res)=>{

    // extrair o dado da requisição, pela url = req.params
    const id = req.params.id

    try {

      const controlador = await Controlador.findOne({_id: id})

      if(!controlador){
        res.status(422).json({message: 'Controlado não encontrado'})
        return //Para por aqui
      }

      res.status(200).json(controlador)

    } catch (error) {
      res.status(500).json({error: error})
    }
  })

  //Update - Atualização de dados (PUT, PATCH)
  router.patch('/:id', async (req, res) => {
    const id = req.params.id

    const {
      nome, 
      temperaturaMin, 
      temperaturaMax, 
      sensorTemperatura,
      umidadeAr, 
      sensorUmidadeAr,
      umidadeSolo, 
      sensorUmidadeSolo,
      agoar, 
      irrigar,
      rad, 
      aquecedor,
      refrigerar, 
      luzUV,  
      configAtiva,
    } = req.body

    const controlador ={
      nome, 
      temperaturaMin, 
      temperaturaMax, 
      sensorTemperatura,
      umidadeAr, 
      sensorUmidadeAr,
      umidadeSolo, 
      sensorUmidadeSolo,
      agoar, 
      irrigar,
      rad, 
      aquecedor,
      refrigerar, 
      luzUV,  
      configAtiva,
    }
      
    try {

      const updatedControlador = await Controlador.updateOne({_id: id}, controlador)
      res.status(200).json(controlador)
    } catch (error) {
      res.status(500).json({error: error})
    }
  })

  //DELETE - DELETA DADOS
  router.delete('/:id', async(req,res)=> {

    const id = req.params.id
    //Verifica se a planta existe
    if(!controlador){
      res.status(422).json({message: 'Controlador não encontrado'})
      return //Para por aqui
    }

    try {
      await controlador.deleteOne({_id: id})
      res.status(200).json({message: 'Controlador removido com sucesso'})
    } catch (error) {
      res.status(500).json({error: error})
    }
    

  })

  module.exports = router; 
