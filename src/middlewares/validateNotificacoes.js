const validateNotificacoes = (req, res, next) =>{
    const {ID_Cliente, mensagem, data_notificacao} = req.body;
    if(typeof ID_Cliente !== 'number'){
        return res.status(400).json({msg:"Campo ID cliente inválido."})
    }

    if(!ID_Cliente || !mensagem || !data_notificacao){
        return res.status(400).json({msg:"Preencha todos os campos."})
    }

    next();
}

const validateNotificacoesId = (req,res,next)=>{
    const {id} = req.params;

    if(!id || typeof id !== 'number'){
        return res.status(400).json({msg:"Parametro ID inválido"})
    }
    
    next();
}

module.exports = {validateNotificacoes, validateNotificacoesId};