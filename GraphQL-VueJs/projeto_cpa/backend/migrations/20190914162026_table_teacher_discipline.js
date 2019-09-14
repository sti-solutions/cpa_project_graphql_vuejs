
exports.up = function(knex) {
    return knex.schema.createTable('teachers_disciplines',table=>{
        table.increments('id').primary()
        table.string('teachers_id').notNull()
        table.string('disciplines_id').notNull()
        table.timestamps(true)
        
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('teachers_disciplines')
  
};
