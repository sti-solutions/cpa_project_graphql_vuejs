
exports.up = function(knex) {
    return knex.schema.createTable('company_type',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.timestamps(true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('company_type')
  
};
