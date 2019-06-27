
const express = require('express');

const request = require('request');

const Planeta = require('../models/Planeta');

const router = express.Router();


// ADICIONA NOVO PLANETA
router.post('/adicionar', async (req,res) => {
    const { nome } = req.body;
    try {

        if( await Planeta.findOne({ nome }))
            return res.status(400).send({ error: "Planeta já está cadastrado"});
        
       var dados = {
           nome : req.body.nome,
           clima : req.body.clima,
           terreno : req.body.terreno,
           qtd_aparicoes : await pegarAparicoes(req.body.nome)
       }
        const planeta =  await Planeta.create(dados);

        return res.send(planeta);
    } catch (err){
        return res.status(400).send({ error : 'Registro falhou'});
    }
});


function pegarAparicoes(nome_filme) {
    return new Promise((resolve, reject) => {
        request('https://swapi.co/api/planets/?search='+nome_filme, (error, response, body) => {
          if (error) {
            reject(error)
          } else {
            try{
                const info = JSON.parse(body);
                let films = info['results'][0]['films'];
                resolve(films.length);
            } catch (err){
                resolve(0);
            }
          }
        })
      })
}

//LISTAR TODOS OS PLANETAS
router.get('/', async (req,res) => {
    try {
        const planetas = await Planeta.find();
        return res.send({ planetas });
    } catch(err){
        return res.status(400).send({ error : 'Erro ao buscar planetas'});
    }
});

// PESQUISAR PLANETA POR ID
router.get('/id/:planetaId', async (req,res) =>{
    try {
        const planeta = await Planeta.findById(req.params.planetaId);
        return res.send({ planeta });
    } catch(err){
        return res.status(400).send({ error : 'Erro ao buscar planeta'});
    }
});

// PESQUISAR PLANETA POR NOME
router.get('/nome/:planetaNome', async (req,res) =>{
    try {
        const planeta = await Planeta.find({nome : req.params.planetaNome});
        return res.send({ planeta });
    } catch(err){
        return res.status(400).send({ error : 'Erro ao buscar planeta'});
    }
});

// DELETAR PLANETA POR ID
router.delete('/id/:planetaId',async (req,res) =>{
    try {
        await Planeta.findByIdAndDelete(req.params.planetaId);
        return res.send();
    } catch(err){
        return res.status(400).send({ error : 'Erro ao deletar planeta'});
    }
});

module.exports = app => app.use('/planetas', router);