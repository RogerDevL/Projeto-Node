const clientesServices = require("../services/clientesServices")

const clienteController = {
    create: async (req, res) =>{
        try {
            const cliente = await clientesServices.create(req.body);
            return res.status(200).json({msg:"Cliente criado", cliente})
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte."})
        }
    },
    update:async (req, res) =>{
        try {
            const cliente = await clientesServices.update(req.params.id, req.body);
            if(!cliente){
                return res.status(400).json({msg:"Erro ao tentar editar cliente."})
            }
            return res.status(200).json({msg:"CLiente editado.", cliente})
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte."})
        }
    },
    getAll:async(req, res) =>{
        try {
            const cliente = await clientesServices.getAll()
            return res.status(200).json({msg:"Todos clientes."})
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte"})
        }
    },
    getOne: async (req, res) =>{
        try {
            const cliente = await clientesServices.getById(req.params.id);
            if(!cliente){
                return res.status(400).json({msg:"Cliente não encontrado."})
            }
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte"})
        }
    },
    delete: async(req, res) =>{
        try {
            const cliente = await clientesServices.delete(req.params.id);
            if(!cliente){
                return res.status(400).json({msg:"Cliente não encontrado."})
            }
        } catch (error) {
            return res.status(500).json({msg:"Contate o suporte."})
        }
    }
}

module.exports = clienteController;