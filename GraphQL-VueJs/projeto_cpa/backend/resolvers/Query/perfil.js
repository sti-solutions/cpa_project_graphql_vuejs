const db = require('../../config/db')

module.exports = {
    async perfis() {
        return db('perfis')
    },
    async perfil(_, { filtro }) {
        if(!filtro) return null
        const { id, name } = filtro
        if (id) {
            return db('perfis')
                .where({ id })
                .first()
        } else if(name) {
            return db('perfis')
                .where({ name })
                .first()
        } else{
            return null
        }
    }
}