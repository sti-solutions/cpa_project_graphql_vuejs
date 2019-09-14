
exports.up = function(knex) {
    return knex.schema.createTable('students_disciplines',table=>{
        table.increments('id').primary()
        table.string('students_id').notNull()
        table.string('disciplines_id').notNull()
        table.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('students_disciplines')
  
};
