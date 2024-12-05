const validateAdmin = (req, res, next) =>{
    const {nome, email, idade, senha} = req.body;

    if(!nome || typeof nome !== 'string'){
        return res.status(400).json({msg:"Campos inválidos."})
    }
    if(!email || typeof email !== 'string'){
        return res.status(400).json({msg:"Campos inválidos."})
    }

    if(!(email.includes("@") && email.includes("."))){
        return res.status(400).json({msg:"Campos email inválidos."})
    }

    if(!idade || typeof idade !== 'number' ){
        return res.status(400).json({msg:"Campo idade inválido."})
    }

    next();
}

const validateUserId = (req,res, next) =>{
    const {id} = req.params;

    if(!id || typeof id !== 'number'){
        return res.status(400).json({msg:"Parametro ID inválido."});
    }
    next();
}

module.exports = {validateAdmin, validateUserId}