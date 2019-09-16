const db = require('../../config/db')

module.exports = {
    async courses() {
        return db('courses')
    },
    async course(_, { filtro }) {
        if(!filtro) return null
        const { id , name} = filtro
        if (id) {
            return db('courses')
                .where({ id })
                .first()
        } else if(name) {
            return db('courses')
                .where({ name })
                .first()
        } else{
            return null
        }
    },
}