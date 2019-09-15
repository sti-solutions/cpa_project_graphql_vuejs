
exports.up = function(knex) {
    return knex.schema.createTable('students',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull()
        table.string('register').notNull()
        table.string('mobile').notNull()
        table.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('students')
  
};
