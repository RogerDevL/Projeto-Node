const Transacoes = require("../model/Transacoes")

const transacoesServices = {
    create: async(transacoes) =>{
        try {
            return await Transacoes.create(transacoes);
        } catch (error) {
            throw new Error ('Ocorreu um erro ao realizar uma transação');
        }
    },
    update: async (id, transacaoToUpdate) =>{
        try {
            const transacao = await Transacoes.findByPk(id);
            if(!transacao){
                return null;
            }

            await transacao.update(transacaoToUpdate);
            await transacao.save(); 
            return transacao;
        } catch (error) {
            throw new Error ('Ocorreu um erro ao atualizar transação.');
        }
    },
    getById: async (id) =>{
        try {
            const transacao = await Transacoes.findByPk(id);
            if(!transacao){
                return null;
            }
            return transacao;
        } catch (error) {
            throw new Error ('Ocorreu um erro ao buscar uma transação.');
        }
    },
    getAll: async () =>{
        try {
            return await Transacoes.findAll();
        } catch (error) {
            throw new Error ('Ocorreu um erro ao buscar transações.');
        }
    },
    delete: async (id) =>{
        try {
            const transacao = await Transacoes.findByPk(id);
            if(!transacao){
                return null;
            }
            await transacao.destroy();
            await transacao.save();
            return transacao;
        } catch (error) {
            
        }
    }
}

module.exports = transacoesServices;