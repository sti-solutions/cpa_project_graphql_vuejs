
exports.up = function(knex) {
    return knex.schema.createTable('evaluations',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description').notNull()
        table.string('date').notNull()
        table.timestamps(true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('evaluations')
  
};
