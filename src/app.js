const express = require('express');
const sequelize = require('./config/database');



const app = express();
app.use(express.json());



sequelize.authenticate()
    .then(()=>{
        console.log('Conexao com o banco de dados deu certo.')
    })
 
    .catch(err =>{
        console.log('Erro ao conectar com banco.');
        
    });


    const PORT = process.env.PORT || 3000


    app.listen(PORT, ()=>{
        console.log(`Running on http://${PORT}`);
        
    });









