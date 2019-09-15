const db = require('../config/db')

const newUser = {
    name:'Iago',
    email:'iagofalcom@hotmail.com',
    senha:'123456'
}

async function exercicio(){

    
    //count
    const { qtde }  = await db('users')
        .count('* as qtde')
        .first()
    console.log(qtde)


    //inserir se a tabela estiver vazia
    if (qtde === 0) {
        await db('users').insert(newUser)    
    }


    //consultar
    let { id } = await db('users')
        .select('id').limit(1).first()
    console.log(id)


    //alterar
    await db('users').where({ id })
        .update({ name: 'Iago '})

    return await db('users')    
        .where({ id })

}

exercicio()
    .then(users=>console.log(users))
    .finally(()=> db.destroy())