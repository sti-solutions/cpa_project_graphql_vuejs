const db = require('../../config/db')

module.exports = {
    courses(companys) {
        return db('courses')
            .join(
                'companys',
                'companys.id',
                'courses.companys_id'
            )
            .where({ company: company_id.id })
    }
}