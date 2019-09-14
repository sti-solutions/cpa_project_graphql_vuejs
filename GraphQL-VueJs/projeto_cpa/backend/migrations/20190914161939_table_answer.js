
exports.up = function(knex) {
    return knex.schema.createTable('answers',table=>{
        table.increments('id').primary()
        table.string('students_id').notNull()
        table.string('questions_id').notNull()
        table.string('options_is').notNull()
        table.string('teacher_discipline_id').notNull()
        table.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('answers')
  
};
