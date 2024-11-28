require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const router = require('./router/router');



const app = express();
app.use(express.json());

app.use('/api', router)

sequelize.authenticate()
    .then(()=>{
        console.log('Conexao com o banco de dados deu certo.')
        sequelize.sync();
    })
 
    .catch(err =>{
        console.log("Erro ao conectar com banco.", err);
        
    });


    const PORT = process.env.PORT || 3000


    app.listen(PORT, ()=>{
        console.log(`Running on http://${PORT}`);
        
    });









