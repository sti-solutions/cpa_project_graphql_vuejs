
exports.up = function(knex) {
    return knex.schema.createTable('disciplines',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description').notNull()
        table.integer('periods_id').unsigned().references('periods.id')
        table.timestamps(true,true)
    })

};

exports.down = function(knex) {
    return knex.schema.dropTable('disciplines')
};
