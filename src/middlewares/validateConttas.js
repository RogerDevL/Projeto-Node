const validateConta = (req,res,next) =>{
    const {ID_Cliente, Saldo} = req.body;

    if(typeof ID_Cliente !== 'number'){
        return res.status(400).json({msg:"Campo do ID cliente inválido."})
    }

    if(!Saldo || !ID_Cliente){
        return res.status(400).json({msg:"Por favor preencha o campo Saldo."})
    }

    next();
}

const validateContaId = (req,res,next) =>{
    const {id} = req.params;

    if(!id || typeof id !== 'number'){
        return res.status(400).json({msg:"Parametro ID inválido"})
    }

    next();
}

module.exports = {validateConta, validateContaId};