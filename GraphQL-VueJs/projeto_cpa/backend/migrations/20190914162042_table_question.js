
exports.up = function(knex) {
    return knex.schema.createTable('questions',table=>{
        table.increments('id').primary()
        table.string('title').notNull()
        table.string('description').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('questions')
};