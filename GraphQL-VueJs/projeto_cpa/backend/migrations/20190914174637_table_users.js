
exports.up = function(knex) {
    return knex.schema.createTable('users',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password',60).notNull()
        table.boolean('ativo').notNull()
            .defaultTo(true)
        table.timestamps(true,true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
