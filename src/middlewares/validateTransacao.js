const validateTransacao = (req,res,next) =>{
    const {ID_Conta, tipo, tipo_Transacao, valor, data_Transacao} = req.body;

    if(typeof ID_Conta !== 'number' ){
        return res.status(400).json({msg:"Campo ID conta inválido."})
    }

    if(!ID_Conta, !tipo, !tipo_Transacao, !valor, !data_Transacao){
        return res.status(400).json({msg:"Preencha todos os campos!"})
    }

    next();
}

const validateTransacaoId = (req, res, next) =>{
    const {id} = req.params;

    if(!id || typeof id !== 'number'){
        return res.status(400).json({msg:"Parametro ID inválido"})
    }

    next();

}

module.exports = {validateTransacao, validateTransacaoId};