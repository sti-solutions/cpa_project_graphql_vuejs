exports.up = function(knex) {
    return knex.schema.createTable('answers',table=>{
        table.increments('id').primary()
        table.integer('students_id').unsigned().references('students.id')
        table.integer('questions_id').unsigned().references('questions.id');
        table.integer('options_id').unsigned().references('options.id');
        table.integer('teachers_disciplines_id').unsigned().references('teachers_disciplines.id');
        table.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('answers')
  
};