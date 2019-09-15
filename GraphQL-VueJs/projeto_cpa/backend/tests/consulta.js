const db = require('../config/db')

db('perfis')
    //.then(res=>console.log(res))
    .then(res=> res.map(p=>p.name))
    .then(nomes=>console.log(nomes))
    .then(res => console.log(res))
    .catch(err=>console.log(err.sqlMessage))
    .finally(()=>db.destroy())

/*Utilizado para fazer paginação 
    db.select('name','id')
    .from('perfis')
    .limit(4).offset(2)
    .then(res=>console.log(res))
    .finally(()=>db.destroy())
    .first()
*/

/*Buscas com like %maria% 
    db('perfis')
        .where({id:2})
        .where('nome','like','%m%')
        .then(res => console.log(res))
        .finally(()=>db.destroy())
*/