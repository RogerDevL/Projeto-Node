const contasServices = require("../services/contasServices")

const contaController = {
    create: async (req, res) =>{
        try {
            const conta = await contasServices.create(req.body);
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
    },
    getAll: async(req,res) =>{
        try {
            const conta = await contasServices.getAll();
            return req.status(200).json({msg:"Contas: ", conta})
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte."})
        }
    },
    getOne: async(req, res) =>{
        try {
            const conta = await contasServices.getById(req.params.id);
            if(!conta){
                return res.status(400).json({msg:"Conta inexistente"})
            }
            return req.status(200).json({msg:"Conta: ", conta})
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte."});
        }
    },
    delete: async (req,res)=>{
        try {
            const conta = await contasServices.delete(req.params.id);
            if(!conta){
                return res.status(400).json({msg:"Conta inexistente"})
            }
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte."});
        }
    }

}

module.exports = contaController;