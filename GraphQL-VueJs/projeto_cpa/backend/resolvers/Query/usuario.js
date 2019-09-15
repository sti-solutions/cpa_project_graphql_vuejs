const db = require('../../config/db')

module.exports = {
    async usuarios() {
        return db('users')
    },
    async usuario(_, { filtro }) {
        if(!filtro) return null
        const { id, email } = filtro
        if (id) {
            return db('users')
                .where({ id })
                .first()
        } else if(email) {
            return db('users')
                .where({ email })
                .first()
        } else{
            return null
        }
    },
}