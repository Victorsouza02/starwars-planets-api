# StarWars-API REST Node.js

# O que foi pedido
Nossos associados são aficionados por Star Wars e com isso, queremos criar um jogo com algumas informações da franquia.

Para possibilitar a equipe de front criar essa aplicação, queremos desenvolver uma API que contenha os dados dos planetas. Requisitos:

    A API deve ser REST

    Para cada planeta, os seguintes dados devem ser obtidos do banco de dados da aplicação, sendo inserido manualmente:
        Nome
        Clima
        Terreno

    Para cada planeta também devemos ter a quantidade de aparições em filmes, que podem ser obtidas pela API pública do Star Wars: https://swapi.co/

Funcionalidades desejadas:

    Adicionar um planeta (com nome, clima e terreno)
    Listar planetas
    Buscar por nome
    Buscar por ID
    Remover planeta

May the force be with you!


# Instruções de Uso

### Pré-requisitos :
- Node.js
- MongoDB
- Insomnia (No caso eu usei esse para testar as requisições)

### Clonar o repositório, instalar as dependências e iniciar o servidor :
    git clone https://github.com/Victorsouza02/StarWars-Planetas-API.git
    cd StarWars-Planetas-API
    npm install
    node src/index

### Dados :
- Endereço Local : http://localhost:3000

### Comandos :

- Adicionar um novo planeta : POST http://localhost:3000/planetas/adicionar

```javascript
  {
    "nome": "Planeta",
    "clima": "Árido",
    "terreno": "Deserto"
  } 
  ```
  
- Listar todos os planetas cadastrados : GET http://localhost:3000/planetas/
- Buscar planeta pelo nome : GET http://localhost:3000/planetas/nome/NOME_DO_PLANETA
- Buscar planeta pelo ID : GET http://localhost:3000/planetas/id/ID_DO_PLANETA
- Deletar planeta pelo ID : DELETE http://localhost:3000/planetas/id/ID_DO_PLANETA
