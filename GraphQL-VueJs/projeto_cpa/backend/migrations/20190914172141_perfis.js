
exports.up = function(knex) {
    return knex.schema.createTable('perfis',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('rotulo').notNull()
    })

  
};

exports.down = function(knex) {
    return knex.schema.dropTable('perfis')
  
};
