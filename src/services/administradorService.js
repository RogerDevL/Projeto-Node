const Admin = require("../model/Administradores")
const bcrypt = require("bcryptjs/dist/bcrypt");

const administradorService = {
    create: async (admin) =>{
        try {
            const senhaCripto = await bcrypt.hash(admin.senha, 10);

            return await Admin.create({
                nome: admin.nome,
                email: admin.email,
                idade: admin.idade,
                senha: senhaCripto
            });
        } catch (error) {
            throw new Error ('Ocorreu um erro ao criar admin.');
        }
    },
    update: async (id, adminToUpdate) =>{
        try {
            const admin = await Admin.findByPk(id);

            const senhaCripto = await bcrypt.hash(admin.senha, 10);
            if(!admin){
                return null;
            }
            await admin.update({
                nome: adminToUpdate.nome,
                email: adminToUpdate.email,
                idade: adminToUpdate.idade,
                senha: senhaCripto
            });

            await admin.save();
            return admin;
        } catch (error) {
            throw new Error ('Ocorreu um erro ao atualizar admin.');
        }
    },
    getById: async (id) =>{
        try {
            const admin = await Admin.findByPk(id);
            if(!admin){
                return null;
            }
            return admin;
        } catch (error) {
            throw new Error ('Ocorreu um erro ao buscar admin.');
        }
    },
    getAll: async () =>{
        try {
            return await Admin.findAll();
        } catch (error) {
            throw new Error ('Ocorreu um erro ao buscar.');
        }
    },
    delte: async (id) =>{
        try {
            const admin = await Admin.findByPk(id);
            if(!admin){
                return null
            }
            await admin.destroy();
            await admin.save()
            return admin;
        } catch (error) {
            throw new Error ('Ocorreu um erro ao deletar.');
        }
    }
}

module.exports = administradorService;