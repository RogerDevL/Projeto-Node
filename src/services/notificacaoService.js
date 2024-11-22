const Notificacoes = require("../model/Notificacoes")

const notificacaoService = {
    create: async (notificacao) =>{
        try {
            return await Notificacoes.create(notificacao);
        } catch (error) {
            throw new Error ('Ocorreu um erro ao criar uma mensagem.');
        }
    },
    update: async (id, notToUpdate) =>{
        try {
            const noti = await Notificacoes.findByPk(id);
            if(!noti){
                return null;
            }
            await noti.update(notToUpdate);
            await noti.save();
            return noti;
        } catch (error) {
            throw new Error ('Ocorreu um erro ao atualizar mensagem.');
        }
    },
    getById: async (id) =>{
        try {
            const noti = await Notificacoes.findByPk(id);
            if(!noti){
                return null;
            }
            return noti;
        } catch (error) {
            throw new Error ('Ocorreu um erro ao buscar mensagem.');
        }
    },
    getAll: async () =>{
        try {
            return await Notificacoes.findAll();
        } catch (error) {
            throw new Error ('Ocorreu um erro ao buscar.');
        }
    },
    delete: async (id) =>{
        try {
            const noti = await Notificacoes.findByPk(id);
            if(!noti){
                return null;
            }

            await noti.destroy();
            await noti.save();
            return noti;

        } catch (error) {
            throw new Error ('Ocorreu um erro ao deletar.');
        }
    }
}

module.exports = notificacaoService;