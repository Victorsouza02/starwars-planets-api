const mongoose = require('mongoose');

const PlanetaSchema = new mongoose.Schema({
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
});

const Planeta = mongoose.model('Planeta', PlanetaSchema);

module.exports = Planeta;