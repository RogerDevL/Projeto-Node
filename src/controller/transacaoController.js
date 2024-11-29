const transacoesServices = require("../services/transacoesServices");

const transacaoController = {
    create: async (req,res)=>{
        try {
            const transacao = await transacoesServices.create(req.body);
            return res.status(200).json({msg:"Transação criada.", transacao})
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Contate o suporte."});
        }
    },
    update: async(req,res)=>{
        try {
            const transacao = await transacoesServices.update(req.params.id, req.body);
            if(!transacao){
                return res.status(400).json({msg:"Transação não existe.", transacao});
            }
            return res.status(200).json({msg:"Transação atualizada.", transacao});
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte."});
        }
    },
    getAll: async (req,res)=>{
        try {
            const transacao = await transacoesServices.getAll();
            return res.status(200).json({msg:"Transações:", transacao})
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte."});
        }
    },
    getOne: async (req,res)=>{
        try {
            const transacao = await transacoesServices.getById(req.params.id);
            if(!transacao){
                return res.status(400).json({msg:"Transação não existe.", transacao})
            }
            return res.status(200).json({msg:"Transação:", transacao})
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte."});
        }
    },
    delete: async (req,res)=>{
        try {
            const transacao = await transacoesServices.delete(req.params.id);
            if(!transacao){
                return res.status(400).json({msg:"Transação não existe.", transacao})
            }
            return res.status(200).json({msg:"Deletada com sucesso.:", transacao})
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte."}); 
        }
    }
}


module.exports = transacaoController;