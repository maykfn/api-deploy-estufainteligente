const mongoose = require('mongoose');

const Plants = mongoose.model('Plants', {
    nome: String,
    temperaturaMin: Number,
    temperaturaMax: Number,
    desc: String,
    umidadeAr: Number, 
    umidadeSolo: Number, 
    diasCultivo: Number, 
    imagem: String,
    approved: Boolean, //Quando ativo na configuração vira true

}) //Cria a tabela chamada Plantas

module.exports = Plants //Exporta o módulo para poder importar em outras telas