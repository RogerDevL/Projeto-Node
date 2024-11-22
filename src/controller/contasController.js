const contasServices = require("../services/contasServices")

const contaController = {
    create: async (req, res) =>{
        try {
            const conta = await contasServices.create();
            return res.status(200).json({msg:"Conta criada.", conta})
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte."})
        }
    },
    update: async (req, res) =>{
        try {
            const conta = await contasServices.update(req.params.id, req.body);
            if(!conta){
                return res.status(400).json({msg:"Conta inexistente"})
            }
            return req.status(200).json({msg:"Conta atualizada", conta})
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte."})
        }
    }
}