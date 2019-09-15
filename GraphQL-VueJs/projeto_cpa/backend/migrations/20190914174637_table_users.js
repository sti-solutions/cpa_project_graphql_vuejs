
exports.up = function(knex) {
    return knex.schema.createTable('users',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password',60).notNull()
        table.boolean('ativo').notNull()
            .defaultTo(true)
        table.timestamps(true,true)
    }).then(function () {
        return knex('users').insert([
            {name:'Iago' ,email:'iago@santo.com',password:'123456'},
            {name:'Maria' ,email:'maria@santo.com',password:'123456'},
            {name:'João' ,email:'joao@santo.com',password:'123456'}
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
