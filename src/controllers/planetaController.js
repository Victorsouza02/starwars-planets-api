
const express = require('express');
const request = require('request');
const pegarAparicoes = require("../utils/pegarAparicoes");
const {check,validationResult} = require('express-validator');
const Planeta = require('../models/Planeta');
const router = express.Router();


module.exports = {
    async store (req,res) {
        const { nome } = req.body;
        try {
            let errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(422).send(
                    { 
                        errors : errors.array()
                    }
                    );
            }

            if( await Planeta.findOne({ nome })){
                return res.status(400).send({ error: "Planeta já está cadastrado"});
            }
            
            var dados = {
                nome : req.body.nome,
                clima : req.body.clima,
                terreno : req.body.terreno,
                qtd_aparicoes : await pegarAparicoes(req.body.nome),
            }

            const planeta =  await Planeta.create(dados);

            return res.send(planeta);
        } catch (err){
            return res.status(400).send({ error : 'Registro falhou'});
        }
    },

    async index (req,res){
        try {
            const {id, nome} = req.query;
            let planetas;
            if (id && !nome){
                planetas = await Planeta.findById(id);
            } else if (nome && !id){
                planetas = await Planeta.find({nome});
            } else {
                planetas = await Planeta.find();
            }
            return res.send({ planetas });
        } catch(err){
            return res.status(400).send({ error : 'Erro ao buscar planetas'});
        }
    },

    async deleteId (req,res) {
        try {
            const planeta = await Planeta.findByIdAndDelete(req.params.id);
            return res.send({ planeta });
        } catch(err){
            return res.status(400).send({ error : 'Erro ao buscar planeta'});
        }
    }

}
