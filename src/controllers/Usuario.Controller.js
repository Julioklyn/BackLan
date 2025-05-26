import Usuario from '../models/Usuario.js'

class UsuarioController {
    async store(req, res) {
        const { nome, email, senha } = req.body
        try {
            const usuario = await Usuario.create({nome, email,senha})
            return res.status(201).json(usuario)
        } catch (error) {
            return res.status(500).json({error: 'Erro ao criar usuario'})
        }
}

    async index(req, res) {
        try {
            const usuarios = await Usuario.findAll()
            return res.status(200).json(usuarios)
        } catch (error) {
            return res.status(500).json({error: 'Erro ao listar usuarios'})
        }
    }

    async show(req, res) {
        const { email } = req.params
        try {
            const usuario = await Usuario.findOne({ where: { email } })
            if (!usuario) {
                return res.status(404).json({ error: 'Usuario não encontrado' })
            }
            return res.status(200).json(usuario)
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar usuario' })
        }
    }

    async show(req,res){
        const { email } = req.params
        try {
            const usuario = await Usuario.findOne({ where: { email } })
            if (!usuario) {
                return res.status(404).json({ error: 'Usuario não encontrado' })
            }
            return res.status(200).json(usuario)
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar usuario' })
        }
    }

    async update(req, res) {
        const { email } = req.params
        const { nome, senha } = req.body
        try {
            const usuario = await Usuario.findOne({ where: { email } })
            if (!usuario) {
                return res.status(404).json({ error: 'Usuario não encontrado' })
            }
            usuario.nome = nome || usuario.nome
            usuario.senha = senha || usuario.senha
            await usuario.save()
            return res.status(200).json(usuario)
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao atualizar usuario' })
        }
        
    } 

    async delete(req, res) {
        const { id } = req.params
        try {
            const usuario = await Usuario.findByPk(id)
            if (!usuario) {
                return res.status(404).json({ error: 'Usuario não encontrado' })
            }
            await usuario.destroy()
            return res.status(204).send()
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao deletar usuario' })
        }
    }
}
export default new UsuarioController()