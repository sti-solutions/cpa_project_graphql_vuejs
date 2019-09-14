
exports.up = function(knex) {
    return knex.schema.createTable('disciplines',table=>{
        table.increments('id').primary()
        table.string('name').notNull().unique()
        table.string('description').notNull()
        table.string('student_id').notNull()
    })

};

exports.down = function(knex) {
    return knex.schema.dropTable('disciplines')
};
