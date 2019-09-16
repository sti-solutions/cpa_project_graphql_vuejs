const usuario = require('./usuario')
const perfil = require('./perfil')
const company = require('./company')
const course = require('./course')

 module.exports = {
    ...usuario,
    ...perfil,
    ...company,
    ...course
 }