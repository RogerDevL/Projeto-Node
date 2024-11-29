const notificacaoService = require("../services/notificacaoService");


const notificacoesController = {
    create: async (req,res) =>{
        try {
            const noti = await notificacaoService.create(req.body);
            return res.status(200).json({msg:"Noticação criada", noti});
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte."});
        }
    },
    update: async(req, res)=>{
        try {
            const noti = await notificacaoService.update(req.params.id, req.body);
            if(!noti){
                return res.status(400).json({msg:"Notificação não existe.", noti})
            }
            return res.status(200).json({msg:"Atualizado com sucesso.", noti})
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte."});
        }
    },
    getAll: async(req,res)=>{
        try {
            const noti = await notificacaoService.getAll();
            return res.status(200).json({msg:"Notificações: ", noti})
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte."});
        }
    },
    getOne: async (req,res)=>{
        try {
            const noti = await notificacaoService.getById(req.params.id);
            if(!noti){
                return res.status(400).json({msg:"Notificação não existe.", noti});
            }
            return res.status(200).json({msg:"Conta:", noti})
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte."});
        }
    },
    delete: async(req,res)=>{
        try {
            const noti = await notificacaoService.delete(req.params.id);
            if(!noti){
                return res.status(400).json({msg:"Notificação não existe.", noti});
            }
            return res.status(200).json({msg:"Notificação não existe.", noti});
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte."});
        }
    }
}

module.exports = notificacoesController;