
exports.up = function(knex) {
    return knex.schema.createTable('teachers_disciplines',table=>{
        table.increments('id').primary()
        table.integer('disciplines_id').unsigned().references('disciplines.id');
        table.integer('teachers_id').unsigned().references('teachers.id');
        table.timestamps(true,true)
        
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('teachers_disciplines')
  
};
