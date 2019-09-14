
exports.up = function(knex) {
    return knex.schema.createTable('disciplines',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description').notNull()
        table.string('teachers_id').notNull()
        table.string('periods_id').notNull()
        table.string('students_id').notNull()
        table.timestamps(true,true)
    })

};

exports.down = function(knex) {
    return knex.schema.dropTable('disciplines')
};
