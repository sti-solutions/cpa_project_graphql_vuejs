
exports.up = function(knex) {
    return knex.schema.createTable('periods',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description').notNull()
        table.integer('courses_id').unsigned().references('courses.id');
        table.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('periods')
};
