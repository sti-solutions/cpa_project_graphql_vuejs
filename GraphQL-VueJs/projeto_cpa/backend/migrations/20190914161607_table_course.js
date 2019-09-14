
exports.up = function(knex) {
    return knex.schema.createTable('courses',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('company_id').notNull()
        table.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('courses')
  
};
