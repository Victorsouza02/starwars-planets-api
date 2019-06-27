const mongoose = require('../database');

const autoIncrement = require('mongoose-auto-increment');

const PlanetaSchema = new mongoose.Schema({
    _id:{
        type: String
    },

    nome: {
        type : String,
        required : true,
    },

    clima: {
        type : String,
        required : true,
    },

    terreno: {
        type : String,
        required : true,
    },

    qtd_aparicoes: {
        type : String,
    }
}, {versionKey : false});

autoIncrement.initialize(mongoose.connection);

PlanetaSchema.plugin(autoIncrement.plugin,{
    model: 'Planeta',
    field: '_id',
    startAt: 1,
    incrementBy: 1
});

const Planeta = mongoose.model('Planeta', PlanetaSchema);

module.exports = Planeta;