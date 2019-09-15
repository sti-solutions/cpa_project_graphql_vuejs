
exports.up = function(knex) {
    return knex.schema.createTable('questions',table=>{
        table.increments('id').primary()
        table.string('title').notNull()
        table.string('description').notNull()
        table.integer('evaluations_id').unsigned().references('evaluations.id');
        table.string('likert_scale_id').notNull()
        table.timestamps(true,true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('questions')
};
