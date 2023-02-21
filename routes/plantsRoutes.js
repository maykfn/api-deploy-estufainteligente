const router = require('express').Router()

const Plants = require('../models/Plants') //Importa o modelo das plantas no modelo
//Rotas da API
//CRIAÇÃO DE DADOS
router.post('/', async (req, res) => {

    //req.body
    //Exemplo de como vai ficar: {nome: "Morango", temperatura: 50, umidadeAr:30, umidadeSolo: 50, diasCultivo: 31 approved: false}
    const {nome, temperaturaMin, temperaturaMax, desc, umidadeAr, umidadeSolo, diasCultivo, imagem, approved} = req.body
  
    if(!nome){
      res.status(422).json({error: 'O nome é obrigatório'})
    }
    const plants ={
      nome,
      temperaturaMin,
      temperaturaMax,
      desc,
      umidadeAr,
      umidadeSolo,
      diasCultivo,
      imagem,
      approved,
    }
  
    //Cria a entidade no Banco de dados, com o create do Mongoose

    //POST
  
    try {
      //criando dados
      await Plants.create(plants)
  
      res.status(201).json({message: 'Planta inserida no sistema com sucesso'})
      
    } catch (error) {
      res.status(500).json({error: error})
    }
  
  })

  //Read - leitura de dados (TODOS) //GET

  router.get('/', async (req, res)=>{
    try {
      
      const plants = await Plants.find();
      res.status(200).json(plants)

    } catch (error) {
      res.status(500).json({error: error})
    }
  })

  //ROTA DINÂMIICA - REGISTROS UNICOS
  router.get('/:id', async (req,res)=>{

    // extrair o dado da requisição, pela url = req.params
    const id = req.params.id

    try {

      const plants = await Plants.findOne({_id: id})

      if(!plants){
        res.status(422).json({message: 'A planta não foi encontrada'})
        return //Para por aqui
      }

      res.status(200).json(plants)

    } catch (error) {
      res.status(500).json({error: error})
    }
  })

  //Update - Atualização de dados (PUT, PATCH)
  router.patch('/:id', async (req, res) => {
    const id = req.params.id

    const {nome, temperaturaMin, temperaturaMax, desc, umidadeAr, umidadeSolo, imagem, diasCultivo, approved} = req.body

    const plants ={
      nome,
      temperaturaMin,
      temperaturaMax,
      desc,
      umidadeAr,
      umidadeSolo,
      diasCultivo,
      imagem,
      approved,
    }
    try {

      const updatedPlant = await Plants.updateOne({_id: id}, plants)
      res.status(200).json(plants)
    } catch (error) {
      res.status(500).json({error: error})
    }
  })

  //DELETE - DELETA DADOS
  router.delete('/:id', async(req,res)=> {

    const id = req.params.id
    //Verifica se a planta existe
    if(!plants){
      res.status(422).json({message: 'A planta não foi encontrada'})
      return //Para por aqui
    }

    try {
      await Plants.deleteOne({_id: id})
      res.status(200).json({message: 'Planta removida com sucesso'})
    } catch (error) {
      res.status(500).json({error: error})
    }
    

  })

  module.exports = router; 
  