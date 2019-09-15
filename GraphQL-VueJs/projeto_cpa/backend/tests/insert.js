const db = require('../config/db')

const novoPerfil = {
    name: 'cadastrador',
    rotulo:'Cadastrador'
}

db('perfis').insert(novoPerfil)
    .then(res => console.log(res))
    .catch(err=>console.log(err.sqlMessage))
    .finally(()=>db.destroy())