
exports.up = function(knex) {
    return knex.schema.createTable('options',table=>{
        table.increments('id').primary()
        table.string('description').notNull()
        
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('options')
  
};
