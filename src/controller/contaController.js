const contasServices = require("../services/contasServices");

const contaController = {
    create: async (req, res) => {
        try {
            const conta = await contasServices.create(req.body);
            return res.status(200).json({ msg: "Conta criada.", conta });
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao criar conta. Contate o suporte." });
        }
    },
    update: async (req, res) => {
        try {
            const conta = await contasServices.update(req.params.id, req.body);
            if (!conta) {
                return res.status(404).json({ msg: "Conta inexistente." });
            }
            return res.status(200).json({ msg: "Conta atualizada com sucesso.", conta });
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao atualizar conta. Contate o suporte." });
        }
    },
    getAll: async (req, res) => {
        try {
            const contas = await contasServices.getAll();
            return res.status(200).json({ msg: "Lista de contas:", contas });
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao buscar contas. Contate o suporte." });
        }
    },
    getOne: async (req, res) => {
        try {
            const conta = await contasServices.getById(req.params.id);
            
            if (!conta) {
                return res.status(404).json({ msg: "Conta inexistente." });
            }
            return res.status(200).json({ msg: "Conta encontrada:", conta });
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao buscar conta. Contate o suporte." });
        }
    },
    delete: async (req, res) => {
        try {
            const conta = await contasServices.delete(req.params.id);
            if (!conta) {
                return res.status(404).json({ msg: "Conta inexistente." });
            }
            return res.status(200).json({ msg: "Conta deletada com sucesso." });
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao deletar conta. Contate o suporte." });
        }
    }
};

module.exports = contaController;
