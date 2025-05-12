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
}
export default new UsuarioController()