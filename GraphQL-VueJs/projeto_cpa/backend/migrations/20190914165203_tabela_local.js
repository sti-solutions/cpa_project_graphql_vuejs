
exports.up = function(knex) {
    return knex.schema.createTable('locals',table=>{
        table.increments('id').primary()
        table.string('city').notNull().unique()
        table.string('uf').notNull()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('locals')
  
};
