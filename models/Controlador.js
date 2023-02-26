const mongoose = require('mongoose');

const Controlador = mongoose.model('Controlador', {
    nome: String,
    temperaturaMin: Number,
    temperaturaMax: Number,
    sensorTemperatura: Number,
    volTanque: Number,
    umidadeAr: Number, 
    sensorUmidadeAr: Number,
    umidadeSolo: Number, 
    sensorUmidadeSolo: Number,
    agoar: Number, //Quantidade necessaria de água
    irrigar: Boolean, //Ativar irrigador on ou off
    rad: Number,
    aquecedor: Boolean,
    refrigerar: Boolean,
    luzUV: Boolean,
    configAtiva: Boolean, //Quando ativo na configuração vira true
    estufaLigada: Boolean,

}) //Cria a tabela chamado Controlador

module.exports = Controlador //Exporta o módulo para poder importar em outras telas