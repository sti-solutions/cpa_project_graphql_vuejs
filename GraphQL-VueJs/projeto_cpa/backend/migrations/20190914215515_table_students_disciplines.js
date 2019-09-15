exports.up = function(knex) {
    return knex.schema.createTable('students_disciplines',table=>{
        table.increments('id').primary()
        table.integer('students_id').unsigned().references('students.id')
        table.integer('disciplines_id').unsigned().references('disciplines.id')
        table.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('students_disciplines')
  
};