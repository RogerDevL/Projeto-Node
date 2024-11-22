const Clientes = require("../model/Clientes")

const clientesServices = {
    create: async (cliente) =>{
        try {
            return await Clientes.create(cliente);
        } catch (error) {
            throw new Error ('Ocorreu um erro ao criar cliente.');
        }
    },
    update: async (id, clienteToUpdate) =>{
        try {
            const cliente = await Clientes.findByPk(id);
            if(!cliente){
                return null;
            }
            await cliente.update(clienteToUpdate);
            await cliente.save();
            return cliente;
        } catch (error) {
            throw new Error ('Ocorreu um erro ao criar cliente.');
        }
    },
    getById: async (id) =>{
        try {
            const cliente = await Clientes.findByPk(id);
            if(!cliente){
                return null;
            }

            return cliente;
        } catch (error) {
            throw new Error ('Ocorreu um erro ao criar cliente.');
        }
    },
    getAll: async () =>{
        try {
            return await Clientes.findAll();
        } catch (error) {
            throw new Error ('Ocorreu um erro ao criar cliente.');
        }
    },
    delete: async (id) =>{
        try {
            const cliente = await Clientes.findByPk(id);
            if(!cliente) {
                return null;
            }

            cliente.destroy();
            return cliente;
        } catch (error) {
            throw new Error ('Ocorreu um erro ao criar cliente.');
        }
    }
}

module.exports = clientesServices;