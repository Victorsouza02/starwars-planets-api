const axios = require("axios");

module.exports =  async function pegarAparicoes(nome_planeta) {
        const {data} = await axios.get(`https://swapi.co/api/planets/?search=${nome_planeta}`);
        console.log(data);
        if(data.count == 0){
            return "0";
        }
        const films_array= data.results[0].films;
        return films_array.length;
}