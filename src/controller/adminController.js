const Admin = require("../model/Administradores");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const administradorService = require("../services/administradorService");

const adminController = {
    login: async (req, res) => {
        try {
          const {email,senha} = req.body;
    
          const admin = await Admin.findOne({ where :{ email } });
    
          if(!admin){
              return res.status(400).json({
                  msg: "Email ou senha incorretos!!"
              })
          }
    
          const isValida = await bcrypt.compare(senha, admin.senha);
          
           if(!isValida){
              return res.status(400).json({
                  msg: "Email ou senha incorretos!!"
              })
           }   
    
           const token = jwt.sign({ email: admin.email, nome: admin.nome }, process.env.SECRET, {expiresIn: '1h'});
    
          return res.status(200).json({
            msg: "Login realizado!",
            token
          });
        } catch (error) {
          return res.status(500).json({ msg: "Acione o suporte!" });
        }
      },
    create: async (req, res) =>{
        try {
            const admin = await administradorService.create(req.body);

            return res.status(200).json({msg:"Admin criado", admin})
        } catch (error) {
            return res.status(500).json({msg:"Erro ao criar admin."})
        }
    },
    update: async(req,res)=>{
        try {
            const admin = await administradorService.update(req.params.id, req.body);
            if(!admin){
                return res.status(200).json({msg:"Admin inexistente"})
            }

            return res.status(200).json({msg:"Admin atualizado.", admin})
        } catch (error) {
            return res.status(500).json({msg:"Erro ao atualizar admin."})
        }

    },
    getById: async (req,res) =>{
        try {
            const admin = await administradorService.getById(req.params.id);
            if(!admin){
                return res.status(400).json({msg:"Admin inexistente."})
            }
            return res.status(200).json({msg:"Admin encontrado",admin})
        } catch (error) {
            return res.status(500).json({msg:"Erro ao buscar unico."})
        }
    },
    getAll: async (req,res) =>{
        try {
            const admin = await administradorService.getAll();
            return res.status(200).json({msg:"Admins:",admin})
        } catch (error) {
            return res.status(500).json({msg:"Erro ao buscar todos."})
        }
    },

    delete: async (req,res)=>{
        try {
            const admin = await administradorService.delte(req.params.id);
            if(!admin){
                return res.status(400).json({msg:"Admin inexistente."})
            }
            return res.status(200).json({msg:"Deletado com sucesso.",admin})
        } catch (error) {
            return res.status(500).json({msg:"Erro ao deletar admin."})
        }
    }
}

module.exports = adminController;