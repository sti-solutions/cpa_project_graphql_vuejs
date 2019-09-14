
exports.up = function(knex) {
    return knex.schema.createTable('periods',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description').notNull()
        table.string('student_id').notNull()
        table.timestamps(true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('periods')
};
