
exports.up = function(knex) {
    return knex.schema.createTable('periods',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description').notNull()
        table.string('teachers_id').notNull()
        table.string('courses_id').notNull()
        table.string('disciplines_id').notNull()
        table.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('periods')
};
