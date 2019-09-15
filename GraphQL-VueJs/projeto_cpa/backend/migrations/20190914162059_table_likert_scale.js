
exports.up = function(knex) {
    return knex.schema.createTable('likert_scale',table=>{
        table.increments('id').primary()
        table.string('description').notNull()
        table.integer('questions_id').unsigned().references('questions.id');
        table.timestamps(true,true)
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('likert_scale')
};
