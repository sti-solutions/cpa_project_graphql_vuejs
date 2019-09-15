const usuario = require('./usuario')
const perfil = require('./perfil')
const company = require('./company')

 module.exports = {
    ...usuario,
    ...perfil,
    ...company
 }