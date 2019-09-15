
exports.up = function(knex) {
    return knex.schema.createTable('evaluations',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description').notNull()
        table.date('date').notNull()
        table.integer('courses_id').unsigned().references('courses.id');
        table.string('questions_id').notNull()
        table.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('evaluations')
  
};
