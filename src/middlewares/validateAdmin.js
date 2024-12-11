const validateAdmin = (req, res, next) =>{
    const {nome, email, idade, senha} = req.body;

    if(!nome || typeof nome !== 'string'){
        return res.status(400).json({msg:"Campo nome inválido."})
    }
    if(!email || typeof email !== 'string'){
        return res.status(400).json({msg:"Campos email inválido.."})
    }

    if(!(email.includes("@") && email.includes("."))){
        return res.status(400).json({msg:"Campo email deve conter @ e . !"})
    }

    if(!idade || typeof idade !== 'number' ){
        return res.status(400).json({msg:"Campo idade inválido."})
    }

    next();
}

const validateAdminId = (req,res, next) =>{
    const {id} = req.params;

    if(!id || typeof id !== 'string'){
        return res.status(400).json({msg:"Parametro ID inválido."});
    }
    next();
}

module.exports = {validateAdmin, validateAdminId};