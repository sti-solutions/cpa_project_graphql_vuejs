const db = require('../../config/db')

module.exports = {
    async companys() {
        return db('companys')
    },
    async company(_, { filtro }) {
        if(!filtro) return null
        const { id, name } = filtro
        if (id) {
            return db('companys')
                .where({ id })
                .first()
        } else if(name) {
            return db('companys')
                .where({ name })
                .first()
        } else{
            return null
        }
    },
}