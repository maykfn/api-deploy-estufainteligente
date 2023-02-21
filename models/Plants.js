const mongoose = require('mongoose');

const Plants = mongoose.model('Plants', {
    nome: String,
    temperatura: Number,
    umidadeAr: Number, 
    umidadeSolo: Number, 
    diasCultivo: Number, 
    approved: Boolean,

}) //Cria a tabela chamada Plantas

module.exports = Plants //Exporta o módulo para poder importar em outras telas